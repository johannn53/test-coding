const { user } = require("../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secretKey = process.env.SECRET_KEY_JWT;

module.exports = {
  loginUser: async (req, res) => {
    const { name = "", password = "" } = req.body;
    if (name == "" || password == "") {
      if (name == "") {
        return res.status(500).json({
          status: 500,
          message: "fill name",
        });
      }
      if (password == "") {
        return res.status(500).json({
          status: 500,
          message: "fill password",
        });
      }
    }

    //CHECK USER EXIST
    const data = await user.findOne({
      where: {
        name: name,
      },
    });
    if (!data) {
      return res.status(404).json({
        status: 404,
        message: "account not found",
      });
    }

    //CHECK PASSWORD MATCH
    if (password != data.dataValues.password) {
      return res.status(403).json({
        status: 403,
        message: "wrong name / password",
      });
    }

    //MAKE TOKEN
    const accessToken = jwt.sign(
      {
        id: data.id,
        name: data.name,
        roles: data.roles,
        type: "access_token",
      },
      secretKey,
      { expiresIn: "5m" }
    );

    const refreshToken = jwt.sign(
      {
        id: data.id,
        name: data.name,
        roles: data.roles,
        type: "refresh_token",
      },
      secretKey,
      { expiresIn: "3d" }
    );

    res.status(200).json({
      status: 200,
      message: "success login",
      id: data.id,
      access_token: accessToken,
      refresh_token: refreshToken,
    });
  },
  getAll: async (req, res) => {
    const get = await user.findAll();
    res.status(200).json({
      status: 200,
      message: "ok",
      response: get,
    });
  },
};
