"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("stocks", [
      {
        product_id: 1,
        stock: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 2,
        stock: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 3,
        stock: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("stocks", null, {});
  },
};
