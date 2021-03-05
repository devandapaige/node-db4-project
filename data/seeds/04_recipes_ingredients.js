exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes_ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes_ingredients").insert([
        //PBJ ingredients: 1,2,3
        {
          recipe_id: 1,
          ingredient_id: 1,
          unit: "slices",
          unitQuantity: 2,
        },
        {
          recipe_id: 1,
          ingredient_id: 2,
          unit: "tablespoon",
          unitQuantity: 2,
        },
        {
          recipe_id: 1,
          ingredient_id: 3,
          unit: "tablespoon",
          unitQuantity: 2,
        },
        //"elvis" ingredients: 1,2,4
        {
          recipe_id: 2,
          ingredient_id: 1,
          unit: "slices",
          unitQuantity: 2,
        },
        {
          recipe_id: 2,
          ingredient_id: 2,
          unit: "tablespoon",
          unitQuantity: 2,
        },
        {
          recipe_id: 2,
          ingredient_id: 4,
          unit: "slices",
          unitQuantity: 6,
        },
        // PB Banana ingredients: 1,2,5,6
        {
          recipe_id: 3,
          ingredient_id: 1,
          unit: "slices",
          unitQuantity: 2,
        },
        {
          recipe_id: 3,
          ingredient_id: 2,
          unit: "tablespoons",
          unitQuantity: 2,
        },
        {
          recipe_id: 3,
          ingredient_id: 5,
          unit: "slices",
          unitQuantity: 6,
        },
        {
          recipe_id: 3,
          ingredient_id: 6,
          unit: "drizzle",
        },
      ]);
    });
};
