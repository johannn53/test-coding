"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class kategories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      kategories.hasOne(models.product, {
        foreignKey: {
          name: "id",
        },
      });
      // define association here
    }
  }
  kategories.init(
    {
      nama: DataTypes.STRING,
      deskripsi: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "kategories",
    }
  );
  return kategories;
};
