const { Model, DataTypes } = require('sequelize')

class LoteVolume extends Model {
    static init (sequelize) {
        super.init({
        volume: DataTypes.STRING,
        quantidade: DataTypes.STRING,
        dataValidade: DataTypes.STRING,
        emissao: DataTypes.STRING,
        responsavel3: DataTypes.INTEGER,
        responsavel2: DataTypes.INTEGER,
        responsavel1: DataTypes.INTEGER,
        numRevisao: DataTypes.STRING,
        numLaudo: DataTypes.STRING,
        createdBy: DataTypes.INTEGER,
        updatedBy: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.MoveItens, { foreignKey: 'idMoveitens', as: 'moveitens' })
    }
} 

module.exports = LoteVolume

