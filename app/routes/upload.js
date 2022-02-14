const fs = require('fs');
const db = require('../db');
const path = require('path');

const config = require('../../config');

module.exports = async (req, res) => { 
  console.log('New Upload From: '+req.user.username);
  const file = req.files.upload;

  const username = req.user.username;

  console.log(JSON.stringify(file.name));

  if(!username || !file){
    res.status(403).send('Missing Arguments!');
    return;
  }
  const out = await uploadFile(username, file);
  if(!out){
    res.status(403).send('A file with this name already exists!');
    return;
  }
  res.send(out);
};

async function uploadFile(username, fileData){

  const actualFileName = fileData.name;
  const ext = path.extname(actualFileName);

  const baseUploadDir =  config.local_incoming_dir ? config.local_incoming_dir : __dirname+'/../uploads/';

  const userDir = username+'/';
  const userDirFull = baseUploadDir+userDir;// For mv
  
  //const filePath = userDir+actualFileName+ext;
  //const filePathFull = userDirFull+actualFileName+ext; // for mv
  const filePath = userDir+actualFileName;
  const filePathFull = userDirFull+actualFileName; // for mv

  // const found = await db.Uploads.findOne({
  //   where:{
  //     file_path: filePath
  //   }
  // });
  // if(found){
  //   return false;
  // }
  if (!fs.existsSync(userDirFull)){
    fs.mkdirSync(userDirFull,{ recursive: true });
  }
  fileData.mv(filePathFull);
  const res = await db.Uploads.create({
    username: username, 
    file_name: actualFileName,
    file_path: filePath,
    extension: ext
  });
  return res;
}