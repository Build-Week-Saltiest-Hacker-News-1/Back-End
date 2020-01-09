const db = require("../data/dbConfig.js");

module.exports = {
  findAll,
  findById
};

function findAll() {
  return db("feed");
}
function findById(id) {
  return db("feed").where({ id });
}
