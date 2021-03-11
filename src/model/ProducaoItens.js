const { Model, DataTypes } = require('sequelize')

class ProducaoItens extends Model {
    static init (sequelize) {
        super.init({                        
            createdBy: DataTypes.INTEGER,
            updatedBy: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: "ProducaoItens"
        })
    }
    static associate(models) {
        this.belongsTo(models.Producao, { foreignKey: 'idProducao', as: 'producao' })
        this.belongsTo(models.MoveItensVolume, { foreignKey: 'idMoveitensvolume', as: 'moveitensvolume' })
    }
} 

module.exports = ProducaoItens