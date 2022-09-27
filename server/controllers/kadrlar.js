const ApiError = require("../error/ApiError")
const Kadr = require("../models/kadr")
const uuid = require('uuid')
const path = require('path')

class KadrlarController {
    // async create(req,res){
    //     const {firstName,lastName,fatherName,birthYear,birthMonth,birthDay,birthCountry,birthProvince,birthCityDistrict,gender,citizenship,married,partisanship,levelKnowledge,seniority,salary,email,telegram,phone} = req.body
    //     try {
    //         // const kadr = await Kadr.create({firstName,lastName,fatherName,birthYear,birthMonth,birthDay,birthCountry,birthProvince,birthCityDistrict,gender,citizenship,married,partisanship,levelKnowledge,seniority,salary,email,telegram,phone} )
    //         const kadr = await Kadr.create( req.body )
    //         return res.json(kadr)
    //         console.log("ishladiyu");
    //     } catch (error) {
    //         return res.json(error)
    //     }
    // }
    async create(req,res){
        const {firstName,lastName,fatherName,birthYear,birthMonth,birthDay,birthCountry,birthProvince,birthCityDistrict,gender,citizenship,married,partisanship,levelKnowledge,seniority,salary,email,telegram,phone} = req.body
        try {
            // const {photo} = req.files
            let fileName = uuid.v4() + ".jpg"
            // photo.mv(path.resolve(__dirname, '..', 'static', fileName))
            const kadr = await Kadr.create({firstName,lastName,fatherName,birthYear,birthMonth,birthDay,birthCountry,birthProvince,birthCityDistrict,gender,citizenship,married,partisanship,levelKnowledge,seniority,salary,email,telegram,phone} )
            return res.json(kadr)
            // return res.json(photo)
        } catch (error) {
            return res.json(error)
            // return next(ApiError.badRequest("Formani to'g'ri to'ldiring"))
            // res.json({message:"ISHLAMADI XATO"})
        }
    }

    async getAll(req,res){
        const kadrlar = await Kadr.findAll()
        res.json(kadrlar)
    }
    async getById(req,res,next){
        const {id} = req.params
        if(!id || id=="undefined"){
            return next(ApiError.badRequest('kadr idsi yuborilmadi'))
        }
        const kadr = await Kadr.findOne(
            {
                where:{id}
            }
        )
        res.json(kadr)
    }
    async update(req,res){
        const {firstName,lastName,fatherName,birthYear,birthMonth,birthDay,birthCountry,birthProvince,birthCityDistrict,gender,citizenship,married,partisanship,levelKnowledge,seniority,salary,email,telegram,phone,photo} = req.body
        const {id} = req.params
        await Kadr.update({firstName,lastName,fatherName,birthYear,birthMonth,birthDay,birthCountry,birthProvince,birthCityDistrict,gender,citizenship,married,partisanship,levelKnowledge,seniority,salary,email,telegram,phone,photo }, {
            where: {
                id: id
            }
        })
        const kadr = await Kadr.findOne({where:{id:req.params.id}})
        res.json(kadr)
    }
    async deleteAll(req,res){
        await Kadr.destroy({
            where:{},
            truncate:true
        })
        res.json({message:"Hammasi uchirildi"})
    }
    async deleteById(req,res){
        const {id} = req.params
        await Kadr.destroy(
            {
                where:{id}
            }
        )
        res.json({message:"uchirildi"})
    }
}

module.exports = new KadrlarController()