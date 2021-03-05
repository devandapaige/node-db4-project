exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          id: 1,
          recipeName: "Peanut Butter and Jelly",
          chef: "PreK Teacher",
          cuisine: "American",
        },
        {
          id: 2,
          recipeName: "Elvis Sandwich",
          chef: "Elvis Presley",
          cuisine: "American",
        },
        {
          id: 3,
          recipeName: "Banana Honey Sandwich",
          chef: "Sweet Tooth",
          cuisine: "American",
        },
      ]);
    });
};
