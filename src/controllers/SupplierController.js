const { update } = require('../model/Supplier')
const Supplier = require ('../model/Supplier')

module.exports = {

    async index(req, res){
        const supplier =  await Supplier.findAll()
        return res.json(supplier)
    },

    async update(req, res){

        const {id, nomeFantasia, razaoSocial, endereco, cnpj} = req.body        

        const response = await Supplier.update({nomeFantasia, razaoSocial, endereco, cnpj },{where: {id}, force: true}) 
        .then(deletedOwner => {
            res.json(deletedOwner);
            console.log(deletedOwner)
        })
        .catch(deletedOwner => {
            console.log(deletedOwner);
        });
        console.log(response)
    },

    async delete(req, res){
        const {id} = req.body
        const suplier =  await Supplier.destroy({where:{id}, force: true})
            .then(deletedOwner => {
                res.json(deletedOwner);
                console.log(deletedOwner)
            })
            .catch(deletedOwner => {
                console.log(deletedOwner);
            });
        console.log(suplier)
    },

    async store(req, res){
        const { nomeFantasia, razaoSocial, endereco, cnpj } = req.body

        const supplier = await Supplier.create({  nomeFantasia, razaoSocial, endereco, cnpj })
        console.log(res)
        return res.json(supplier)
    }
}