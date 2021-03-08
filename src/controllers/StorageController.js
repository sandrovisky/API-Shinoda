const Storage = require('../model/Storage')

module.exports = {

    //Função que vai retornar objeto com todos os cadastros
    async index(req, res){
        const result =  await Storage.findOne()
        return res.json(result)
    },

    //Função que vai receber dados que serao utilizados para atualizar o cadastro
    async update(req, res){

        const { senha } = req.body        

        await Storage.update({ senha },{where: {id: 1}})
        .then(() => {
            res.status(200).json({message: "Cadastro atualizado com sucesso"});
            console.log({message: "Cadastro atualizado com sucesso"})
        })
        .catch(() => {
            res.status(400).json({message: "Erro ao atualizar cadastro"});
            console.log({message: "Erro ao atualizar cadastro"});
        });
    },

    //Função que vai receber dados que serao utilizados para criação de um novo adastro
    async store(req, res){
        const { usuario, senha } = req.body

        //constante que sera utilizada para verificar se ja existe um mesmo usuario cadastrado
        const verificaCadastro =  await Storage.findOne({ where: { usuario } });

        if (verificaCadastro === null) {
            const result = await Storage.create({ usuario, senha })
            
            return res.json(result)
        } else {
            console.log({message: "usuario ja cadastrado"});
            return res.status(400).json({message: "usuario ja cadastrado"})
        }
        
    }
}


