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
        this.belongsTo(models.LoteItens, { foreignKey: 'id', as: 'loteitens' })
    }
} 

module.exports = Analysis