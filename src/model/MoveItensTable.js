const { Model, DataTypes } = require('sequelize')

class MoveItensTable extends Model {
    static init (sequelize) {
        super.init({
        createdBy: DataTypes.INTEGER,
        updatedBy: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
    static associate(models) {        
        this.belongsTo(models.MoveItensVolumeTable, { foreignKey: 'idMoveitensvolumetable', as: 'table' })
        this.belongsTo(models.MoveItensVolume, { foreignKey: 'idMoveitensvolume', as: 'moveitensvolume' })
    }
} 

module.exports = MoveItensTable

