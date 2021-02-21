const Lote = require('../model/Lote')

module.exports = {

    //Função que vai retornar objeto com todos os cadastros
    async index(req, res){
        const result =  await Lote.findAll({ include: [{ all: true, nested: true }] })
        return res.json(result)
    },

    //Função que vai receber 'id' de um cadastro e exclusão do mesmo
    async delete(req, res){
        const { id } = req.body
        await Move.destroy({where:{id}, force: true})
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

        await Lote.update({ codigo, numLaudo, dataValidade, createdBy, updatedBy, idMoveitens }, { where: { id } })
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
        const { codigo, numLaudo, dataValidade, createdBy, updatedBy, idMoveitens } = req.body

        
            const result = await Lote.create({ codigo, numLaudo, dataValidade, createdBy, updatedBy, idMoveitens })
            
            return res.json(result)
        
    }
}


