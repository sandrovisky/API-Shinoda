const ProducaoItens = require('../model/ProducaoItens')

module.exports = {

    //Função que vai retornar objeto com todos os cadastros
    async index(req, res){
        const result =  await ProducaoItens.findAll()
        return res.json(result)
    },
    
    //Função que vai receber dados que serao utilizados para atualizar o cadastro
    async update(req, res){

    },

    //Função que vai receber dados que serao utilizados para criação de um novo adastro
    async store(req, res){
        
    }
}


