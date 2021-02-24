const { Model, DataTypes } = require('sequelize')

class AnalysisData extends Model {
    static init (sequelize) {
        super.init({
            quantidadeIntegral: DataTypes.STRING,        
            quantidadeGema: DataTypes.STRING,
            quantidadeClara: DataTypes.STRING,
            quantidadeCasca: DataTypes.STRING,        
            createdBy: DataTypes.INTEGER,
            updatedBy: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.Analysis, { foreignKey: 'idAnalysis', as: 'analysis' })
        this.belongsTo(models.MoveItensVolume, { foreignKey: 'idMoveitensvolume', as: 'moveitensvolume' })
        this.belongsTo(models.Product, { foreignKey: 'idProduct', as: 'product' })
    }
} 

module.exports = AnalysisData