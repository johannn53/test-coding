"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("products", [
      {
        kategori_id: 1,
        tahun_keluaran: 2023,
        warna: "hitam",
        harga: 1000000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        kategori_id: 2,
        tahun_keluaran: 2022,
        warna: "biru",
        harga: 700000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        kategori_id: 3,
        tahun_keluaran: 2020,
        warna: "silver",
        harga: 200000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("products", null, {});
  },
};
