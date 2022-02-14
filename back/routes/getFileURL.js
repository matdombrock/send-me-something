// not used

const db = require('../db');
const config = require('../config');
module.exports = async (req, res) => { 
  const baseUploadDir =  config.base_upload_dir ? config.base_upload_dir : __dirname+'/../uploads/';
  const filePath = req.body.filePath;
  const filePathFull = baseUploadDir+filePath;
  res.send(filePathFull);
};