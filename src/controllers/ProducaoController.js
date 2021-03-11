const Producao = require('../model/Producao')

module.exports = {

    
    async index(req, res){
        const result =  await Producao.findAll()
        return res.json(result)
    },

    
    async update(req, res){

    },

    async delete(req, res){

    },

    async store(req, res){        
        await Producao.create(req.body)
        .then(async response => {
            res.status(200).json(response);            
        })
    }
}


