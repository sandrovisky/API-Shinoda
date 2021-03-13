'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('Producoes', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            idSupplier: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'suppliers',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'NO ACTION'
            },
            numProducao: Sequelize.INTEGER,
            status: Sequelize.STRING,
            quantidadeIntegral: Sequelize.FLOAT(8,3), 
            quantidadeGema: Sequelize.FLOAT(8,3),
            quantidadeClara: Sequelize.FLOAT(8,3),       
            createdBy: Sequelize.INTEGER,
            updatedBy: Sequelize.INTEGER,
            endedBy: Sequelize.INTEGER,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
            endedAt: Sequelize.DATE,
        })
      },
    
      down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Producoes')
      }
};
