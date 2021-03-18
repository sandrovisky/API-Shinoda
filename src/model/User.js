const { Model, DataTypes } = require('sequelize')
const { tableName } = require('./Supplier')

class User extends Model {
    static init (sequelize) {
        super.init({
            usuario: DataTypes.STRING,
            senha: DataTypes.STRING,
            createdBy: DataTypes.INTEGER,
            updatedBy: DataTypes.INTEGER,
        }, {
            sequelize,
        })
    }
} 

module.exports = User