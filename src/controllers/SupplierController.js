
const Supplier = require ('../model/Supplier')

module.exports = {

    //Função que vai retornar objeto com todos os cadastros
    async index(req, res){
        const supplier =  await Supplier.findAll()
        return res.json(supplier)
    },

    //Função que vai receber dados que serao utilizados para atualizar o cadastro
    async update(req, res){

        const {id, nomeFantasia, razaoSocial, endereco, cnpj} = req.body        

        const response = await Supplier.update({ nomeFantasia, razaoSocial, endereco, cnpj },{where: {id}, force: true}) 
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
        await Supplier.destroy({where:{id}, force: true})
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
        const { nomeFantasia, razaoSocial, endereco, cnpj } = req.body

        const supplier = await Supplier.create({  nomeFantasia, razaoSocial, endereco, cnpj })
        console.log(res)
        return res.json(supplier)
    },
}