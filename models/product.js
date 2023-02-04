"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      product.hasOne(models.stock, {
        foreignKey: {
          name: "id",
        },
      });
      product.hasMany(models.stock, {
        foreignKey: {
          name: "id",
        },
      });
      product.belongsTo(models.kategories, {
        foreignKey: {
          name: "kategori_id",
        },
      });
      // define association here
    }
  }
  product.init(
    {
      kategori_id: DataTypes.INTEGER,
      tahun_keluaran: DataTypes.STRING,
      warna: DataTypes.STRING,
      harga: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  // product.associate = function (models) {
  //   product.belongsTo(models.kategories, {
  //     foreignKey: "kategori_id",
  //     as: "kategori",
  //   });
  //   //   product.hasOne(models.stock, {
  //   //     foreignKey: {
  //   //       name: "product_id",
  //   //       allowNull: false,
  //   //     },
  //   //     as: "productId",
  //   //   });
  //   product.hasOne(models.stock, {
  //     foreignKey: "product_id",
  //     as: "stock",
  //   });
  // };
  return product;
};
