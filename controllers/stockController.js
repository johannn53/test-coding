const { stock } = require("../models");

module.exports = {
  getStock: async (req, res) => {
    const { id } = req.params;
    const allStock = await stock.countAndFindAll;
  },
};
