'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('MoveItens', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },  
        idMove: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Moves',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'NO ACTION'
        },
        idProduct: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Products',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'NO ACTION'
        },
        createdBy: Sequelize.INTEGER,
        updatedBy: Sequelize.INTEGER,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MoveItens')
  }
};
