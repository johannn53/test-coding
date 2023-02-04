const { product, stock, kategories } = require("../../models");
const { Sequelize } = require("sequelize");

module.exports = {
  getAllProduct: async (req, res) => {
    const allProd = await product.findAll();

    if (allProd.length < 0) {
      return res.status(404).json({
        status: 404,
        message: "no product found",
      });
    }

    res.status(200).json({
      status: 200,
      message: "success get data",
      // response: allProd,
    });
  },

  //ASCENDING PRICE
  getAllProdAsc: async (req, res) => {
    const prodAscending = await product.findAll({
      attributes: [
        ["harga", "harga"],
        ["tahun_keluaran", "tahun_keluaran"],
        ["warna", "warna"],
      ],
      include: [
        {
          model: kategories,
          attributes: [
            ["nama", "nama"],
            ["deskripsi", "deskripsi"],
          ],
        },
      ],
      group: ["product.id"],
      order: [["harga", "asc"]],
    });

    res.status(200).json({
      status: 200,
      message: "success get data",
      response: prodAscending,
    });
  },
};
