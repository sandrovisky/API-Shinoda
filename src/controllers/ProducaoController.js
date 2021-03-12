const Producao = require('../model/Producao')
const ProducaoItens = require('../model/ProducaoItens')
const Config = require('../model/Config')
const MoveItensVolume = require('../model/MoveItensVolume')

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

    
    async update(req, res){

    },

    async delete(req, res){
        const { id } = req.body

        return res.json(
            await Producao.destroy({ where: { id } })
            .then(async () => {
                res.status(200).json({message: "Deletado com sucesso"})
            })
        )

    },

    async store(req, res){

        const { codigo } = req.body

        const numProducao = await Config.findOne()
        .then(async res => {
            return (res.numProducao)
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
                await Producao.create({ status: 1, numProducao })
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


