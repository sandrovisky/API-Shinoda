const MoveItensVolumeTable = require('../model/MoveItensVolumeTable')

module.exports = {

    //Função que vai retornar objeto com todos os cadastros
    async index(req, res){
        const result =  await MoveItensVolumeTable.findAll()
        return res.json(result)
    },

    //função q mostra os resultados da pesquisa por idMove
    async indexAll(req, res){
        const { idMove } = req.params
        const result =  await MoveItensVolumeTable.findAll({ where: { idMove } })
        return res.json(result)
    },

    //Função que vai receber 'id' de um cadastro e exclusão do mesmo
    async delete(req, res){
        const { id } = req.body
        await MoveItensVolumeTable.destroy({ where: { id }, force: true})
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

        await MoveItensVolumeTable.update({ idMoveitens, idLote, quantidadePalete, quantidadeTotal, createdBy, updatedBy }, { where: { id } })
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
        const { idMove, quantidadePaletes, quantidadeTotal, codigoLote, validade, produto, createdBy, updatedBy, idLoteitens, lastId } = req.body

            const result = await MoveItensVolumeTable.create({ idMove, quantidadePaletes, quantidadeTotal, codigoLote, validade, produto, createdBy, updatedBy, idLoteitens, lastId })
            
            return res.json(result)
        
    }
}


