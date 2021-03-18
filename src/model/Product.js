const { Model, DataTypes } = require('sequelize')

class Product extends Model {
    static init (sequelize) {
        super.init({
            codigo: DataTypes.STRING,
            nome: DataTypes.STRING,
            medida: DataTypes.STRING,
            createdBy: DataTypes.INTEGER,
            updatedBy: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
} 

module.exports = Product