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
    }
} 

module.exports = AnalysisData