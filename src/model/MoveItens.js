const { Model, DataTypes } = require('sequelize')

class MoveItens extends Model {
    static init (sequelize) {
        super.init({
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.Product, { foreignKey: 'idProduct', as: 'product' })
        this.belongsTo(models.Move, { foreignKey: 'idMove', as: 'move' })
        this.hasOne(models.MoveItensVolume, { foreignKey: 'idMoveitens', as: 'moveitensvolume' })
        this.hasOne(models.LoteItens, { foreignKey: 'idMoveitens', as: 'loteitens' })
    }
} 

module.exports = MoveItens