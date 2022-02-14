const config = require('../config');
const usersList = require('../users.json');

const fs = require('fs');

const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const routes = require('./routes');
const auth = require("./middleware/auth");
const logger = require('./middleware/logger');

const serveIndex = require('serve-index');
const createUser = require('./util/createUser');

const app = express();
const port = config.port ? config.port : 3000;

app.use(cors());

app.use(logger);

app.use(express.static('view'));
app.use('/public', express.static(config.local_public_dir));
app.use('/public', serveIndex(config.local_public_dir, {stylesheet:__dirname+'/listingStyle.css'}));
app.use('/private', express.static(config.local_private_dir));

app.use(fileUpload({
  createParentPath: true
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.get('/',(req, res) => {
//   res.send('Hello World!');
// });

//app.post('/welcome', auth, routes.welcome);

//app.post('/createUser', routes.createUser);

app.post('/upload', auth, routes.upload);

//app.post('/download', auth, routes.download);

//app.post('/getFileURL', auth, routes.getFileURL);

//app.post('/listUploads', auth, routes.listUploads);

app.post('/login', routes.login);

async function start(){
  // create dirs
  if (!fs.existsSync(config.local_incoming_dir)){
    console.log('Created incoming directory at: '+config.local_incoming_dir);
    fs.mkdirSync(config.local_incoming_dir,{ recursive: true });
  }else{
    console.log('Found incoming directory at: '+config.local_incoming_dir);
  }
  if (!fs.existsSync(config.local_public_dir)){
    console.log('Created public directory at: '+config.local_public_dir);
    fs.mkdirSync(config.local_public_dir,{ recursive: true });
  }else{
    console.log('Found public directory at: '+config.local_public_dir);
  }
  if (!fs.existsSync(config.local_private_dir)){
    console.log('Created private directory at: '+config.local_private_dir);
    fs.mkdirSync(config.local_private_dir,{ recursive: true });
  }else{
    console.log('Found private directory at: '+config.local_private_dir);
  }
  // createUsers
  await createUser.createList(usersList);
  // start server
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })
}
start();
//

