const Product = require('../model/Product')

module.exports = {

    //Função que vai retornar objeto com todos os cadastros
    async index(req, res){
        const result =  await Product.findAll()        
        return res.json(result)
    },

    async indexOne(req, res){
        const { id } = req.params
        const result =  await Product.findByPk( id )        
        return res.json(result)
    },

    //Função que vai receber dados que serao utilizados para atualizar o cadastro
    async update(req, res){
        const { id, codigo, nome, medida} = req.body        
        
        await Product.update({ codigo, nome, medida }, { where: { id } }) 
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
        await Product.destroy({where:{id}, force: true})
        .then(() => {
            res.status(200).json({message: "Cadastro deletado com sucesso"});
            console.log({message: "Cadastro deletado com sucesso"})
        })
        .catch(() => {
            res.status(400).json({message: "Erro ao deletar cadastro"});
            console.log({message: "Erro ao deletar cadastro"});
        });
    },

    //Função que vai receber dados que serao utilizados para criação de um novo cadastro
    async store(req, res){
        const { codigo, nome, medida } = req.body

        const result = await Product.create({ codigo, nome, medida })
        
        return res.json(result)
    },
}