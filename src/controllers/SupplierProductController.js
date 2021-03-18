
const SupplierProduct = require ('../model/SupplierProduct')
const Product = require('../model/Product')
const Supplier = require('../model/Supplier')

module.exports = {

    //Função que vai retornar objeto com todos os cadastros
    async indexProducts(req, res){
        const result =  await SupplierProduct.findAll({include: {association: 'product'}})
        return res.json(result)
    },

    //Função que vai retornar objeto com todos os cadastros
    async index(req, res){
        const result =  await SupplierProduct.findAll({include: {association: 'product'}})
        return res.json(result)
    },

    //Função que vai retornar objeto com os cadastros de acordo com a idSupplier
    async indexOneProducts(req, res){
        const {idProduct} = req.params
        const result =  await SupplierProduct.findAll({ where: { idProduct }, include: {association: 'supplier'}})
        return res.json(result)
    },

    //Função que vai receber 'id' de um cadastro e exclusão do mesmo
    async delete(req, res){
        const {id} = req.body
        result = await SupplierProduct.destroy({ where: { id } })
        .then(() => {
            res.status(200).json({message: "Cadastro deletado com sucesso"});
            console.log({message: "Cadastro deletado com sucesso"})
        })
        .catch(() => {
            res.status(400).json({message: "Erro ao deletar cadastro"});
            console.log({message: "Erro ao deletar cadastro"});
        })
        return res.json(result)
    },

    //Função que vai receber dados que serao utilizados para criação de um novo adastro
    async store(req, res){
        const { idSupplier, idProduct } = req.body
        const createdBy = req.idUsuario

        //constante que verificara se id do fornecedor existe na tabela Suppliers
        const verificaFornecedor =  await Supplier.findOne({ where: {id: idSupplier} })

        //constante que verificara se as id do produto existe na tabela Products
        const verificaProduto =  await Product.findOne({ where: { id: idProduct } })

        //verfica se as ids existem
        if (!verificaProduto || !verificaFornecedor){
            return res.status(400).json({message: "id de produto/fornecedor nao cadastrado"});
        }

        //constante que verificara se ja existe um regristros com as chaves
        const encontraRegistro =  await SupplierProduct.findOne({ where: { idSupplier, idProduct } });
        if (encontraRegistro === null) {
            const result =  await SupplierProduct.create({ idSupplier, idProduct, createdBy })
            return res.json(result)
        } else {
            return res.status(400).json({message: "registro ja cadastrado"});
        }
    },    
}