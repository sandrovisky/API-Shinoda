const { Model, DataTypes } = require('sequelize')

class User extends Model {
    static init (sequelize) {
        super.init({
            usuario: DataTypes.STRING,
            senha: DataTypes.STRING,
        }, {
            sequelize
        })
    }
} 

module.exports = User