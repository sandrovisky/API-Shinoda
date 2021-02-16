const { Model, DataTypes } = require('sequelize')

class SupplierProduct extends Model {
    static init (sequelize) {
        super.init({
        }, {
            sequelize
        })
    }
} 

module.exports = SupplierProduct