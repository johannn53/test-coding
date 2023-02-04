const { stock, product, kategories } = require("../../models");
const { Sequelize } = require("sequelize");

module.exports = {
  getStock: async (req, res) => {
    // // IF JUST TO SEE RESULT FROM STOCK TABLE
    // const allStock = await stock.findAll();

    const allStock = await stock.findAll({
      attributes: [["stock", "stock"]],
      include: [
        {
          model: product,
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
        },
      ],
      group: ["stock.id"],
    });

    if (allStock.length < 1) {
      return res.status(404).json({
        status: 404,
        message: "no product ready",
      });
    }
    res.status(200).json({
      status: 200,
      message: "success get data",
      response: allStock,
    });
  },
};
