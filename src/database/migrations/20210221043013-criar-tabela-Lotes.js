'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('LoteItens', {
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
            codigo: Sequelize.STRING,
            numLaudo: Sequelize.STRING,
            dataValidade: Sequelize.STRING,            
            createdBy: Sequelize.INTEGER,
            updatedBy: Sequelize.INTEGER,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        })
      },
    
      down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('LoteItens')
      }
};
