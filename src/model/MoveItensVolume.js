const { Model, DataTypes } = require('sequelize')

class MoveItensVolume extends Model {
    static init (sequelize) {
        super.init({
        leitura:  DataTypes.BOOLEAN,
        codigo: DataTypes.STRING,
        quantidadePaletes: DataTypes.STRING,
        quantidadeTotal: DataTypes.STRING,
        createdBy: DataTypes.INTEGER,
        updatedBy: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.MoveItens, { foreignKey: 'idMoveitens', as: 'moveitens' })
        this.belongsTo(models.LoteItens, { foreignKey: 'idLoteitens', as: 'lote' })
        this.hasMany(models.Move, { foreignKey: 'id', as: 'move' })
    }
} 

module.exports = MoveItensVolume

