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
      if (password != rePassword) {
        return res.status(401).json({
          status: 401,
          message: "wrong password / username",
        });
      }

      //CHECK EMAIL EXIST
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
      function validatePassword(password) {
        let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/;
        return pattern.test(password);
      }
      if (!password.match(validatePassword)) {
        return res.status(400).json({
          status: 400,
          message:
            "password must be minimum 5 characters, contain 1 uppercase, 1 lowercase, 1  special character, 1 number",
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
    }
    res.status(200).json({
      status: 200,
      message: "success register",
    });
  },
};
