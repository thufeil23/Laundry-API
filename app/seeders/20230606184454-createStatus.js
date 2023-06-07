'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const Status_data = [
    {
      status: "pending",
    },
    {
      status: "active",
    },
    {
      status: "done",
    },
    ];
    await queryInterface.bulkInsert('orderStatuses',Status_data);
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
