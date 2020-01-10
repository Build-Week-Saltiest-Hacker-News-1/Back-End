exports.up = function(knex) {
  return knex.schema.createTable("comments", comments => {
    comments.increments();
    comments
      .integer("user_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    comments.string("saltyUsername", 500).notNullable();
    comments.integer("comment_id", 500);
    comments.integer("saltyRank", 500).notNullable();
    comments.string("saltyComment", 900).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("comments");
};
