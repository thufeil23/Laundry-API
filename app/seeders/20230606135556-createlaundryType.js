'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const laundryType_data = [
    {
      itemName: "perKg",
      price: 10000,
    },
    {
      itemName: "karpet",
      price: 35000,
    },
    {
      itemName: "jas",
      price: 25000,
    },
    ];
    await queryInterface.bulkInsert('laundryTypes',laundryType_data);
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
