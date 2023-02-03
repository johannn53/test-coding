const { product, stock } = require("../models");
const { Sequelize } = require("sequelize");

module.exports = {
  getAllProduct: async (req, res) => {
    const allProd = await product.findAll();

    // const allProd = await product.findAll({
    //   include: [
    //     {
    //       model: stock,
    //       as: "productId",
    //     },
    //   ],
    // });

    if (allProd.length < 0) {
      return res.status(404).json({
        status: 404,
        message: "no product found",
      });
    }

    res.status(200).json({
      status: 200,
      message: "success get data",
      response: allProd,
    });
  },
};
