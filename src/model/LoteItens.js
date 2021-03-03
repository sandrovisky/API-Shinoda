const { Model, DataTypes } = require('sequelize')

class LoteItens extends Model {
    static init (sequelize) {
        super.init({
        dataValidade: DataTypes.STRING,
        laudo: DataTypes.STRING,
        lote: DataTypes.STRING,
        createdBy: DataTypes.INTEGER,
        updatedBy: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.MoveItens, { foreignKey: 'idMoveitens', as: 'moveitens' })
        this.hasOne(models.Analysis, { foreignKey: 'idLoteitens', as: 'analysis' })
        this.hasOne(models.MoveItensVolume, { foreignKey: 'idLoteitens', as: 'moveitensvolume' })
    }
} 

module.exports = LoteItens

