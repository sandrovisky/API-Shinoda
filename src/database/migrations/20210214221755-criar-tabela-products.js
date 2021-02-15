'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },        
        codigo: Sequelize.STRING,
        nome: Sequelize.STRING,
        medida: Sequelize.STRING,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products')
  }
};
