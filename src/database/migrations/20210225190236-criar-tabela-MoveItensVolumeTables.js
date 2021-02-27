'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('MoveItensVolumeTables', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },  
        idMove: {
            type: Sequelize.INTEGER,
            references: {
                model: 'moves',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'NO ACTION'
        },
        idLoteitens: {
            type: Sequelize.INTEGER,
            references: {
                model: 'loteitens',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'NO ACTION'
        },
        lastId: Sequelize.INTEGER,
        quantidadePaletes: Sequelize.INTEGER,
        quantidadeTotal: Sequelize.INTEGER,
        produto: Sequelize.STRING,
        codigoLote: Sequelize.STRING,
        validade: Sequelize.STRING,
        createdBy: Sequelize.INTEGER,
        updatedBy: Sequelize.INTEGER,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MoveItensVolumeTables')
  }
};
