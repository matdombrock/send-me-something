const db = require('./db');

async function sync(){
  await db.tools.syncTables();
  await db.User.create({username:'admin', password:'$2b$10$Uu8Xv2twRon8isz4nFeccufX1JeVN3Z9M4TX7VCvuCmtD3Tm6Ze8K'});// pw admin
}
sync();