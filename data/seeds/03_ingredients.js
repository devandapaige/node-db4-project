exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        {
          id: 1,
          ingredient: "bread",
        },
        {
          id: 2,
          ingredient: "peanut butter",
        },
        {
          id: 3,
          ingredient: "jelly",
        },
        {
          id: 4,
          ingredient: "pickles",
        },
        {
          id: 5,
          ingredient: "banana",
        },
        {
          id: 6,
          ingredient: "honey",
        },
      ]);
    });
};
