const { kategories } = require("../../models");
const sequelize = require("sequelize");
const { Op } = require("sequelize");

module.exports = {
  getKategori: async (req, res) => {
    const getData = await kategories.findAll();
    if (getData.length < 1) {
      return res.status(404).json({
        status: 404,
        message: "no data found",
      });
    }
    res.status(200).json({
      status: 200,
      message: "success get data",
      response: getData,
    });
  },
  kategoriById: async (req, res) => {
    const { id } = req.params;
    const getdata = await kategories.findOne({
      where: {
        id: id,
      },
    });
    if (!getdata) {
      return res.status(404).json({
        status: 404,
        message: `kategori with id ${id} not found`,
      });
    }
    res.status(200).json({
      status: 200,
      message: `success get kategori with id ${id}`,
      response: getdata,
    });
  },
  kategoriByName: async (req, res) => {
    const { name } = req.query;
    const searchTerm = req.query.name.toLowerCase();

    const getData = await kategories.findAll({
      where: sequelize.where(sequelize.fn("lower", sequelize.col("nama")), {
        [Op.like]: "%" + searchTerm.toLowerCase() + "%",
      }),
    });

    //BLANK REQ FORM
    if (name == "") {
      return res.status(400).json({
        status: 400,
        message: "fill name to search",
      });
    }

    //NO PRODUCT FOUND
    if (getData.length < 1) {
      return res.status(404).json({
        status: 404,
        message: `no product with name ${name} exist`,
      });
    }

    res.status(200).json({
      status: 200,
      message: "success get data",
      response: getData,
    });
  },
};
