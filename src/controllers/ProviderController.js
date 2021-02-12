const Supplier = require ('../model/Supplier')

module.exports = {

    async index(req, res){
        const supplier =  await Supplier.findAll()
        return res.json(supplier)
    },

    async delete(req, res){
        const { id } = req.body
        const cliente =  await Cliente.destroy({where:{id: id}, force: true}).then(deletedOwner => {
            res.json(deletedOwner);
          }).catch(deletedOwner => {
            console.log(deletedOwner);
          });
        
    },

    async store(req, res){
        const { nomeFantasia, razaoSocial, endereco} = req.body

        const supplierr = await Supplier.create({  nomeFantasia, razaoSocial, endereco })
        console.log(res)
        return res.json(supplierr)
    }
}