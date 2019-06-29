exports.up = function(knex, Promise) {
  return knex.schema.createTable("project", function(banana) {
    banana.increments();

    banana
      .string("name", 128)
      .notNullable()
      .unique();

    banana.string("description");
    banana.boolean("completed");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("project");
};
