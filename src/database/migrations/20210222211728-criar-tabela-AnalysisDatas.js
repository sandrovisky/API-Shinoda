'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('AnalysisData', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },        
            idAnalysis: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'analyses',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'NO ACTION'
            },        
            idMoveitensvolume: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'moveitensvolumes',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'NO ACTION'
            },
            idProduct: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'products',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'NO ACTION'
            },
            quantidadeIntegral: Sequelize.STRING,        
            quantidadeGema: Sequelize.STRING,
            quantidadeClara: Sequelize.STRING,
            quantidadeCasca: Sequelize.STRING,   
            createdBy: Sequelize.INTEGER,
            updatedBy: Sequelize.INTEGER,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        })
      },
    
      down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('AnalysisData')
      }
};

