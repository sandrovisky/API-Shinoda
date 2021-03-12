const { Model, DataTypes } = require('sequelize')

class Move extends Model {
    static init (sequelize) {
        super.init({
            nf: DataTypes.STRING,
            pedido: DataTypes.STRING,
            status: DataTypes.STRING,
            createdBy: DataTypes.INTEGER,
            updatedBy: DataTypes.INTEGER
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.Supplier, { foreignKey: 'idSupplier', as: 'supplier' })
        this.hasMany(models.MoveItens, { foreignKey: 'idMove', as: 'moveitens' })
    }
} 


module.exports = Move