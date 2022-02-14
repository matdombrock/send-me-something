const config = require('./config');

const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
//const bodyParser = require('body-parser');
const routes = require('./routes');
const auth = require("./middleware/auth");
const logger = require('./middleware/logger');

const app = express();
const port = config.port ? config.port : 3000;

app.use(cors());

app.use(logger);

app.use('/uploads', express.static('uploads'));
//app.use(express.directory('/uploads/','uploads'));

app.use(fileUpload({
  createParentPath: true
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/',(req, res) => {
  res.send('Hello World!');
});

app.post('/welcome', auth, routes.welcome);

app.post('/createUser', routes.createUser);

app.post('/upload', auth, routes.upload);

app.post('/download', auth, routes.download);

//app.post('/getFileURL', auth, routes.getFileURL);

app.post('/listUploads', auth, routes.listUploads);

app.post('/login', routes.login);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})