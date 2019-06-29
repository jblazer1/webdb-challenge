exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", function(apple) {
    apple.increments();

    apple.string("description").notNullable();
    apple.string("notes").notNullable();
    apple.boolean("completed");

    apple
      .integer("project_id")
      .unsigned()
      .references("id")
      .inTable("project")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
