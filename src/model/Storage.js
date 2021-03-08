const { Model, DataTypes } = require('sequelize')

class Storage extends Model {
    static init (sequelize) {
        super.init({
            usuario: DataTypes.STRING,
            log: DataTypes.BOOLEAN,
        }, {
            sequelize
        })
    }
} 

module.exports = Storage