const Producao = require('../model/Producao')
const ProducaoItens = require('../model/ProducaoItens')
const Config = require('../model/Config')
const MoveItensVolume = require('../model/MoveItensVolume')

const Sequelize = require('sequelize')

module.exports = {
    
    async index(req, res){
        const result =  await Producao.findAll({
            include: [
                {
                    association: 'producaoitens'
                }
            ]
        })
        return res.json(result)
    },

    async indexOne(req, res){
        const { id } = req.params
        const result =  await Producao.findOne({
            where: {
                id
            }
        })
        return res.json(result)
    },
    
    async update(req, res){
        const { 
            id, 
            status, 
            quantidadeIntegral, 
            quantidadeGema, 
            quantidadeClara,
        } = req.body
        const updatedBy = req.idUsuario
        const endedBy = req.idUsuario

        //let endedAt = Sequelize.literal('CURRENT_TIMESTAMP')


        await Producao.update({ 
            status, 
            quantidadeIntegral, 
            quantidadeGema, 
            quantidadeClara,
            updatedBy, endedBy
        }, 
        { 
            where: { 
                id 
            } 
        })
        .then(async () => {
            res.status(200).json({message: "Atualizado com sucesso"})
        })
        .catch(async () => {
            res.status(400).json({error: "Falha ao atualizar"})
        })        
    },

    async delete(req, res){
        const { id } = req.body
        const result =  await Producao.destroy({ where: { id } })
        return res.json(result)

    },

    async store(req, res){

        const { codigo } = req.body
        const createdBy = req.idUsuario

        const numProducao = await Config.findOne()
        .then(async response => {
            return (response.numProducao)
        })

        const encontraCodigo = await MoveItensVolume.findOne({ 
            where: {
                codigo
            }
        })
        if ( encontraCodigo ) {

            const encontraMoveitens = await ProducaoItens.findOne({
                where: {
                    idMoveitensvolume: encontraCodigo.id
                }
            })

            if ( !encontraMoveitens ) {
                await Producao.create({ status: 1, numProducao, createdBy })
                .then(async response => {
                    res.status(200).json(response); 
                    await Config.update(
                        {
                            numProducao: numProducao +1
                        },
                        {
                            where: {
                                id: 1
                            }
                        }
                    )
                })
                .catch(async err => {
                    res.status(400).json(err); 
                })
            } else {

                return res.status(400).json({err: "Palete ja foi lido ou usado em outra producao"})
            }
            
        } else {
            return res.status(400).json({err: "Codigo de Palete Invalido"})
        }
        
    }
}


