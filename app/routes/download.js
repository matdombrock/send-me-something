const db = require('../db');
module.exports = async (req, res) => {
    const dlToken = req.query.dlToken;
    const dlItem = await db.DownloadTokens.findOne(
        {
            where:{
                token:dlToken
            }
        }  
    );
    res.download(dlItem.fullPath, dlItem.name);
}