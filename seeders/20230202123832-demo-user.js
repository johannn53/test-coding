"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const encryptedPasswordAdmin = bcrypt.hashSync("12345", 10);
    const encryptedPasswordUser = bcrypt.hashSync("12345", 10);
    return queryInterface.bulkInsert("users", [
      {
        name: "nova",
        email: "example@example.com",
        password: encryptedPasswordAdmin,
        roles: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "tech",
        email: "example1@example.com",
        password: encryptedPasswordUser,
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
