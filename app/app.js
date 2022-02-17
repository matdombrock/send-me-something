const config = require('./configManager');
console.log('Loaded Config From: '+config.config_path);
const usersList = require(config.config_path+'/users.json');


const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const routes = require('./routes');
const auth = require("./middleware/auth");
const logger = require('./middleware/logger');

const app = express();
const port = config.port ? config.port : 3000;

app.use(cors());
app.use(logger);
app.use(express.static('view'));
// app.use('/public', express.static(config.local_public_dir));
// app.use('/private', express.static(config.local_private_dir));
app.use(fileUpload({
  createParentPath: true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.post('/api/dirListing',auth, routes.dirListing);
app.post('/upload', auth, routes.upload);
app.post('/api/dlToken', routes.dlToken);
app.post('/login', routes.login);
app.get('/download', routes.download);

const createUser = require('./util/createUser');
const buildLocalFS = require('./buildLocalFS');

async function start(){
  buildLocalFS();
  // createUsers
  if(usersList){
    await createUser.createList(usersList);
  }
  // start server
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })
}
start();
//

