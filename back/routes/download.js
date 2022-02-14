const fs = require('fs');
const db = require('../db');
const path = require('path');

const config = require('../config');

module.exports = async (req, res) => { 
  const baseUploadDir =  config.base_upload_dir ? config.base_upload_dir : __dirname+'/../uploads/';
  const filePath = req.body.filePath;
  const filePathFull = baseUploadDir+filePath;
  const file = fs.readFileSync(filePathFull);
  res.send(file);
}