const { stock, product } = require("../../models");
const { Sequelize } = require("sequelize");

module.exports = {
  getStock: async (req, res) => {
    // IF JUST TO SEE RESULT FROM STOCK TABLE
    const allStock = await stock.findAll();

    //STOCK + PRODUCT TABLE ()
    // const allStock = await stock.findAll({
    //   include: {
    //     model: product,
    //     as: "product",
    //     where: {
    //       state: Sequelize.col("product.id"),
    //     },
    //   },
    // });

    if (allStock.length < 1) {
      return res.status(404).json({
        status: 404,
        message: "no product ready",
      });
    }

    res.status(200).json({
      status: 200,
      message: "succes get data",
      response: allStock,
    });
  },
};
