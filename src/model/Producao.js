const { Model, DataTypes } = require('sequelize')

class Producao extends Model {
    static init (sequelize) {
        super.init({
            numProducao: DataTypes.INTEGER,
            status: DataTypes.STRING,
            quantidadeIntegral: DataTypes.FLOAT, 
            quantidadeGema: DataTypes.FLOAT,
            quantidadeClara: DataTypes.FLOAT,
            endedBy: DataTypes.INTEGER,
            endedAt: DataTypes.DATE,
            createdBy: DataTypes.INTEGER,
            updatedBy: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: "Producoes"
        })
    }
    static associate(models) {
        this.belongsTo(models.Supplier, { foreignKey: 'idSupplier', as: 'supplier' })
        this.hasMany(models.ProducaoItens, { foreignKey: 'idProducao', as: 'producaoitens' })
    }
} 

module.exports = Producao