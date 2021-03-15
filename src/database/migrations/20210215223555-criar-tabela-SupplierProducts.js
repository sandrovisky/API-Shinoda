'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('SupplierProducts', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },        
            idProduct: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Products',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'RESTRICT'
            },
            idSupplier: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Suppliers',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'RESTRICT'
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        })
      },
    
      down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('SupplierProducts')
      }
};
