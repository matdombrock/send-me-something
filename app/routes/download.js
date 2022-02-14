const fs = require('fs');
const db = require('../db');
const path = require('path');

const config = require('/var/sendme/config');

module.exports = async (req, res) => { 
  const baseUploadDir =  config.local_incoming_dir ? config.local_incoming_dir : __dirname+'/../uploads/';
  const filePath = req.body.filePath;
  const filePathFull = baseUploadDir+filePath;
  const file = fs.readFileSync(filePathFull);
  res.send(file);
}