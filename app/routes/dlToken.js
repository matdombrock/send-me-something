const config = require('../configManager');
const db = require('../db');

const { v4: uuidv4 } = require('uuid');
const path  = require('path');
module.exports = async (req, res)=>{
    const type = req.body.type;
    const filePath = req.body.filePath;
    const fileName = req.body.fileName;
    let localDir;
    switch(type){
        case('public'):
            localDir = config.local_public_dir;
            break;
        case('incoming'):
            localDir = config.local_incoming_dir;
            break;
        case('personal'):
            localDir = '';
            break;
        default:
            res.send('Unknown type');
    }
    // Support cross platform paths
    localDir = localDir.replaceAll('/'+type+'/', '');
    localDir = localDir.replaceAll('\\'+type+'\\', '');
    const fullPath = path.normalize(localDir + filePath);
    const token = uuidv4();
    await db.DownloadTokens.create(
        {
            token: token,
            fullPath: fullPath,
            name: fileName
        }
    );
    //downloadTokens['testToken'] = [fullPath, name];
    console.log('New dlToken for: '+fullPath);
    res.send(token);
};