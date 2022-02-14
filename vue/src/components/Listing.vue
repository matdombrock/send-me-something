<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div class="listing">
    Debug Target: {{target}}<br>
    <span class="listing-item" @click="back()">🗀 .. </span>
    <br>
    <div class="listing-item" v-for="(item, index) of data.children" :key="index">
        <span v-if="item.children" @click="selectDir(item.path)">🗀 {{item.name}}</span>
        <a v-else :href="item.path" target="_blank">{{item.name}}</a>
        <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo: {
    title: 'About Us'
  },
  components: {
  },
  mounted(){
      this.data = this.test;
  },
  data:()=>{
    return {
        
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
                    },
                    {
                    "path": "/public/music/music2",
                    "name": "music2",
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
      },
        target:[],
        data: [],
    }
  },
  methods:{
      selectDir: function(path){
          this.target.push(path);
          this.refreshListing();
      },
      refreshListing: function(){
          let out = this.test;
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
          this.refreshListing();
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
