const LoteVolume = require ('../model/LoteVolume')

module.exports = {

    //Função que vai retornar objeto com todos os cadastros
    async index(req, res){
        const result =  await LoteVolume.findAll({ include: { association: 'moveitens' } })
        return res.json(result)
    },

    //Função que vai receber dados que serao utilizados para atualizar o cadastro
    async update(req, res){
        const { volume, quantidade, dataValidade, emissao, responsavel1, responsavel2, responsavel3, numRevisao, numLaudo, createdBy, updatedBy, idMoveItens, id } = req.body        

        await LoteVolume.update({ volume, quantidade, dataValidade, emissao, responsavel1, responsavel2, responsavel3, numRevisao, numLaudo, createdBy, updatedBy, idMoveItens }, { where: { id }, force: true }) 
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
        const {id} = req.body
        const result = await LoteVolume.destroy({where:{id}, force: true})
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
        const { volume, quantidade, dataValidade, emissao, responsavel1, responsavel2, responsavel3, numRevisao, numLaudo, createdBy, updatedBy, idMoveitens } = req.body 

        const result = await LoteVolume.create({ volume, quantidade, dataValidade, emissao, responsavel1, responsavel2, responsavel3, numRevisao, numLaudo, createdBy, updatedBy, idMoveitens })
        
        return res.json(result)
    }
}