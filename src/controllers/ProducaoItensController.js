const ProducaoItens = require('../model/ProducaoItens')
const MoveItensVolume = require('../model/MoveItensVolume')
const Producao = require('../model/Producao')

module.exports = {

    //Função que vai retornar objeto com todos os cadastros
    async index(req, res){
        const result =  await ProducaoItens.findAll()
        return res.json(result)
    },

    //Função que vai retornar objeto com todos os cadastros
    async indexByProducao(req, res){
        const { idProducao } = req.params
        const result =  await ProducaoItens.findAll({
            include: [
                {
                    association: 'moveitensvolume',
                    include: [
                        {
                            association: 'lote'
                        },
                        {
                            association: 'moveitens',
                            include: [
                                {
                                    association: 'product'
                                }
                            ]
                        }
                    ]
                }
            ],
            where: {
                idProducao
            }
        })
        return res.json(result)
    },
    
    //Função que vai receber dados que serao utilizados para atualizar o cadastro
    async update(req, res){

    },

    async delete(req, res){
        const { id } = req.body
        return res.json(
            await ProducaoItens.destroy({
                where: {
                    id
                }
            })
        )
    },

    //Função que vai receber dados que serao utilizados para criação de um novo cadastro
    async store(req, res){
        const { idProducao, codigo, createdBy } = req.body

        const encontraCodigo = await MoveItensVolume.findOne({ 
            where: {
                codigo
            }
        })

        if (encontraCodigo) {

            const encontraMoveitens = await ProducaoItens.findOne({
                where: {
                    idMoveitensvolume: encontraCodigo.id
                }
            })
            if ( !encontraMoveitens ) {
                await ProducaoItens.create({idProducao, idMoveitensvolume: encontraCodigo.id, createdBy})
                .then(async response => {
                    res.status(200).json(response);            
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


