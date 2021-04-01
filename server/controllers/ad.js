const Ad = require('../src/model/Advertisement')


exports.createAd = async (req, res, next) => {
    let ad = new Ad(null, req.body.ad_name, req.body.ad_detail, req.file, req.body.admin_id)
    try{
        await ad.createAd()
        res.send(ad)
    }catch(err){
        console.log(err)
    }
}

exports.editAd = async (req, res, next) => {
    let ad = new Ad(req.params.ad_id, req.body.ad_name, req.body.ad_detail, req.body.ad_image, req.body.admin_id)
    try{
        await ad.editAd()
        res.send(ad)
    }catch(err){
        console.log(err)
    }
}

exports.deleteAd = async (req, res, next) =>{
    let ad = new Ad(req.params.ad_id)
    try{
        await ad.deleteAd()
        res.send("Ad "+ ad.ad_id+ " Deleted")
    }catch(err){
        console.log(err)
    }
}