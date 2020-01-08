const Users = require("./usersModel.js");
const db = require("../data/dbConfig.js");

describe("users model", function() {
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("insert()", function() {
    it("should insert the user to the database", async function() {
      await Users.add({
        name: "Gillfoyl",
        user: "AntonRules",
        email: "Gillfoyl@pp.com",
        password: "DineshSucks"
      });
      const users = await db("users");
      expect(users).toHaveLength(1);
    });
    it("should add two different users to the database", async function() {
      await Users.add({
        name: "Jared",
        user: "JaredD",
        email: "Jared@pp.com",
        password: "lovePP"
      });
      await Users.add({
        name: "Richard",
        user: "PiedPRules",
        email: "Richard@pp.com",
        password: "piedpiper"
      });

      const multiUsers = await db("users");
      expect(multiUsers).toHaveLength(2);
      expect(multiUsers[1].name).toBe("Richard");
    });
  });
});
