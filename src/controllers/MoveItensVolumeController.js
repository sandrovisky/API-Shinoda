const MoveItens = require('../model/MoveItens')
const MoveItensVolume = require('../model/MoveItensVolume')
const { Op } = require("sequelize");

module.exports = {

    //Função que vai retornar objeto com todos os cadastros
    async index(req, res){
        const result =  await MoveItensVolume.findAll({ include:[
            {
                association: 'moveitens',
                include: [
                    {   
                        association: 'product', 
                    },
                ]
            },
            {
                association: 'lote'
            },
            {
                association: 'move'
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

    async indexMove(req, res){
        const { lastId, quantidadePaletes } = req.params
        console.log(lastId)
        console.log(quantidadePaletes)
        
        const result =  await MoveItensVolume.findAll({ 
            where: 
            { 
                id:
                {
                    [Op.between]: [(lastId-quantidadePaletes+1),lastId]
                } 
            },
            include: {
                association: 'moveitens',
                include: [
                    {
                        association: 'product'
                    }
                ]
            }
        })
        return res.json(result)
    },

    async indexEntrada(req, res){
        const { lastId, quantidadePaletes, codigo } = req.params
        
        const result =  await MoveItensVolume.findOne({ 
            where: 
            { 
                id:
                {
                    [Op.between]: [(lastId-quantidadePaletes+1),lastId]
                },
                codigo: codigo
            },
            include: {
                association: 'moveitens',
                include: [
                    {
                        association: 'product'
                    }
                ]
            }
        })
        return res.json(result)
    },

    //Função que vai receber 'id' de um cadastro e exclusão do mesmo
    async delete(req, res){
        
        const { id } = req.body
        await MoveItensVolume.destroy({ where: {id: id }, force: true})
        .then(() => {
            res.status(200).json({message: "Cadastro deletado com sucesso"});
            console.log({message: "Cadastro deletado com sucesso"})
        })
        .catch(() => {
            res.status(400).json({message: "Erro ao deletar cadastro"});
            console.log({message: "Erro ao deletar cadastro"});
        })
    },

     //Função que vai receber 'id' de um cadastro e exclusão do mesmo
     async deletePesos(req, res){
        const { idLoteitens, quantidadeTotal, quantidadePaletes } = req.params
        await MoveItensVolume.destroy({ where: { idLoteitens, quantidadePaletes, quantidadeTotal }, force: true})
        .then(() => {            
            console.log({message: "Cadastro deletado com sucesso"})
            return res.status(200).json({message: "Cadastro deletado com sucesso"});
        })
        .catch(() => {            
            console.log({message: "Erro ao deletar cadastro"});
            return res.status(400).json({message: "Erro ao deletar cadastro"});
        })
    },

    //Função que vai receber dados que serao utilizados para atualizar o cadastro
    async update(req, res){

        const { leitura, id } = req.body        

        await MoveItensVolume.update({ leitura }, { where: { id } })
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

        const { idMoveitens, idLoteitens, quantidadePaletes, quantidadeTotal, createdBy } = req.body

        let resultall = []

        for ( let i = 0; i < quantidadePaletes; i++) {
            const result = await MoveItensVolume.create({ idMoveitens, idLoteitens, quantidadePaletes, quantidadeTotal, createdBy })

            result.codigo = "ENT" + result.id 
            
            await result.save()
            resultall.push(result)
        }        
        
        return res.json(resultall)        
    }
}


