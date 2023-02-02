"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  stock.init(
    {
      product_id: DataTypes.INTEGER,
      stock: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "stock",
    }
  );
  stock.associate = function (models) {
    stock.belongsTo(models.product, {
      foreignKey: "product_id",
      as: "product",
    });
  };
  return stock;
};