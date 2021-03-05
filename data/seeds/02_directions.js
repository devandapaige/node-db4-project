exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("directions")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("directions").insert([
        {
          id: 1,
          recipe_id: 1,
          stepNum: 1,
          direction: "Spread peanut butter on one slice of the bread.",
        },
        {
          id: 2,
          recipe_id: 1,
          stepNum: 2,
          direction: "Spread jelly on the other slice of the bread.",
        },
        {
          id: 3,
          recipe_id: 1,
          stepNum: 3,
          direction:
            "Put the two slices of bread together with the peanut butter and jelly on the inside.",
        },
        {
          id: 4,
          recipe_id: 1,
          stepNum: 4,
          direction: "Cut on a diagonal and enjoy.",
        },
        {
          id: 5,
          recipe_id: 2,
          stepNum: 1,
          direction: "step 1",
        },
        {
          id: 6,
          recipe_id: 2,
          stepNum: 2,
          direction: "step 2",
        },
        {
          id: 7,
          recipe_id: 2,
          stepNum: 3,
          direction: "step 3",
        },
        {
          id: 8,
          recipe_id: 2,
          stepNum: 4,
          direction: "step 4",
        },
        {
          id: 9,
          recipe_id: 3,
          stepNum: 1,
          direction: "step 1 - PB",
        },
        {
          id: 10,
          recipe_id: 3,
          stepNum: 2,
          direction: "step 2 - honey",
        },
        {
          id: 11,
          recipe_id: 3,
          stepNum: 3,
          direction: "step 3 - together",
        },
        {
          id: 12,
          recipe_id: 3,
          stepNum: 4,
          direction: "step 4 - eat",
        },
      ]);
    });
};
