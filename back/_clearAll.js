const db = require('./db');
const fs = require('fs');

async function sync(){
  await db.tools.syncTables();
  if (fs.existsSync(__dirname+'/uploads/')){
    fs.rmSync(__dirname+'/uploads/',{ recursive: true })
  }
  await db.User.create({username:'admin', password:'$2b$10$Uu8Xv2twRon8isz4nFeccufX1JeVN3Z9M4TX7VCvuCmtD3Tm6Ze8K'});// pw admin
}
sync();