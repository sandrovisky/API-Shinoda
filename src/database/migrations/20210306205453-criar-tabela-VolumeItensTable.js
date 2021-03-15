'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('VolumeItensTables', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },        
            idMove: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Moves',
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
            lastId: Sequelize.INTEGER,
            quantidadePaletes: Sequelize.INTEGER, 
            quantidadeTotal: Sequelize.INTEGER,
            createdBy: Sequelize.INTEGER,
            updatedBy: Sequelize.INTEGER,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        })
      },
    
      down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('VolumeItensTables')
      }
};

