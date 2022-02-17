const dirToJSON = require('../util/dirToJSON');
const config = require('../configManager');
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