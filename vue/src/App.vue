<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div class="app">
    <div v-if="!user.isLoggedIn">
      <Login @login-success="login"/>
    </div>
    <div v-else>
      <div class="top-bar">
        Welcome {{user.username}} | <span class="span-btn" @click="logout()">Logout</span>
        <hr>
          <span class="lower-nav sm">
            <span class="span-btn" @click="changeScreen('incoming')">Incoming</span> | 
            <span class="span-btn" @click="changeScreen('public')">Public</span> | 
            <span class="span-btn" @click="changeScreen('private')">Private</span> | 
            <span class="span-btn" @click="changeScreen('upload')">Upload</span> | 
            <span class="span-btn" @click="changeScreen('settings')">Settings</span>
        </span>
      </div>
      <Upload v-if="state.screen === 'upload'" :user="user"/>
      <Listing v-if="state.screen === 'public'" :user="user" type="public"/>
      <Listing v-if="state.screen === 'incoming'" :user="user" type="incoming"/>
      <Listing v-if="state.screen === 'private'" :user="user" type="private"/>
    </div>
    <a class="footer sm" href="#" target="_blank">GPL</a>
  </div>
</template>

<script>
import Upload from './components/Upload.vue';
import Login from './components/Login.vue';
import Listing from './components/Listing.vue';
export default {
  name: 'App',
  metaInfo: {
    title: 'About Us'
  },
  components: {
    Upload,
    Login,
    Listing
  },
  data:()=>{
    return {
      user:{
        isLoggedIn: false,
        token: ''
      },
      state:{
        screen: 'upload'
      }
    }
  },
  methods:{
    login: function(e){
      this.user.isLoggedIn = true;
      this.user.token = e.token;
      this.user.username = e.username;
    },
    logout: function(){
      this.user.isLoggedIn = false;
      this.user.token = '';
      this.user.username ='';
      localStorage.removeItem('token');
      localStorage.removeItem('username');
    },
    changeScreen(screen){
      this.state.screen = screen;
    }
  }
}
</script>

<style>
:root{
  /* Define Primary Color (rgb)*/
	--pr: 33;
	--pg: 33;
	--pb: 75;
	/* Setup Main BG color */
	--bg: rgb(var(--pr), var(--pg), var(--pb));
	/* Calculate Color Variations */
	/* --bg2a: rgb(calc(var(--pr)*1.1), calc(var(--pg)*1.1), calc(var(--pb)*1.1));
	--bg3: rgb(calc(var(--pr)*1.2), calc(var(--pg)*1.2), calc(var(--pb)*1.2));
	--bg4: rgb(calc(var(--pr)*1.3), calc(var(--pg)*1.3), calc(var(--pb)*1.3));
	--bg5: rgb(calc(var(--pr)*1.4), calc(var(--pg)*1.4), calc(var(--pb)*1.4));
	--bg6: rgb(calc(var(--pr)*1.5), calc(var(--pg)*1.5), calc(var(--pb)*1.5)); */
  --bg2a: rgba(33,33,33,0.7);
  --bg2: rgb(33,33,33);
  --text: rgb(211, 211, 211);
  --texta: rgba(211, 211, 211, 0.549);
  --warning: rgb(243, 75, 75);
  --highlight: #42b9b3;
  --bg: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(1,125,150,1) 100%) fixed;
  --bgi: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(1,125,150,1) 100%) fixed;
  --font-size:1.75rem;
}
#app {
  font-family: Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text);
  margin-top: 60px;
  padding-top:15vh;
}
body{
  background: var(--bg);
  font-size:var(--font-size);
}
button{
  background: var(--bgi);
  color: var(--text);
  padding:1rem;
  border:1px solid var(--text);
  border-radius:0.25rem;
  font-size:var(--font-size);
  margin:var(--font-size);
  cursor:pointer;
  transition: all 0.2s;
  min-width:6rem;
}
button:hover{
  background:var(--bg);
}
a, a:visited {
  color: var(--highlight);
  text-decoration: none;
}
hr{
  border-color: var(--texta);
}
input{
  font-size:var(--font-size);
  margin: 0.5rem;
  background: var(--bg);
  color: var(--text);
  outline: 2px solid var(--texta);
  border: none;
  padding:0.5rem;
  border-radius: 0.25rem;
}
.sm{
  font-size:calc(var(--font-size)*0.5);
}
.texta{
  color:var(--texta);
}
.warning{
  font-size:var(--font-size);
  width:calc(var(--font-size)*20);
  margin:0 auto;
  margin-bottom:1rem;
  padding:0.5rem;
  background: var(--warning);
}
.span-btn{
  cursor:pointer;
  font-weight: bolder;
}
.footer{
  position:fixed;
  bottom:0.5rem;
  right:0.5rem;
}
.top-bar{
  position:fixed;
  top:1rem;
  right:2rem;
  text-align:right;
}
</style>
