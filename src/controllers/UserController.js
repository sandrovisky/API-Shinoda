const User = require('../model/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

module.exports = {

    //Função que vai retornar objeto com todos os cadastros
    async index(req, res){
        const result =  await User.findAll()
        return res.json(result)
    },

    //Função que vai retornar objeto com todos os cadastros
    async loginPost(req, res){
        const { usuario, senhaHash } = req.body

        const result =  await User.findOne({
            where: {
                usuario
            }
        })

        if (!result) 
            return res.status(400).json({error: "Usuario nao encontrado"})
    
        if (!await bcrypt.compare(senhaHash, result.senha))
            return res.status(400).json({error: "Senha Invalida"})

        result.senha = undefined

        const token = jwt.sign({ id: result.id}, process.env.HASH_JWT, {
            expiresIn: "8h" //8hrs
        })
        return res.json({ result , token })        
    },

    async loginGet(req, res){
        const id = req.idUsuario

        const result =  await User.findByPk(id)
        return res.json(result)      
    },

    //Função que vai receber uma string de 'usuario' e retornar um objeto, caso ja exista o usuario, ou null
    async findUser(req, res){
        const {usuario} = req.params

        const result =  await User.findOne({ where: { usuario } })
        
        return res.json(result)

    },

    //Função que vai receber dados que serao utilizados para atualizar o cadastro
    async update(req, res){

        const { id } = req.params
        const { senha } = req.body    
        const updatedBy = req.idUsuario    


        await User.update({ senha, updatedBy },{where: {id}})
        .then(() => {
            res.status(200).json({message: "Cadastro atualizado com sucesso"});
            console.log({message: "Cadastro atualizado com sucesso"})
        })
        .catch(() => {
            res.status(400).json({message: "Erro ao atualizar cadastro"});
            console.log({message: "Erro ao atualizar cadastro"});
        });
    },

    async delete(req, res){

        await User.destroy({ where: req.params })
        .then(async response => {
            return res.json({ message: "deletado com sucesso"})
        })
    },

    //Função que vai receber dados que serao utilizados para criação de um novo adastro
    async store(req, res){
        const { usuario, senhaSemHash } = req.body

        var salt = bcrypt.genSaltSync(10);
        var senha = bcrypt.hashSync(senhaSemHash, salt)

        //constante que sera utilizada para verificar se ja existe um mesmo usuario cadastrado
        const verificaCadastro =  await User.findOne({ where: { usuario } });

        if (verificaCadastro === null) {
            const result = await User.create({ usuario, senha })
            
            return res.json(result)
        } else {
            console.log({message: "usuario ja cadastrado"});
            return res.status(400).json({message: "usuario ja cadastrado"})
        }
        
    }
}


