const { Op } = require("sequelize")

const LoteItens = require('../model/LoteItens')
const Analysis = require('../model/Analysis')
const Product = require('../model/Product')
const MoveItens = require('../model/MoveItens')
const Supplier = require('../model/Supplier')
const Move = require('../model/Move')

module.exports = {

    //Função que vai retornar objeto com todos os cadastros
    async index(req, res){
        const result =  await LoteItens.findAll(
            { 
            include: 
                [
                    {
                        association: 'moveitensvolume'
                    },
                    {
                        model: Analysis, 
                        as: 'analysis' 
                    },
                    {
                        model: MoveItens, 
                        as: 'moveitens',
                        include: 
                        [
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
                        ]
                    },
                ]
            } 
        )
        return res.json(result)
    },

    //Função que vai retornar objeto com todos os cadastros
    async indexLote(req, res){
        const { id } =req.params
        const result =  await LoteItens.findOne({ where: { id },
            include: {
                association: 'moveitensvolume'
            }
        })
        return res.json(result)
    },

    async indexVolumeTable(req, res){
        const { idMove } = req.params
        const result =  await LoteItens.findAll(
            { 
            include: 
                [
                    {
                        association: 'moveitensvolume'
                    },
                    {
                        model: Analysis, 
                        as: 'analysis' 
                    },
                    {
                        model: MoveItens, 
                        as: 'moveitens',                        
                        where: {idMove},
                        include: 
                        [
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
                        ]
                    },
                ]
            } 
        )
        return res.json(result)
    },

    async indexOne(req, res){
        const  { idMove, lote, idProduct } = req.params
        const result =  await LoteItens.findOne( 
            { 
                where: {  
                    lote: lote
                },
                include: 
                    [
                        {
                            association: 'moveitensvolume'
                        },
                        {
                            model: Analysis, 
                            as: 'analysis' 
                        },
                        {
                            model: MoveItens, 
                            as: 'moveitens',
                            where: {
                                idMove: idMove,
                                idProduct: idProduct
                            },
                            include: 
                            [
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
                            ]
                        },
                    ]
            } 
        )
        return res.json(result)
    },

    async indexMoveItensVolume(req, res){

        const {idMove, codigo } = req.params
        const result =  await LoteItens.findOne(
            { where: {codigo},
            include: 
                [
                    {
                        
                        association: 'moveitensvolume'
                    },
                    {
                        model: Analysis, 
                        as: 'analysis' 
                    },
                    {
                        model: MoveItens, 
                        as: 'moveitens',
                        where: {idMove},
                        include: 
                        [
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
                        ]
                    }
                ]
            } 
        )
        return res.json(result)
    },

    //Função que vai receber 'id' de um cadastro e exclusão do mesmo
    async delete(req, res){
        const { id } = req.params
        await LoteItens.destroy({ where: { id }, force: true })
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

        const { codigo, numLaudo, dataValidade, createdBy, updatedBy, idMoveitens, id } = req.body        

        await LoteItens.update({ codigo, numLaudo, dataValidade, createdBy, updatedBy, idMoveitens }, { where: { id } })
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
        const { laudo, lote, dataValidade, createdBy, idMoveitens } = req.body
    
        const result = await LoteItens.create({ laudo, lote, dataValidade, createdBy, idMoveitens })
        
        return res.json(result)
        
    }
}


