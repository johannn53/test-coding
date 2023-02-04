const { user } = require("../models");
require("dotenv").config();

const bcrypt = require("bcrypt");

module.exports = {
  getAllUser: async (req, res) => {
    const get = await user.findAll();
    res.status(200).json({
      status: 200,
      message: "Success get data",
      response: get,
    });
  },
  updateUser: async (req, res) => {
    const { id } = req.params;

    const { name = "", email = "", password = "", rePassword = "" } = req.body;
    if (name == "" || email == "" || password == "" || rePassword == "") {
      if (name == "") {
        return res.status(400).json({
          status: 400,
          message: "fill name",
        });
      }
      if (email == "") {
        return res.status(400).json({
          status: 400,
          message: "fill email",
        });
      }
      if (password == "") {
        return res.status(400).json({
          status: 400,
          message: "fill password",
        });
      }
      if (rePassword == "") {
        return res.status(401).json({
          status: 400,
          message: "fill re-entered password",
        });
      }
    }

    //CHECK EMAIL
    const checkEmail = await user.findOne({
      where: {
        email: email,
      },
    });
    if (checkEmail != null) {
      return res.status(409).json({
        status: 409,
        message: "email already exist",
      });
    }

    //CHECK PASSWORD MATCH
    if (password != rePassword) {
      return res.status(400).json({
        status: 400,
        message: "password does not match",
      });
    }

    //ENCRYPT PASSWORD
    const encryptedPassword = bcrypt.hashSync(password, 12);

    //UPDATE
    const update = {
      name: name,
      email: email,
      password: encryptedPassword,
    };
    const saveUpdate = await user.update(update, {
      where: {
        id: id,
      },
    });
    if (!saveUpdate) {
      res.status(500).json({
        status: 500,
        message: "failed update",
      });
    }

    res.status(200).json({
      status: 200,
      message: "success updating",
    });
  },
  deleteUser: async (req, res) => {
    const { id } = req.params;
    const delUser = await user.destroy({
      where: {
        id: id,
      },
    });
    if (!delUser) {
      return res.status(404).json({
        status: 404,
        message: `no account with id ${id} found`,
      });
    }
    res.status(200).json({
      status: 200,
      message: "Success delete user",
    });
  },
};
