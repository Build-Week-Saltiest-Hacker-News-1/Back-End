exports.seed = function(knex) {
  // Inserts seed entries
  return knex("feed").insert([
    {
      user_id: 1,
      saltyUsername: "saltyuser1",
      saltyRank: 100,
      saltyComment: "SALTY MUCH?!?! "
    },
    {
      user_id: 2,
      saltyUsername: "saltyuser2",
      saltyRank: 99,
      saltyComment:
        "Either way, it’s my new favorite word. So don’t get all up in my face or you’ll be hit with some salt."
    },
    {
      user_id: 3,
      saltyUsername: "saltyuser3",
      saltyRank: 98,
      saltyComment:
        "I've had over 40 pizzas in the last 30 days... Stay Tuned, the day of reckoning will come."
    },
    {
      user_id: 4,
      saltyUsername: "saltyuser4",
      saltyRank: 97,
      saltyComment: "Stay salty nerds!"
    }
  ]);
};
