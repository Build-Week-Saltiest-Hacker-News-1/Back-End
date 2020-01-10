exports.up = function(knex) {
  return knex.schema.createTable("feed", feed => {
    feed.increments();
    feed
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    feed.string("saltyUsername", 500).notNullable();
    feed.integer("saltyRank", 500).notNullable();
    feed.integer("comment_id", 500);
    feed.string("saltyComment", 900).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("feed");
};
