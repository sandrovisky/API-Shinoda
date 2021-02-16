const Product = require('../model/Product')

module.exports = {

    //Função que vai retornar objeto com todos os cadastros
    async index(req, res){
        const product =  await Product.findAll()
        return res.json(product)
    },

    //Função que vai receber dados que serao utilizados para atualizar o cadastro
    async update(req, res){

        const { id, codigo, nome, medida} = req.body        
        
        const response = await Product.update({ codigo, nome, medida },{where: {id}, force: true}) 
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
        await Product.destroy({where:{id}, force: true})
        .then(() => {
            res.json({message: "deletado com sucesso"});
            console.log({message: "deletado com sucesso"})
        })
        .catch(() => {
            res.json({message: "falha ao deletar"});
            console.log({message: "falha ao deletar"});
        });
    },

    //Função que vai receber dados que serao utilizados para criação de um novo cadastro
    async store(req, res){
        const { codigo, nome, medida } = req.body

        const product = await Product.create({ codigo, nome, medida })
        console.log(product)
        return res.json(product)
    },

    //Função que vai vincular produto ao fornecedor
    async putIdSupplier(req, res){

        const { id } = req.params

        const { idSupplier } = req.body

        const result = await Product.update({ idSupplier }, { where: { id } })
        .then(() => {
            console.log({message: "vinculado com sucesso"})
            return res.json({message: "vinculado com sucesso"});
        })
        .catch(() => {
            console.log({message: "falha ao vincular"})
            return res.json({message: "falha ao vincular"});
        });
        console.log(result)
    }
}