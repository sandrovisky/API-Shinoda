const { Model, DataTypes } = require('sequelize')

class Analysis extends Model {
    static init (sequelize) {
        super.init({
            status: DataTypes.STRING,            
            createdBy: DataTypes.INTEGER,
            updatedBy: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.Product, { foreignKey: 'idProduct', as: 'product' })
        this.belongsTo(models.LoteItens, { foreignKey: 'idLoteitens', as: 'loteitens' })
        this.hasOne(models.AnalysisData, { foreignKey: 'id', as: 'analysisdata' })
    }
} 

module.exports = Analysis