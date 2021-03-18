const ProducaoEquipamento = require('../model/ProducaoEquipamento')

module.exports = {

    //Função que vai retornar objeto com todos os cadastros
    async index(req, res){
        const result =  await ProducaoEquipamento.findAll({
            include: [
                {
                    association: 'equipamento'
                }
            ],
        })
        return res.json(result)
    },

    async indexByProducao(req, res){
        const  { idProducao } = req.params

        const result =  await ProducaoEquipamento.findAll({
            include: [
                {
                    association: 'equipamento'
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

    //Função que vai receber dados que serao utilizados para atualizar o cadastro
    async delete(req, res){
        const { id } = req.body
        
        await ProducaoEquipamento.destroy({
            where: {
                id
            }
        })
        .then(async () => {
            return res.json({message: "Deletado com sucesso"})
        })
        .catch(async () => {
            return res.json({message: "Erro ao deletar"})
        })
    },

    //Função que vai receber dados que serao utilizados para criação de um novo adastro
    async store(req, res){
        const { idProducao, idEquipamento } = req.body
        const createdBy = req.idUsuario

        const equipamentoProducao = await ProducaoEquipamento.findOne({
            where: {
                idProducao,
                idEquipamento
            }
        })

        if( !equipamentoProducao ) {
            await ProducaoEquipamento.create({ idProducao, idEquipamento, createdBy })
            .then(async response => {
                return res.json(response)
            })
            .catch(async error => {
                return res.status(400).json(error)
            })
        } else {
            return res.status(400).json({err: "Equipamento ja adicionado"})
        }
    }
}


