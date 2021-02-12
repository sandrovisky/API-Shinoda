'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('Suppliers', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nomeFantasia: Sequelize.STRING,
        razaoSocial: Sequelize.STRING,
        endereco: Sequelize.STRING,
        cnpj: Sequelize.STRING,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    })

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Suppliers')
  }
};
