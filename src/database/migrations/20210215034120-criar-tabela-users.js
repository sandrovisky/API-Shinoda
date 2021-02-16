'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },        
            usuario: {
                type: Sequelize.STRING,
                unique: true,
            },
            senha: Sequelize.STRING,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        })
      },
    
      down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Users')
      }
};
