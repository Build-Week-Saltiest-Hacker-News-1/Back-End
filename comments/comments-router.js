const express = require("express");

const db = require("../data/dbConfig.js");

const Comments = require("./commentsModel.js");

const router = express.Router();

router.get("/", (req, res) => {
  Comments.find()
    .then(comments => {
      res.json(comments);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get comments" });
    });
});

router.post("/", (req, res) => {
  const commentData = req.body;

  Comments.add(commentData)
    .then(comment => {
      res.status(201).json(comment);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to salty comment" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Comments.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find scheme with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete scheme" });
    });
});

module.exports = router;
