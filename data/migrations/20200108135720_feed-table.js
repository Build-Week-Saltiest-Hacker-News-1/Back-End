exports.up = function(knex) {
  return knex.schema.createTable("feed", feed => {
    feed.increments();
    feed.string("saltyUsername", 500).notNullable();
    feed.integer("saltyRank").notNullable();
    feed.integer("comment_id");
    feed.string("saltyComment", 900).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("feed");
};
