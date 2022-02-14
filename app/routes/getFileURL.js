// not used

const db = require('../db');
const config = require('../../config');
module.exports = async (req, res) => { 
  const baseUploadDir =  config.local_incoming_dir ? config.local_incoming_dir : __dirname+'/../uploads/';
  const filePath = req.body.filePath;
  const filePathFull = baseUploadDir+filePath;
  res.send(filePathFull);
};