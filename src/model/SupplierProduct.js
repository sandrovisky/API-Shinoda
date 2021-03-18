const { Model, DataTypes } = require('sequelize')

class SupplierProduct extends Model {
    static init (sequelize) {
        super.init({            
            createdBy: DataTypes.INTEGER,
            updatedBy: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.Product, { foreignKey: 'idProduct', as: 'product' })
        this.belongsTo(models.Supplier, { foreignKey: 'idSupplier', as: 'supplier' })
    }
} 

module.exports = SupplierProduct