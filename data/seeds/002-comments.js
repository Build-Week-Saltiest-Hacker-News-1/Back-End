exports.seed = function(knex) {
  // Inserts seed entries
  return knex("comments").insert([
    {
      user_id: 1,
      saltyUsername: "SaltiestManAlive",
      saltyRank: 100,
      saltyComment: "Trump is too orange!"
    },
    {
      user_id: 2,
      saltyUsername: "SaltiestWomanAlive",
      saltyRank: 99,
      saltyComment: "saltiestManAlive uses bots to increase his Salty Rank!!!"
    },
    {
      user_id: 3,
      saltyUsername: "PapaJohn",
      saltyRank: 98,
      saltyComment:
        "I've had over 40 pizzas in the last 30 days... Stay Tuned, the day of reckoning will come."
    },
    {
      user_id: 4,
      saltyUsername: "DonaldJDrumpf",
      saltyRank: 97,
      saltyComment: "saltiestManAlive isn't orange enough!!!"
    }
  ]);
};
