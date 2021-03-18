const Equipment = require ('../model/Equipment')

module.exports = {

    //Função que vai retornar objeto com todos os cadastros
    async index(req, res){
        const result =  await Equipment.findAll()
        return res.json(result)
    },

    //Função que vai receber dados que serao utilizados para atualizar o cadastro
    async update(req, res){
        const {id, nome, tipo, tag, capacidade} = req.body  
        const updatedBy = req.idUsuario      

        await Equipment.update({ nome, tipo, tag, capacidade, updatedBy },{where: {id}, force: true}) 
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
        const result = await Equipment.destroy({where:{id}, force: true})
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
        const { nome, tipo, tag, capacidade } = req.body 
        const createdBy = req.idUsuario

        const result = await Equipment.create({  nome, tipo, tag, capacidade, createdBy })
        
        return res.json(result)
    }
}