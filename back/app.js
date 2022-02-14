const config = require('../config');
const usersList = require('../users.json');

const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
//const bodyParser = require('body-parser');
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
  // createUsers
  await createUser.createList(usersList);
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })
}
start();
//

