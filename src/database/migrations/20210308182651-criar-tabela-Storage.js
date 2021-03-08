'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('Storages', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            usuario: Sequelize.STRING,
            log: Sequelize.BOOLEAN,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        })
      },
    
      down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Storages')
      }
};

