<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div class="listing">
    <span class="listing-item" @click="back()">🗀 {{target[target.length-1] || ''}}/..</span>
    <br>
    <input type="text" @input="updateListing()" v-model="filterText" placeholder="filter">
    <hr>
    <div class="listing-item" v-for="(item, index) of subListingFiltered" :key="index" @click="selectItem(item)">
        <span v-if="item.children">🗀 {{item.name}}</span>
        <span v-else>{{item.name}}</span>
        <br>
    </div>
    <div class="modal-shade" v-if="showModal" @click="closeModal()"></div>
    <div class="modal" v-if="showModal">
        <div class="modal-title">GET THIS FILE</div>
        <div class="modal-content">
            <div>{{viewedItem.name}}</div>
            <a :href="'/download/?dlToken='+viewedItem.token" target="_blank"><button>DOWNLOAD</button></a>
            <div>~{{Number(viewedItem.size/1000000).toFixed(2)}}mb </div>
            <div class="sm">{{viewedItem.path}}</div>
            <div class="sm">{{viewedItem.ctime}}</div>
        </div>
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
        masterListing:[],
        subListing: [],
        subListingFiltered: [],
        filterText: '',
        showModal: false,
        viewedItem: {}
    }
  },
  methods:{
      refresh: async function(){
          await this.getDirListing();
          this.updateListing();
      },
      selectItem: function(item){
          if(item.children){
              this.selectDir(item.path);
          }else{
              this.viewFile(item);
          }
      },
      selectDir: function(path){
          this.target.push(path);
          this.updateListing();
      },
      updateListing: function(){
          let out = {...this.masterListing};
          for(let path of this.target){
              for(let item of out.children){
                  if(item.path === path){
                      out = item;
                  }
              }
          }
          if(out.children){
              this.subListing = out;
          }
          this.filterListing()
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
                this.masterListing = response.data;
            }
        }catch(err){
            console.log(err);
        }
      },
      filterListing: function(){
          const children = [...this.subListing.children];
          let dirs = [];
          let files = [];
          console.log('Filter Text: '+this.filterText +' - '+this.filterText.length);
          // Run dirs first
          for(const child of children){
            if(this.filterText.length > 0){
                if(child.name.toLowerCase().includes(this.filterText.toLowerCase())){
                    if(child.children){
                        dirs.push(child);
                    }else{
                        files.push(child);
                    }
                }
            }
            else{
                // No text filter
                if(child.children){
                    dirs.push(child);
                }else{
                    files.push(child);
                }
            }
          }
          this.subListingFiltered = [...dirs, ...files];
      },
      viewFile: async function(item){
        if(item.path !== this.viewedItem.path){
            this.viewedItem = item;
            this.viewedItem.token = await this.getDownloadToken(item);
        }
        this.showModal = true;
      },
      getDownloadToken: async function(item){
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
            return response.data;
        }catch(err){
            console.log(err);
        }

      },
      closeModal: function(){
          this.showModal = false;
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
    background:var(--bg2a);
    padding:0.5rem;
    display:inline-block;
    margin:0.5rem;
}
.modal-title{
    font-size:calc(var(--font-size)*1.5);
    background: var(--bg);
    padding:1.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-top-left-radius: var(--font-size);
    border-top-right-radius: var(--font-size);
}
.modal-shade{
    z-index:998;
    position:fixed;
    top:0;
    left:0;
    width:100vw;
    height:1000vh;
    background:rgba(0, 0, 0, 0.384);
    cursor: pointer;
}
.modal{
    z-index:999;
    position:fixed;
    top:30vh;
    left:calc(50vw - 210px);
    width:420px;
    background:var(--bg2);
    padding-bottom:3.5rem;
    text-align: center;
    border-radius: var(--font-size);
}
.modal-content{
    padding:1rem;
    word-wrap: break-word;
}
</style>
