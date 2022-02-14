const bcrypt = require('bcrypt');
const db = require('../db');
const jwt = require('../jwt');

module.exports = async (req, res) => { 
  const username = req.body.username;
  const password = req.body.password;
  console.log("Attempted Login From: "+username);
  if(!username || !password){
    res.status(403).send('Missing Credentials!');
    return;
  }
  const found = await db.User.findOne({
    where: {
      username: username
    }
  });
  if (!found){
    console.log("Login Fail: NO USER");
    res.status(401).send('Invalid username or password.');
    return;
  }
  const passCheck = await bcrypt.compare(password, found.password);
  if (!passCheck){
    console.log("Login Fail: NO PASS");
    res.status(401).send('Invalid username or password.');
    return;
  }
  const token = jwt.sign(found.id, found.username);
  console.log("Login Success");
  const out = {
    token: token,
    username: username
  }
  res.send(out);
};