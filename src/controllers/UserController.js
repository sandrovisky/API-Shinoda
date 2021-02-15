const User = require('../model/User')

module.exports = {

    async index(req, res){
        const user =  await User.findAll()
        return res.json(user)
    },

    async encontraUsuario(req, res){
        const {usuario} = req.params
        console.log(usuario)
        const user =  await User.findOne({ where: { usuario } });
        console.log(user)
        return res.json(user)

    },

    async update(req, res){

        const {id, usuario, senha} = req.body        

        const response = await User.update({id, usuario, senha },{where: {id}, force: true})
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
        await User.destroy({where:{id}, force: true})
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
        const { usuario, senha } = req.body

        const user = await User.create({ usuario, senha })
        console.log(res)
        return res.json(user)
    }
}