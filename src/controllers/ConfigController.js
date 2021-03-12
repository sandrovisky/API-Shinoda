const Config = require('../model/Config')

module.exports = {

    //Função que vai retornar objeto com todos os cadastros
    async index(req, res){
        return res.json(await Config.findOne())
    },

    //Função que vai receber dados que serao utilizados para atualizar o cadastro
    async update(req, res){

        const { numProducao } = req.body        

        return res.json(await Config.update({ numProducao }, {where: { id: 1} }))
    },

    async store(req, res){

        return res.json(await Config.create({ numProducao: 1 }))      
    }
}


