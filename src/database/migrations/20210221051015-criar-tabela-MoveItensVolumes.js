'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('MoveItensVolumes', {
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
            onDelete: 'CASCADE'
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
        leitura: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
        codigo: Sequelize.STRING,
        quantidadePaletes: Sequelize.INTEGER,
        quantidadeTotal: Sequelize.STRING,
        createdBy: Sequelize.INTEGER,
        updatedBy: Sequelize.INTEGER,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MoveItensVolumes')
  }
};
