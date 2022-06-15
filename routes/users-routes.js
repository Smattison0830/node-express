const express = require("express");

const userssControllers = require("../controllers/users-controllers");

const router = express.Router();

router.get("/", usersControllers.getUsers);

router.post("/signup", usersControllers.signup);

router.post("/login", usersControllers.login);

module.exports = router;
