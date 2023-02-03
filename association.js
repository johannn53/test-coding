const stock = require("./stock");
const product = require("./product");
const kategories = require("./kategories");

product.hasOne(stock, {
  foreignKey: "product_id",
  as: "stock",
});

stock.belongsTo(product, {
  foreignKey: "product_id",
  as: "product",
});
