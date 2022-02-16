<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div class="listing">
    <span class="listing-item" @click="back()">🗀 {{target[target.length-1] || ''}}/..</span>
    <hr>
    <div class="listing-item" v-for="(item, index) of data.children" :key="index">
        <span v-if="item.children" @click="selectDir(item.path)">🗀 {{item.name}}</span>
        <!-- <a v-else :href="item.path" target="_blank">{{item.name}}</a> -->
        <span v-else @click="dlFile(item)">{{item.name}}</span>
        <br>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  props: {
      type: String,
      user: Object
  },
  components: {
  },
  mounted(){
      this.refresh();
  },
  data:()=>{
    return {
        target:[],
        data: [],
        listing:[],
    }
  },
  methods:{
      refresh: async function(){
          await this.getDirListing();
          this.updateListing();
      },
      selectDir: function(path){
          this.target.push(path);
          this.updateListing();
      },
      updateListing: function(){
          let out = this.listing;
          for(let path of this.target){
              for(let item of out.children){
                  if(item.path === path){
                      out = item;
                  }
              }
          }
          if(out.children){
              this.data = out;
          }
      },
      back: function(){
          if(this.target.length > 1){
              this.target.pop();
          }else{
              this.target = [];
          }
          this.updateListing();
      },
      getDirListing: async function(){
        try{
            const response = await axios.post('/api/dirListing', {token: this.user.token, type: this.type});
            if(response.status === 200){
                this.listing = response.data;
            }
        }catch(err){
            console.log(err);
        }
      },
      dlFile: async function(item){
        try{
            const response = await axios.post('/api/dlToken', {
                token: this.user.token, 
                type: this.type,
                fileName: item.name,
                filePath: item.path
            });
            if(!response.status === 200){
                alert('File Not Found!');
            }
            const dlToken = response.data;
            window.open('/api/download/?dlToken='+dlToken, '_blank');
        }catch(err){
            console.log(err);
        }

      }
  }
}
</script>

<style scoped>
.listing{
    max-width:80vw;
    margin:0 auto;
    text-align:left;
}
.listing-item{
    cursor:pointer;
    background:var(--bg2);
    padding:0.5rem;
    display:inline-block;
    margin:0.5rem;
}
</style>
