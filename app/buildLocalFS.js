const fs = require('fs');
const config = require('./configManager');
module.exports = ()=>{
    // look for volume
    if (fs.existsSync('/var/sendme')){
        if(!fs.existsSync('/var/sendme/config.js')){
            const configExample = fs.readFileSync('./config.example.js','utf-8');
            fs.writeFileSync('/var/sendme/config.js', configExample);
        }
        if(!fs.existsSync('/var/sendme/users.json')){
            fs.writeFileSync('/var/sendme/users.json', JSON.stringify([{username:'admin',password:'admin'}], null, 2));
        }
    }else{
        // cant find mounted volume
        if(!fs.existsSync('./config.js')){
            const configExample = fs.readFileSync('./config.example.js','utf-8');
            fs.writeFileSync('./config.js', configExample);
        }
        if(!fs.existsSync('./users.json')){
            fs.writeFileSync('./users.json', JSON.stringify([{username:'admin',password:'admin'}], null, 2));
        }
    }
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