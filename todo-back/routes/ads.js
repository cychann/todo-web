const express = require("express");
const router = express.Router();

router.get("/:params", function (req, res, next) {
  const params = req.params.params;

  res.render("ads", { params });
});

module.exports = router;
