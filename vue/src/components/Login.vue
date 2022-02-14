<template>
  <div class="login">
    <h1>LOGIN</h1>
    <div class="warning" v-if="badLogin">
        Incorrect login credentials. Please try again.
    </div>
    <input v-model="username" type="text" placeholder="username"><br>
    <input v-model="password" type="password" placeholder="password"><br>
    <button @click="login()">LOGIN</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Login',
  data:()=>{
    return {
      username: 'admin',
      password: 'admin',
      badLogin: false
    }
  },
  mounted(){
      const token = localStorage.getItem('token');
      const username = localStorage.getItem('username');
      if(token && username){
          const out = {
            token: token,
            username: username,
        }
        this.$emit('login-success', out);
        console.log('Found existing login token.');
      }
  },
  methods:{
    login: async function(){
        try{
            const response = await axios.post('/login/', 
            {
                username: this.username,
                password: this.password
            });
            console.log(response);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', response.data.username);
            const out = {
                token: response.data.token,
                username: response.data.username,
            }
            this.$emit('login-success', out);
        }catch(err){
            this.badLogin = true;
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
