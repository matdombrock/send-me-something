const fs = require('fs');
const db = require('../db');
const path = require('path');

const config = require('../config');

module.exports = async (req, res) => { 
  const fileName = req.body.fileName;
  const file = req.files.upload;

  const username = req.user.username;

  if(!username || !fileName || !file){
    res.status(403).send('Missing Arguments!');
    return;
  }
  const out = await uploadFile(username, fileName, file);
  if(!out){
    res.status(403).send('A file with this name already exists!');
    return;
  }
  res.send(out);
};

async function uploadFile(username, fileName, fileData){
  fileName = fileName.replaceAll(' ','_');

  const actualFileName = fileData.name;
  const ext = path.extname(actualFileName);

  const baseUploadDir =  config.base_upload_dir ? config.base_upload_dir : __dirname+'/../uploads/';

  const userDir = username+'/';
  const userDirFull = baseUploadDir+userDir;// For mv
  
  const filePath = userDir+fileName+ext;
  const filePathFull = userDirFull+fileName+ext; // for mv

  const found = await db.Uploads.findOne({
    where:{
      file_path: filePath
    }
  });
  if(found){
    return false;
  }
  if (!fs.existsSync(userDirFull)){
    fs.mkdirSync(userDirFull,{ recursive: true });
  }
  fileData.mv(filePathFull);
  const res = await db.Uploads.create({
    username: username, 
    file_name: fileName,
    file_path: filePath,
    extension: ext
  });
  return res;
}