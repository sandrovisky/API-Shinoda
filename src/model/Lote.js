const { Model, DataTypes } = require('sequelize')

class Lote extends Model {
    static init (sequelize) {
        super.init({
        codigo: DataTypes.STRING,
        dataValidade: DataTypes.STRING,
        numLaudo: DataTypes.STRING,
        createdBy: DataTypes.INTEGER,
        updatedBy: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.MoveItens, { foreignKey: 'idMoveitens', as: 'moveitens' })
        this.belongsTo(models.Analysis, { foreignKey: 'idAnalysis', as: 'analysis' })
    }
} 

module.exports = Lote

