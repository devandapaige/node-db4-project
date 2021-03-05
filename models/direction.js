/* - `getDirections(recipe_id)`: should return a list of step by step instructions for preparing a recipe
    - in => ./models/ingredient.js  */
const db = require("../data/config");

function getDirections(recipe_id) {
  return db("directions as d")
    .innerJoin("recipes as r", "r.id", "d.recipe_id")
    .where("d.recipe_id", recipe_id)
    .select("r.recipeName", "d.stepNum", "d.direction");
}

module.exports = {
  getDirections,
};
