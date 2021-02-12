const { Model, DataTypes } = require('sequelize')

class Supplier extends Model {
    static init (sequelize) {
        super.init({
            nomeFantasia: DataTypes.STRING,
            razaoSocial: DataTypes.STRING,
            endereco: DataTypes.STRING,
            cnpj: DataTypes.STRING,
        }, {
            sequelize
        })
    }
} 

module.exports = Supplier