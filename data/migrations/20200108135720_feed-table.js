exports.up = function(knex) {
  return knex.schema.createTable("feed", feed => {
    feed.increments();
    feed.string("saltyUsername", 125).notNullable();
    feed.integer("saltyRank").notNullable();
    feed.integer("comment_id");
    feed.string("saltyComment", 1500).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("feed");
};
