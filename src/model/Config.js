const { Model, DataTypes } = require('sequelize')

class Config extends Model {
    static init (sequelize) {
        super.init({
            numProducao: DataTypes.INTEGER
        }, {
            sequelize,
            tableName: 'CONFIG'
        })
    }
} 

module.exports = Config