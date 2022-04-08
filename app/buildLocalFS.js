const fs = require('fs');
const config = require('./configManager');
module.exports = ()=>{
    
    
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
}