const { Model, DataTypes } = require('sequelize')

class ProducaoEquipamento extends Model {
    static init (sequelize) {
        super.init({                        
            createdBy: DataTypes.INTEGER,
            updatedBy: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: "ProducaoEquipamentos"
        })
    }
    static associate(models) {
        this.belongsTo(models.Producao, { foreignKey: 'idProducao', as: 'producao' })
        this.belongsTo(models.Equipment, { foreignKey: 'idEquipamento', as: 'equipamento' })
    }
} 

module.exports = ProducaoEquipamento