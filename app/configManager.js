const path = require('path');
const possibleLocations = [
    '/var/sendme/',
    './',
];

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