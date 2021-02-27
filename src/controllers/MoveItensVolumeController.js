const { Model } = require('sequelize')
const LoteItens = require('../model/LoteItens')
const Move = require('../model/Move')
const MoveItens = require('../model/MoveItens')
const MoveItensVolume = require('../model/MoveItensVolume')
const Product = require('../model/Product')

module.exports = {

    //Função que vai retornar objeto com todos os cadastros
    async index(req, res){
        const result =  await MoveItensVolume.findAll({ include:[
            {
                association: 'moveitens',
                include: [
                   { 
                       association: 'product'
                    }
                ]
            },
            {
                association: 'lote'
            }
        ]})
        return res.json(result)
    },

    async indexAll(req, res){

        const {idMove} = req.params
        
        const result =  await MoveItensVolume.findAll({include:[
            {
                model: MoveItens,
                as: 'moveitens',
                where: {idMove},
                include: [
                    {
                        association: 'product'  
                    },
                ] 
            },{
                association: 'lote'
            }
        ]})
        return res.json(result)
    },

    //Função que vai receber 'id' de um cadastro e exclusão do mesmo
    async delete(req, res){
        const { id } = req.body
        await MoveItensVolume.destroy({ where: { id }, force: true})
        .then(() => {
            res.status(200).json({message: "Cadastro deletado com sucesso"});
            console.log({message: "Cadastro deletado com sucesso"})
        })
        .catch(() => {
            res.status(400).json({message: "Erro ao deletar cadastro"});
            console.log({message: "Erro ao deletar cadastro"});
        })
    },

    //Função que vai receber dados que serao utilizados para atualizar o cadastro
    async update(req, res){

        const { idMoveitens, idLote, quantidadePalete, quantidadeTotal, createdBy, updatedBy, id } = req.body        

        await MoveItensVolume.update({ idMoveitens, idLote, quantidadePalete, quantidadeTotal, createdBy, updatedBy }, { where: { id } })
        .then(() => {
            res.status(200).json({message: "Cadastro atualizado com sucesso"});
            console.log({message: "Cadastro atualizado com sucesso"})
        })
        .catch(() => {
            res.status(400).json({message: "Erro ao atualizar cadastro"});
            console.log({message: "Erro ao atualizar cadastro"});
        });
    },

    //Função que vai receber dados que serao utilizados para criação de um novo adastro
    async store(req, res){
        const { idMoveitens, idLoteitens, quantidadePaletes, quantidadeTotal, createdBy, updatedBy } = req.body

            const result = await MoveItensVolume.create({ idMoveitens, idLoteitens, quantidadePaletes, quantidadeTotal, createdBy, updatedBy })
            
            return res.json(result)
        
    }
}


