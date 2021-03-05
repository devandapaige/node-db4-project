exports.up = async function (knex) {
  await knex.schema.createTable("recipes", (table) => {
    table.increments("id");
    table.text("recipeName").notNull();
    table.text("chef");
    table.text("cuisine");
  });
  await knex.schema.createTable("directions", (table) => {
    table.increments("id");
    table
      .integer("recipe_id")
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE");
    table.integer("stepNum");
    table.text("direction").notNull();
  });
  await knex.schema.createTable("ingredients", (table) => {
    table.increments("id");
    table.text("ingredient").notNull();
  });
  await knex.schema.createTable("recipes_ingredients", (table) => {
    table.integer("recipe_id").references("id").inTable("recipes").notNull();
    table
      .integer("ingredient_id")
      .references("id")
      .inTable("ingredients")
      .notNull();
    table.text("unit");
    table.integer("unitQuantity");
    table.primary(["recipe_id", "ingredient_id"]);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("recipes_ingredients");
  await knex.schema.dropTableIfExists("ingredients");
  await knex.schema.dropTableIfExists("directions");
  await knex.schema.dropTableIfExists("recipes");
};
