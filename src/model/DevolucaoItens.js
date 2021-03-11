const { Model, DataTypes } = require('sequelize')

class DevolucaoItens extends Model {
    static init (sequelize) {
        super.init({
            pesoPalete: DataTypes.FLOAT,
            createdBy: DataTypes.INTEGER,
            endedBy: DataTypes.INTEGER,
            endedAt: DataTypes.DATE,
        }, {
            sequelize,
            tableName: "DevolucaoItens"
        })
    }
    static associate(models) {
        this.belongsTo(models.Devolucao, { foreignKey: 'idDevolucao', as: 'devolucao' })
        this.belongsTo(models.MoveItensVolume, { foreignKey: 'idMoveitensvolume', as: 'moveitensvolume' })
    }
} 

module.exports = DevolucaoItens