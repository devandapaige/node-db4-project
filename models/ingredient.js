/* - `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
    - in => ./models/ingredient.js */

const db = require("../data/config");

function getShoppingList(recipe_id) {
  return db("ingredients as i");
}

module.exports = {
  getShoppingList,
};
