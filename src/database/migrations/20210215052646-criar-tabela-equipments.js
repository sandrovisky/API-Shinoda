'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
    
        return queryInterface.createTable('Equipment', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nome: Sequelize.STRING,
            tipo: Sequelize.STRING,
            tag: Sequelize.STRING,
            capacidade: Sequelize.STRING,
            createdBy: Sequelize.INTEGER,
            updatedBy: Sequelize.INTEGER,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        })

    },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Equipment')
  }
};
