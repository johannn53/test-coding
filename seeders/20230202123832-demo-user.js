"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("users", [
      {
        name: "nova",
        email: "example@example.com",
        password: "12345",
        roles: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "tech",
        email: "example1@example.com",
        password: "12345",
        roles: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, {});
  },
};
