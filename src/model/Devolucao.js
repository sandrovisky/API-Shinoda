const { Model, DataTypes } = require('sequelize')

class Devolucao extends Model {
    static init (sequelize) {
        super.init({
            status: DataTypes.INTEGER,
            pesoTotal: DataTypes.FLOAT,
            createdBy: DataTypes.INTEGER,
            updatedBy: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: "Devolucoes"
        })
    }
    static associate(models) {
        this.belongsTo(models.Producao, { foreignKey: 'idProducao', as: 'producao' })
    }
} 

module.exports = Devolucao