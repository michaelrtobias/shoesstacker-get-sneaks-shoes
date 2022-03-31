const SneaksAPI = require("sneaks-api");

module.exports = async function (body) {
  const { keyword, limit } = body;
  const sneaks = new SneaksAPI();
  sneaks.getProducts(keyword, limit, function (err, product) {
    if (err) {
      throw err;
      console.log(err);
    } else {
      console.log(product);
      results = product;
    }
  });
  console.log(results);
  return results;
};
