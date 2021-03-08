const { Model, DataTypes } = require('sequelize')

class VolumeItensTable extends Model {
    static init (sequelize) {
        super.init({
        lastId: DataTypes.INTEGER,
        quantidadePaletes: DataTypes.INTEGER,
        quantidadeTotal: DataTypes.INTEGER,
        createdBy: DataTypes.INTEGER,
        updatedBy: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.Move, { foreignKey: 'idMove', as: 'move' })        
        this.belongsTo(models.LoteItens, { foreignKey: 'idLoteitens', as: 'loteitens' })
    }
} 

module.exports = VolumeItensTable

