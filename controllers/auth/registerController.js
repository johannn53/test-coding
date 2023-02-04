const { user } = require("../../models");
const bcrypt = require("bcrypt");

module.exports = {
  userRegister: async (req, res) => {
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

    //CHECK PASSWORD STRENGTH
    if (
      !password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,6}$/)
    ) {
      return res.status(500).json({
        status: 500,
        message:
          "minimum password length is 4 and max 6. Must contain 1 UPPERCASE, 1 LOWERCASE and special characters(!@#$%^)",
      });
    }

    //CHECK rePASSWORD MATCH
    if (password != rePassword) {
      return res.status(401).json({
        status: 401,
        message: "password does not match",
      });
    }

    //ENCRYPTED PASSWORD
    const encryptedPassword = bcrypt.hashSync(password, 10);

    dataRegist = {
      name: name,
      email: email,
      password: encryptedPassword,
      roles: "user",
      createdAt: new Date(),
    };

    const makeUser = await user.create(dataRegist);
    if (makeUser == null) {
      return res.status(500).json({
        status: 500,
        message: "error registering",
      });
    }
    res.status(200).json({
      status: 200,
      message: "Success Register",
    });
  },
};
