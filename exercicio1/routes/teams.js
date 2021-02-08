var express = require("express");
const team = require("../models/team");
var router = express.Router();
var Team = require("../controllers/team");

router.get("/", function (req, res, next) {
  Team.listar()
    .then((dados) => {
      res.render("/index", {
        teams: dados,
      });
    })

    .catch((e) => res.render("error", { error: e }));
});
module.exports = router;
