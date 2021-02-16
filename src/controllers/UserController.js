const User = require('../model/User')

module.exports = {

    async index(req, res){
        const user =  await User.findAll()
        return res.json(user)
    },

    async encontraUsuario(req, res){
        const {usuario} = req.query
        console.log(usuario)
        const user =  await User.findOne({ where: { usuario } });
        console.log(user)
        return res.json(user)

    },

    async update(req, res){

        const { id, senha } = req.body        

        const response = await User.update({ senha },{where: {id}, force: true})
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

    async store(req, res){
        const { usuario, senha } = req.body

        const verificaCadastro =  await User.findOne({ where: { usuario } });
        if (verificaCadastro === null) {

            const user = await User.create({ usuario, senha })

            .then(() => {
                res.json({message: "usuario criado com sucesso"});
                console.log({message: "usuario criado com sucesso"})
            })
            .catch(() => {
                res.json({message: "falha ao criar"});
                console.log({message: "falha ao criar"});
            });
            console.log(user)
            return res.json(user)
        } else {
            console.log({message: "usuario ja cadastrado"});
            return res.json({message: "usuario ja cadastrado"})
        }
        
    }
}


