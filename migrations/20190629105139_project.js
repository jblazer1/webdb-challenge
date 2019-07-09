exports.up = function(knex) {
  return knex.schema.createTable("project", function(tbl) {
    tbl.increments();

    tbl
      .string("name", 128)
      .unique()
      .notNullable();

    tbl.string("description", 255).notNullable();

    tbl.boolean("completed");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("project");
};
