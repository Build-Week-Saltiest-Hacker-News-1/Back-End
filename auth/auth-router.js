const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../users/usersModel.js");

//endpoints beginning with /api/auth
router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/login", (req, res) => {
  let { user, password } = req.body;

  Users.findBy({ user })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        // sign token
        const token = signToken(user);
        // send the token
        res.status(200).json({
          id: user.id,
          email: user.email,
          token, // added token as part of the response sent
          message: `Welcome ${user.user}!`
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
//!endpoints beginning with /api/auth

//!create and sign the token
function signToken(user) {
  const payload = {
    user: user.user
  };

  const secret =
    process.env.JWT_SECRET || "Mr. Roboto, I have a secret, Domo Domo.";

  const options = {
    expiresIn: "1h"
  };

  return jwt.sign(payload, secret, options);
}
//!create and sign the token

module.exports = router;
