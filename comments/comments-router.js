const express = require("express");

const Comments = require("./commentsModel.js");

const router = express.Router();

router.get("/:id", (req, res) => {
  let id = req.params.id;
  Comments.findById(id)
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
      res.status(201).json(commentData);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to save salty comment" });
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
          .json({ message: "Could not find comment with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete comment" });
    });
});

module.exports = router;
