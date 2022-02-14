const bcrypt = require('bcrypt');
const db = require('../db');
const jwt = require('../jwt');

module.exports = {
  create,
  createList
};

async function create(username, password, isAdmin){ 
  if(!isAdmin){
    isAdmin = false;
  }
  if(!username || !password){
    console.log('Missing Credentials!');
    return;
  }
  const found = await db.User.findOne({
    where:{
      username:username
    }
  });
  if(found){
    console.log('A user named '+username+' already exists!');
    return;
  }
  const saltRounds = 10;  
  password = await bcrypt.hash(password, saltRounds);
  const data = await db.User.create({username, password, isAdmin});
  const token = jwt.sign(data.id, data.username);
  console.log('Created User: '+username);
};
async function createList(list){
  await db.tools.syncTables();
  for(let user of list){
    await create(user.username, user.password, user.isAdmin);
  }
}