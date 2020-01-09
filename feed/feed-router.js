// const axios = require("axios");

const router = require("express").Router();

const Feed = require("./feedModel.js");

router.get("/", (req, res) => {
  //when DS api becomes available this will be useful.//

  //   const requestOptions = {
  //     headers: { accept: "application/json" }
  //   };

  //   axios
  //     .get("https://hacker-news.firebaseio.com/v0/user", requestOptions)
  //     .then(response => {
  //       res.status(200).json(response.data.results);
  //     })
  //     .catch(err => {
  //       res.status(500).json({ message: "Error Fetching Comments", error: err });
  //     });

  Feed.findAll()
    .then(feed => {
      res.json(feed);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get feed" });
    });
});

router.get("/:id", (req, res) => {
  Feed.findById(req.params.id)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get specific user" });
    });
});

module.exports = router;
