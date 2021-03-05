/* `getRecipes()`: should return a list of all recipes in the database.
    - in => ./models/recipe.js */
const db = require("../data/config");

function getRecipes() {
  return db("recipes as r");
}

module.exports = {
  getRecipes,
};
