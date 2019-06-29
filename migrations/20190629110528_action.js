exports.up = function(knex) {
  return knex.schema.createTable("action", function(tbl) {
    tbl.increments();

    tbl.string("description", 255).notNullable();

    tbl.string("notes", 255).notNullable();

    tbl.boolean("completed");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("action");
};
