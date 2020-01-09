exports.up = function(knex) {
  return knex.schema.createTable("feed", feed => {
    feed.increments();
    feed
      .integer("user_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    feed.string("saltyUsername", 125).notNullable();
    feed.integer("saltyRank").notNullable();
    feed.string("saltyComment", 900).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("feed");
};
