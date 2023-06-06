'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const paymentType_data = [
    {
      itemName: "cash",
    },
    {
      itemName: "qrscan",
    },
    {
      itemName: "e-wallet",
    },
    ];
    await queryInterface.bulkInsert('PaymentTypes',paymentType_data);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
