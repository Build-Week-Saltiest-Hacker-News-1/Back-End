const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findById,
  add,
  remove
};

function find() {
  return db("comments");
}
function findById(id) {
  return db("comments").where("user_id", "=", id);
}
function add(comment) {
  return db("comments")
    .insert(comment, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}
function remove(id) {
  return db("comments")
    .where("id", id)
    .del();
}
