const MoveItens = require ('../model/MoveItens')
const Product = require ('../model/Product')
const Move = require ('../model/Move')
const Supplier = require ('../model/Supplier')
const { Model } = require('sequelize')


module.exports = {

    //Função que vai retornar objeto com todos os cadastros
    async index(req, res){
        const result =  await MoveItens.findAll(
            {
            include: [
            {
                model: Product, 
                as: 'product'
            },
            { 
                model: Move, 
                as: 'move',
                include: [
                    {
                        model: Supplier,
                        as: 'supplier'
                    }
                ] 
            }
        ]})
        return res.json(result)
    },

    async indexOne(req, res){

        const {idMove} = req.params
        const result =  await MoveItens.findAll( {where: {idMove},include: {association: 'product'}})
        return res.json(result)
    },

    async indexOne(req, res){

        const {idMove} = req.params
        const result =  await MoveItens.findAll( {where: {idMove},include: {association: 'product'}})
        return res.json(result)
    },

    //Função que vai receber dados que serao utilizados para atualizar o cadastro
    async update(req, res){
        const { createdBy, updatedBy, id } = req.body        

        await MoveItens.update( { createdBy, updatedBy } ,{ where: { id }, force: true }) 
        .then(() => {
            res.status(200).json({message: "Cadastro atualizado com sucesso"});
            console.log({message: "Cadastro atualizado com sucesso"})
        })
        .catch(() => {
            res.status(400).json({message: "Erro ao atualizar cadastro"});
            console.log({message: "Erro ao atualizar cadastro"});
        });
    },

    //Função que vai receber 'id' de um cadastro e exclusão do mesmo
    async delete(req, res){
        const { id } = req.body
        await MoveItens.destroy({where:{id}, force: true})
        .then(() => {
            res.status(200).json({message: "Produto deletado da lista"});
            console.log({message: "Produto deletado da lista"})
        })
        .catch(() => {
            res.status(400).json({message: "Erro ao deletar produto"});
            console.log({message: "Erro ao deletar produto"});
        })
    },

    //Função que vai receber dados que serao utilizados para criação de um novo adastro
    async store(req, res){
        const { createdBy, updatedBy, idMove, idProduct, idLoteitens } = req.body 

        const result = await MoveItens.create({ createdBy, updatedBy, idMove, idProduct, idLoteitens })
        
        return res.json(result)
    }
}