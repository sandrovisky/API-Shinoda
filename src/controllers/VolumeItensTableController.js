const VolumeItensTable = require ('../model/VolumeItensTable')
const MoveItensVolume = require ('../model/MoveItensVolume')
const LoteItens = require('../model/LoteItens')

module.exports = {

    //Função que vai retornar objeto com todos os cadastros
    async index(req, res){
        const result =  await VolumeItensTable.findAll({include: [
            {
                association: 'move',                
            },
            {
                association: 'loteitens',
                include: [
                    {
                        association: 'moveitens',
                        include: [
                            {
                                association:'product'
                            },
                        ]
                    },
                    {
                        association: 'moveitensvolume'
                    }
                ]
            }
        ]})
        return res.json(result)
    },

    async indexByMoves(req, res){
        const result =  await VolumeItensTable.findAll({            
            where: req.params,  
            include: [
            {
                association: 'move',          
            },
            {
                association: 'loteitens',
                include: [
                    {
                        association: 'moveitens',
                        include: [
                            {
                                association:'product'
                            },
                        ]
                    },
                    {
                        association: 'moveitensvolume'
                    }
                ]
            }
        ]})
        return res.json(result)
    },

    //Função que vai receber 'id' de um cadastro e exclusão do mesmo
    async delete(req, res){
        const {id} = req.params

        const result = await VolumeItensTable.findOne({ where: { id }, 
            include: [
                {
                    association: 'loteitens',
                    include: [
                        {
                            association: 'moveitensvolume'
                        }
                    ]
                }
            ]
        })

        let deleteIds = []
        for(let i = result.lastId; i > result.lastId - result.quantidadePaletes; i--){
            deleteIds.push(i)
        }

        await MoveItensVolume.destroy({
            where: {id: deleteIds}
        })  

        await VolumeItensTable.destroy({ where: { id }, force: true})
        .then(() => {
            res.status(200).json({message: "Cadastro deletado com sucesso"});
            console.log({message: "Cadastro deletado com sucesso"})
        })
        .catch(() => {
            res.status(400).json({message: "Erro ao deletar cadastro"});
            console.log({message: "Erro ao deletar cadastro"});
        })
    },

    //Função que vai receber dados que serao utilizados para criação de um novo adastro
    async store(req, res){

        req.body.createdBy = req.idUsuario
        
        const result = await VolumeItensTable.create(req.body)
        
        return res.json(result)
    }
}