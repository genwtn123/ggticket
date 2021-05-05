const Ad = require('../src/model/Advertisement')
const Joi = require('joi')

const AdSchema = Joi.object({
    ad_name : Joi.string().required(),
    ad_detail : Joi.string().required(),
})

exports.getAd = async (req, res, next) =>{
    try{
        let ad = new Ad
        let keep = await ad.getAd()
        res.send(keep)
    }catch(err){
        console.log(err)
    }
}

exports.createAd = async (req, res, next) => {
    try{
        await AdSchema.validateAsync(req.body, { abortEarly: false })
        let ad = new Ad(null, req.body.ad_name, req.body.ad_detail, req.file.path, null,  req.session.userdata.user_id)
        await ad.createAd()
        res.send(ad)
    }catch(err){
        console.log(err)
        res.send(err)
    }
}

exports.editAd = async (req, res, next) => {
    try{
        await AdSchema.validateAsync(req.body, { abortEarly: false })
        let ad = new Ad(req.params.ad_id, req.body.ad_name, req.body.ad_detail, req.file.path, null, req.session.userdata.user_id)
        await ad.editAd()
        res.send(ad)
    }catch(err){
        console.log(err)
        res.send(err)
    }
}

exports.deleteAd = async (req, res, next) =>{
    try{
        let ad = new Ad(req.params.ad_id)
        if(req.session.userdata.type != "STAFF"){
            res.send("You are not admin")
            return
        }
        await ad.deleteAd()
        res.send("Ad "+ ad.ad_id+ " Deleted")
    }catch(err){
        console.log(err)
        res.send(err)
    }
}