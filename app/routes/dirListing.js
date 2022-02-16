const dirToJSON = require('../util/dirToJSON');
let config;
try{ config = require('/var/sendme/config')}catch(err){ config = require('../config')};
module.exports = (req, res) => {
    const type = req.body.type;
    let dir;
    switch(type){
        case('public'):
            dir = config.local_public_dir;
            break;
        case('incoming'):
            dir = config.local_incoming_dir;
            break;
        case('personal'):
            dir = '';
            break;
        default:
            res.send('Unknown type');
    }
    const tree = dirToJSON(dir, '/'+type+'/');
    res.send(tree);
};