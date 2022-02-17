const { Sequelize } = require('sequelize');
const config = require('../configManager');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: __dirname+'/database.sqlite',
  logging: config.db_logging ? config.db_logging : false,
});

const User = sequelize.define('User', {
  // Model attributes are defined here
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  isAdmin:{
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
}, {
  // Other model options go here
});

const DownloadTokens = sequelize.define('DownloadTokens', {
  // Model attributes are defined here
  token: {
    type: Sequelize.STRING,
    allowNull: false
  },
  fullPath: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name:{
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
}, {
  // Other model options go here
});

// const Uploads = sequelize.define('uploads', {
//   // Model attributes are defined here
//   username: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   file_name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   file_path: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   extension: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// }, {
//   // Other model options go here
//   timestamps: true,
// });

async function syncTables(){
  await sequelize.sync({force:true});
}

module.exports = {
  tools:{
    syncTables
  },
  User,
  DownloadTokens
  //Uploads
}


// async function test(){
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }
// test()