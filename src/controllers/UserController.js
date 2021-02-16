const User = require('../model/User')

module.exports = {

    //Função que vai retornar objeto com todos os cadastros
    async index(req, res){
        const user =  await User.findAll()
        return res.json(user)
    },

    //Função que vai receber uma string de 'usuario' e retornar um objeto, caso ja exista o usuario, ou null
    async findUser(req, res){
        const {usuario} = req.params
        console.log(usuario)
        const user =  await User.findOne({ where: { usuario } });
        console.log(user)
        return res.json(user)

    },

    //Função que vai receber dados que serao utilizados para atualizar o cadastro
    async update(req, res){

        const { id } = req.params
        const { senha } = req.body        

        const response = await User.update({ senha },{where: {id}})
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

    //Função que vai receber dados que serao utilizados para criação de um novo adastro
    async store(req, res){
        const { usuario, senha } = req.body

        //constante que sera utilizada para verificar se ja existe um mesmo usuario cadastrado
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


