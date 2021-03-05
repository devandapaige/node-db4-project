const db = require("../data/config");

function find() {
  return db("ingredients as i");
}

function findById(id) {
  return db("ingredients as i");
}

module.exports = {
  find,
  findById,
};
