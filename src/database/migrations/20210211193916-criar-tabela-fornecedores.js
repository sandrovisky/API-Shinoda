'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
    
        return queryInterface.createTable('Suppliers', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nomeFantasia: Sequelize.STRING,
            razaoSocial: Sequelize.STRING,
            endereco: Sequelize.STRING,
            cnpj: Sequelize.STRING,
            createdBy: Sequelize.INTEGER,
            updatedBy: Sequelize.INTEGER,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        })

    },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Suppliers')
  }
};
