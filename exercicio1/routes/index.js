var express = require("express");
var router = express.Router();
var Team = require("../controllers/team");

router.get("/api/teams", function (req, res) {
  Team.listar()
    .then((dados) => res.status(200).jsonp(dados))
    .catch((e) => res.status(500).jsonp({ error: e }));
});

router.get("/api/teams/:id", function (req, res) {
  Team.consultar(req.params.id)
    .then((dados) => res.status(200).jsonp(dados))
    .catch((e) => res.status(500).jsonp({ error: e }));
});

router.get("/api/teams/:id/members/:idMember", function (req, res) {
  Team.listarMembro(req.query.id)
    .then((dados) => res.status(200).jsonp(dados))
    .catch((e) => res.status(500).jsonp({ error: e }));
});

//insere um team
router.post("/api/teams", function (req, res) {
  Team.insert(req.body)
    .then((dados) => res.status(200).jsonp(dados))
    .catch((e) => res.status(500).jsonp({ error: e }));
});

//insere um member
router.post("/api/teams/:id/members", function (req, res) {
  Team.insertMembers(req.params.id, req.body)
    .then((novo) => res.status(200).jsonp(novo))
    .catch((e) => res.status(500).jsonp({ error: e }));
});

//apaga um team
router.delete("/api/teams/:id", function (req, res) {
  Team.remove(req.params.id)
    .then((novo) => res.status(200).jsonp(novo))
    .catch((e) => res.status(500).jsonp({ error: e }));
});

//apaga um membro
router.delete("/api/teams/:id/members/:idMember", function (req, res) {
  Team.removeMember(req.params.id, req.body)
    .then((novo) => res.status(200).jsonp(novo))
    .catch((e) => res.status(500).jsonp({ error: e }));
});
module.exports = router;
