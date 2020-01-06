exports.seed = function(knex, Promise) {
  return knex("users").insert([
    {
      name: "Joe Biden",
      user: "SaltiestManAlive",
      email: "JoeB@democrats.com",
      password: "bidenrules"
    },
    {
      name: "Hillary Clinton",
      user: "SaltiestWomanAlive",
      email: "HillaryC@sidechick.com",
      password: "billdrools"
    },
    {
      name: "Papa John",
      user: "PapaJohn",
      email: "PizzaKing@bigpapaJ.com",
      password: "pizza4lyfe"
    },
    {
      name: "Donald J Drumpf",
      user: "DonaldJDrumpf",
      email: "PervySage@trump.com",
      password: "obamadrools"
    }
  ]);
};
