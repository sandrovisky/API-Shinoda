const { findCreateFind } = require('../model/Devolucao')
const Devolucao = require('../model/Devolucao')

module.exports = {

    //Função que vai retornar objeto com todos os cadastros
    async index(req, res){
        const result =  await Devolucao.findAll()
        return res.json(result)
    },

     async delete(req, res){
         const { id } = req.body
        const result =  await Devolucao.destroy({ where: { id } })
        return res.json(result)
    },

    async indexByProducao(req, res){
        const { idProducao } = req.params
        const result =  await Devolucao.findOne({
            where: {
                idProducao
            }
        })
        return res.json(result)
    },

    //Função que vai receber dados que serao utilizados para criação de um novo adastro
    async store(req, res){
        req.body.createdBy = req.idUsuario
        
        await Devolucao.create(req.body)
        .then(async response => {
            return res.json(response)
        })    
    }
}


