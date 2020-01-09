//dependencies
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
//!dependencies

//middleware
const authenticate = require("../auth/auth-middleware.js");
//!middleware

//router
const authRouter = require("../auth/auth-router.js");
const commentsRouter = require("../comments/comments-router.js");
const userRouter = require("../users/users-router.js");
const feedRouter = require("../feed/feed-router");
//!router

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/dashboard", authenticate, userRouter);
server.use("/api/comments", authenticate, commentsRouter);
server.use("/api/feed", feedRouter, commentsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "API IS WORKING!!", dbenv: process.env.DB_ENV });
});

module.exports = server;
