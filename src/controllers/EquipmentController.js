
const Equipment = require ('../model/Equipment')

module.exports = {

    //Função que vai retornar objeto com todos os cadastros
    async index(req, res){
        const equipment =  await Equipment.findAll()
        return res.json(equipment)
    },

    //Função que vai receber dados que serao utilizados para atualizar o cadastro
    async update(req, res){

        const {id, nome, tipo, tag, capacidade} = req.body        

        const response = await Equipment.update({ nome, tipo, tag, capacidade },{where: {id}, force: true}) 
        .then(() => {
            res.json({message: "atualizado com sucesso"});
            console.log({message: "atualizado com sucesso"})
        })
        .catch(() => {
            res.json({message: "falha ao atualizar"});
            console.log({message: "falha ao atualizar"});
        });
        console.log(response)
    },

    //Função que vai receber 'id' de um cadastro e exclusão do mesmo
    async delete(req, res){
        const {id} = req.body
        await Equipment.destroy({where:{id}, force: true})
        .then(() => {
            res.json({message: "deletado com sucesso"});
            console.log({message: "deletado com sucesso"})
        })
        .catch(() => {
            res.json({message: "falha ao deletar"});
            console.log({message: "falha ao deletar"});
        });
    },

    //Função que vai receber dados que serao utilizados para criação de um novo adastro
    async store(req, res){
        const { nome, tipo, tag, capacidade } = req.body 

        const equipment = await Equipment.create({  nome, tipo, tag, capacidade })
        console.log(equipment)
        return res.json(equipment)
    }
}