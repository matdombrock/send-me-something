const fs = require("fs")
const path = require("path")

let config;
try{ config = require('/var/sendme/config')}catch(err){ config = require('../config')};

let originalPath;

module.exports = getAllFiles;

function getAllFiles(type){
  const dirPath = config.local_public_dir;
  originalPath = dirPath;
  return getListings(dirPath);
}


function getListings(dirPath, files) {
  newFiles = fs.readdirSync(dirPath);

  files = files || {};

  newFiles.forEach(function(file) {
    const index = dirPath.replace(originalPath, '');
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      files = getListings(dirPath + "/" + file, files);
    } else {
      if(!files[index]){
        files[index]=[];
      }
      files[index].push(file);
    }
  })

  return files;
}