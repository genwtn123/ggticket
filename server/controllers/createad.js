const Ad = require('../src/model/Advertisement')

exports.createAd = async (req, res, next) => {
    let ad = new Ad(null, ad_id, ad_name, ad_detail, ad_image, admin_id)
    try{
        await ad.createAd()
        res.status(200).send(ad)
    }catch(err){
        console.log(err)
    }
}