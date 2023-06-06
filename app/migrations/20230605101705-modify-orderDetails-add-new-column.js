'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('orderDetails', 'orderId', {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Orders',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
      after: 'id',
    });
  },

  

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('orderDetails', 'orderId');
  }
};
