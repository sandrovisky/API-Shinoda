'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('Analyses', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
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
            idLoteitens: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'LoteItens',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'NO ACTION'
            },
            status: Sequelize.STRING,           
            createdBy: Sequelize.INTEGER,
            updatedBy: Sequelize.INTEGER,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        })
      },
    
      down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Analyses')
      }
};
