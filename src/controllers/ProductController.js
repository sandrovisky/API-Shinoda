const Product = require('../model/Product')

module.exports = {

    async index(req, res){
        const product =  await Product.findAll()
        return res.json(product)
    },

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

    async store(req, res){
        const { codigo, nome, medida } = req.body

        const product = await Product.create({ codigo, nome, medida })
        console.log(product)
        return res.json(product)
    }
}