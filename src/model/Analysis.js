const { Model, DataTypes } = require('sequelize')

class Analysis extends Model {
    static init (sequelize) {
        super.init({
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.Product, { foreignKey: 'idProduct', as: 'product' })
        this.belongsTo(models.Lote, { foreignKey: 'idLote', as: 'lote' })
    }
} 

module.exports = Analysis