const AnalysisData = require ('../model/AnalysisData')
const Product = require ('../model/Product')

module.exports = {

    //Função que vai retornar objeto com todos os cadastros
    async index(req, res){
        const result =  await AnalysisData.findAll({
            include: [
                {
                    association: 'analysis'
                }
            ]
        })
        return res.json(result)
    },

    //Função que vai retornar objeto os cadastros da idmoveitensvolume informado
    async indexOne(req, res){
        const { idAnalysis } = req.params

        const result =  await AnalysisData.findOne( {where: {idAnalysis}, include:
        [
            {
                association: 'analysis',                
            }
        ]
    })
        return res.json(result)
    },

    //Função que vai receber dados que serao utilizados para atualizar o cadastro
    async update(req, res){
        const { idAnalysis, idMoveitensvolume, idProduct, quantidadeIntegral, quantidadeGema, quantidadeClara, quantidadeCasca, id } = req.body        

        await AnalysisData.update({ idAnalysis, idMoveitensvolume, idProduct, quantidadeIntegral, quantidadeGema, quantidadeClara, quantidadeCasca }, { where: { id }, force: true}) 
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
        const {id} = req.body
        const result = await AnalysisData.destroy({ where: { id }, force: true})
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

        const { createdBy, updatedBy, idAnalysis, idMoveitensvolume, idProduct, quantidadeIntegral, quantidadeGema, quantidadeClara, quantidadeCasca } = req.body

        const result = await AnalysisData.create({ createdBy, updatedBy, idAnalysis, idMoveitensvolume, idProduct, quantidadeIntegral, quantidadeGema, quantidadeClara, quantidadeCasca })
        
        return res.json(result)
    }
}