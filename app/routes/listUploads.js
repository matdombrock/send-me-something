const db = require('../db');
module.exports = async (req, res) => { 
  const response = await db.Uploads.findAll();
  res.send(response);
};