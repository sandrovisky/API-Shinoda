'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('DevolucaoItens', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },        
            idDevolucao: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'devolucoes',
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
            pesoPalete: Sequelize.FLOAT(18,3),    
            createdBy: Sequelize.INTEGER,
            endedBy: Sequelize.INTEGER,
            createdAt: Sequelize.DATE,
            endedAt: Sequelize.DATE,
        })
      },
    
      down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('DevolucaoItens')
      }
};
