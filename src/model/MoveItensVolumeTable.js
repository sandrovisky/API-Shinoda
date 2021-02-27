const { Model, DataTypes } = require('sequelize')

class MoveItensVolumeTable extends Model {
    static init (sequelize) {
        super.init({
        quantidadePaletes: DataTypes.INTEGER,
        lastId: DataTypes.INTEGER,
        quantidadeTotal: DataTypes.STRING,
        produto: DataTypes.STRING,
        codigoLote: DataTypes.STRING,
        validade: DataTypes.STRING,
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

module.exports = MoveItensVolumeTable
