const Move = require ('../model/Move')
const MoveItensVolume = require('../model/MoveItensVolume')
const Supplier = require('../model/Supplier')

module.exports = {

    //Função que vai retornar objeto com todos os cadastros
    async index(req, res){
        const result =  await Move.findAll({ include: 
            [
                {
                    association: 'supplier'
                },
            ],
                
        })
        return res.json(result)
    },

    async indexByProduct(req, res){
        
        const { idProduct } = req.params

        const result =  await Move.findOne({ include: 
            [
                {
                    association: 'moveitens',
                    where: { idProduct }
                },
            ],
                
        })
        return res.json(result)
    },


    async indexOne(req, res){
        const { id } = req.params
        const result =  await Move.findAll({where: { id }, include: 
            [
                {
                    association: 'moveitens',
                    include: [
                        {
                            model: MoveItensVolume,
                            as: 'moveitensvolume'
                        }
                    ],
                },
            ],
                
        })
        return res.json(result)
    },

    //Função que vai receber dados que serao utilizados para atualizar o cadastro
    async update(req, res){
        const { nf, pedido, status, createdBy, updatedBy, id } = req.body        

        await Move.update( { nf, pedido, status, createdBy, updatedBy } ,{ where: { id }, force: true }) 
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
        const { id } = req.body
        await Move.destroy({where:{id}, force: true})
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
        const { nf, pedido, status, createdBy, updatedBy, idSupplier } = req.body 

        const supplier =  await Supplier.findByPk(idSupplier)

        if(supplier !== null){
            const result = await Move.create({ nf, pedido, status, createdBy, updatedBy, idSupplier })
        
            return res.json(result)
        } else {
            return  res.status(500).json("erro")
        }
        
        
    }
}