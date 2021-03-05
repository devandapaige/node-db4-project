/* - `getDirections(recipe_id)`: should return a list of step by step instructions for preparing a recipe
    - in => ./models/ingredient.js  */
const db = require("../data/config");

function getDirections(recipe_id) {
  return db("directions as d");
}

module.exports = {
  getDirections,
};
