
const SupplierProduct = require ('../model/SupplierProduct')

module.exports = {

    //Função que vai retornar objeto com todos os cadastros
    async index(req, res){
        const response =  await SupplierProduct.findAll()
        return res.json(response)
    },

    //Função que vai receber 'id' de um cadastro e exclusão do mesmo
    async delete(req, res){
        const {id} = req.body
        await SupplierProduct.destroy({ where: { id } })
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
        const { idSupplier, idProduct } = req.body

        const encontraRegistro =  await SupplierProduct.findOne({ 
            where: { 
                idSupplier,
                idProduct
            } 
        });
        if (encontraRegistro === null) {
            const result =  await SupplierProduct.create({ idSupplier, idProduct })
            .then(() => {
                res.status(200).json({message: "cadastrado com sucesso"});
                console.log({message: "cadastrado com sucesso"})
            })
            .catch(() => {
                res.status(400).json({message: "erro ao cadastrar"});
                console.log({message: "erro ao cadastrar"});
            });
            return (result)
        } else {
            return res.status(400).json({message: "registro ja cadastrado"});
        }
    },    
}