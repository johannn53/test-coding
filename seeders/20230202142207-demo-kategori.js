"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kategories", [
      {
        nama: "macbook pro m1",
        deskripsi: "Macbook dengan chip M1 warna hitam",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "macbook air m2",
        deskripsi: "Macbook tipis dengan chip M2 warna biru",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "ipad pro",
        deskripsi: "tablet dengan ukuran besar yang pas untuk design",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("kategories", null, {});
  },
};
