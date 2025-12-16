const express = require("express");
const router = express.Router();

let users = [];

router.post("/add", (req, res) => {
  console.log("POST HIT ✅");
  console.log(req.body);

  users.push(req.body);

  res.status(201).json({
    message: "User added successfully",
    users: users,
  });
});

// GET – get all users
router.get("/", (req, res) => {
  res.status(200).json({
    message: "All registered users",
    users: users,
  });
});

module.exports = router;
