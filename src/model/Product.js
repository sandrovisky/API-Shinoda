const { Model, DataTypes } = require('sequelize')

class Product extends Model {
    static init (sequelize) {
        super.init({
            codigo: DataTypes.STRING,
            nome: DataTypes.STRING,
            medida: DataTypes.STRING,
        }, {
            sequelize
        })
    }    
} 

module.exports = Product