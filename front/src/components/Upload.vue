<template>
  <div class="hello">
    <div v-show="screen === 'upload'">
      <h1>SEND ME SOMETHING</h1>
      <div v-show="selectErr" class="warning">
        Please select a file.
      </div>
      <label class="file-upload">
        <span v-if="selectedFileName === ''">
          SELECT FILE
        </span>
        <span v-else>
          {{selectedFileName}}
        </span>
        <input type="file" ref="file" style="display:none" @change="setSelectedFileName()">
      </label>
      <br>
      <button @click="upload()">SEND</button>
    </div>
    <div v-show="screen === 'uploading'">
      <h1>SENDING</h1>
      Your file ({{selectedFileName}}) is sending now.
      <br>
      Please do not close this tab...
    </div>
    <div v-show="screen === 'error'">
      <h1> ¯\_(ツ)_/¯</h1>
      Something went wrong with your upload...
      <br>
      Please refresh the page and try again.
    </div>
    <div v-show="screen === 'success'">
      <h1> SUCCESS </h1>
      <div class="checkmark">✓</div>
      Your file ({{selectedFileName}}) has been sent.
      <br>
      <button @click="reset()">SEND ANOTHER FILE</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Upload',
  props: {
    user: Object
  },
  data:()=>{
    return {
      selectedFileName: '',
      screen: 'upload',// [upload, uploading, finished],
      selectErr: false
    }
  },
  methods:{
    setSelectedFileName: function(){
      this.selectedFileName = this.$refs.file.files[0].name;
      this.selectErr = false;
    },
    upload: async function(){
      if(!this.$refs.file.files[0]){
        this.selectErr = true;
        return;
      }
      let formData = new FormData();
      formData.append('upload', this.$refs.file.files[0]);
      //formData.append('fileName', this.fileName);
      formData.append('token', this.user.token);
      this.screen = 'uploading';
      try{
        const response = await axios.post('/upload/', formData);
        if(response.status === 200){
          //this.$refs.file.value = '';
          this.screen = 'success';
        }
        else{
          this.screen = 'error';
        }
      }catch(err){
        console.log(err);
        this.screen = 'error';
      }
    },
    reset: function(){
      this.screen = 'upload';
      this.selectedFileName = '';
      this.$refs.file.value = '';

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.file-upload{
  display:inline-block;
  background:var(--bg6);
  border: 2px dotted var(--text);
  padding:1rem;
  cursor:pointer;
}
.checkmark{
  font-size:calc(var(--font-size)*2);
}
</style>
