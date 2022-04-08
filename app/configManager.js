const fs = require('fs');
const path = require('path');
const possibleLocations = [
    '/var/sendme/',
    './',
];
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
    console.log('Can not find mounted volume...');
    // cant find mounted volume
    if(!fs.existsSync('./config.js')){
        console.log('Can not find config. Creating one...');
        const configExample = fs.readFileSync('./config.example.js','utf-8');
        fs.writeFileSync('./config.js', configExample);
    }
    if(!fs.existsSync('./users.json')){
        fs.writeFileSync('./users.json', JSON.stringify([{username:'admin',password:'admin'}], null, 2));
    }
}
let config;
let foundLocation;
for(const location of possibleLocations){
    if(!config){
        try{ 
            config = require(location+'config.js');
            if(config){
                foundLocation = location;
            }
        }catch(err){ };
    }
}
config.config_path =  path.normalize(foundLocation);
config.local_incoming_dir = path.normalize(config.local_dir + 'incoming/');
config.local_public_dir = path.normalize(config.local_dir + 'public/');
config.local_private_dir = path.normalize(config.local_dir + 'private/');
module.exports = config;