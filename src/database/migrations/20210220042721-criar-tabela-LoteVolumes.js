'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('LoteVolumes', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },  
        idMoveitens: {
            type: Sequelize.INTEGER,
            references: {
                model: 'moveitens',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'NO ACTION'
        },
        volume: Sequelize.STRING,
        quantidade: Sequelize.STRING,
        dataValidade: Sequelize.STRING,
        emissao: Sequelize.STRING,
        responsavel3: Sequelize.INTEGER,
        responsavel2: Sequelize.INTEGER,
        responsavel1: Sequelize.INTEGER,
        numRevisao: Sequelize.STRING,
        numLaudo: Sequelize.STRING,
        createdBy: Sequelize.INTEGER,
        updatedBy: Sequelize.INTEGER,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('LoteVolumes')
  }
};
