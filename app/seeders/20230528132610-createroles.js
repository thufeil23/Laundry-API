'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const roles_data = [
      {
        name: "USER",
      },
      {
        name: "ADMIN",
      },
    ];
    await queryInterface.bulkInsert('roles',roles_data);
  },

  async down (queryInterface, Sequelize) {
  }
};
