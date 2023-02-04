"use strict";
const { Model } = require("sequelize");
// const product = require("./product");
module.exports = (sequelize, DataTypes) => {
  class stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      stock.belongsTo(models.product, {
        foreignKey: {
          name: "product_id",
        },
      });
      stock.hasOne(models.product, {
        foreignKey: {
          name: "id",
        },
      });
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
  // stock.belongsTo(product, { foreignKey: "product_id" });

  // stock.associate = function (models) {
  //   // stock.belongsTo(models.product, {
  //   //   foreignKey: {
  //   //     name: "product_id",
  //   //     allowNull: false,
  //   //   },
  //   //   as: "product",
  //   // });
  //   stock.belongsTo(models.product, {
  //     foreignKey: "product_id",
  //     as: "product",
  //   });
  // };
  return stock;
};
