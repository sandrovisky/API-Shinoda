
const Supplier = require ('../model/Supplier')

module.exports = {

    //Função que vai retornar objeto com todos os cadastros
    async index(req, res){
        const result =  await Supplier.findAll()
        return res.json(result)
    },

    //Função que vai retornar objeto com todos os cadastros
    async indexOne(req, res){
        const { id } = req.params
        const result =  await Supplier.findOne({ where: { id } })
        return res.json(result)
    },

    //Função que vai receber dados que serao utilizados para atualizar o cadastro
    async update(req, res){
        const {id, nomeFantasia, razaoSocial, endereco, cnpj} = req.body        

        await Supplier.update({ nomeFantasia, razaoSocial, endereco, cnpj },{where: {id}, force: true}) 
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
        const result = await Supplier.destroy({where:{id}, force: true})
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
        const { nomeFantasia, razaoSocial, endereco, cnpj } = req.body

        const result = await Supplier.create({  nomeFantasia, razaoSocial, endereco, cnpj })
        return res.json(result)

    },
}