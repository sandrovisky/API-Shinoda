const Devolucao = require('../model/Devolucao')

module.exports = {

    //Função que vai retornar objeto com todos os cadastros
    async index(req, res){
        const result =  await Devolucao.findAll()
        return res.json(result)
    },

     async delete(req, res){
         const { id } = req.body
        const result =  await Devolucao.destroy({ where: { id } })
        return res.json(result)
    },

    async indexByProducao(req, res){
        const { idProducao } = req.params
        const result =  await Devolucao.findOne({
            where: {
                idProducao
            }
        })
        return res.json(result)
    },

    //Função que vai receber dados que serao utilizados para atualizar o cadastro
    async update(req, res){        

        await Devolucao.update({  },{where: {id}})
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
        await Devolucao.create(req.body)
        .then(async response => {
            return res.json(response)
        })    
    }
}


