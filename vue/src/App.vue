<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div class="app">
    <div v-if="!user.isLoggedIn">
      <Login @login-success="login"/>
    </div>
    <div v-else>
      <div class="top-bar">
        Welcome {{user.username}} | <span class="span-btn" @click="logout()">Logout</span>
      </div>
      <Upload :user="user"/>
    </div>
    <Listing />
    <a class="footer sm" href="/public/" target="_blank">VIEW MY PUBLIC FILES</a>
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
      test:{
        "path": "/public/",
        "name": "public",
        "children": [
            {
                "path": "/public/music",
                "name": "music",
                "children": [
                    {
                        "path": "/public/music/BoardOfWashington.wav",
                        "name": "BoardOfWashington.wav"
                    },
                    {
                        "path": "/public/music/KeyPadDemo.wav",
                        "name": "KeyPadDemo.wav"
                    },
                    {
                        "path": "/public/music/KeyPadWBeatDemo.wav",
                        "name": "KeyPadWBeatDemo.wav"
                    },
                    {
                        "path": "/public/music/side_b_urban_beaches.aif",
                        "name": "side_b_urban_beaches.aif"
                    }
                ]
            },
            {
                "path": "/public/seaplane2.png",
                "name": "seaplane2.png"
            },
            {
                "path": "/public/selectseaplane.png",
                "name": "selectseaplane.png"
            }
        ]
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
	/* --bg2: rgb(calc(var(--pr)*1.1), calc(var(--pg)*1.1), calc(var(--pb)*1.1));
	--bg3: rgb(calc(var(--pr)*1.2), calc(var(--pg)*1.2), calc(var(--pb)*1.2));
	--bg4: rgb(calc(var(--pr)*1.3), calc(var(--pg)*1.3), calc(var(--pb)*1.3));
	--bg5: rgb(calc(var(--pr)*1.4), calc(var(--pg)*1.4), calc(var(--pb)*1.4));
	--bg6: rgb(calc(var(--pr)*1.5), calc(var(--pg)*1.5), calc(var(--pb)*1.5)); */
  --bg2: rgba(33,33,33,0.7);
  --text: #d3d3d3;
  --warning: rgb(243, 75, 75);
  --highlight: #42b9b3;
  --bg: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(1,125,150,1) 100%) fixed;
  --font-size:1.75rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
  background: var(--bg2);
  color: var(--text);
  padding:1rem;
  border:1px solid var(--text);
  border-radius:0.25rem;
  font-size:var(--font-size);
  margin:var(--font-size);
  cursor:pointer;
}
a, a:visited {
  color: var(--highlight);
  text-decoration: none;
}
input{
  font-size:var(--font-size);
}
.sm{
  font-size:calc(var(--font-size)*0.5);
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
}
</style>
