const { Model, DataTypes } = require('sequelize')

class Equipment extends Model {
    static init (sequelize) {
        super.init({
            nome: DataTypes.STRING,
            tipo: DataTypes.STRING,
            tag: DataTypes.STRING,
            capacidade: DataTypes.STRING,
        }, {
            sequelize
        })
    }
} 

module.exports = Equipment