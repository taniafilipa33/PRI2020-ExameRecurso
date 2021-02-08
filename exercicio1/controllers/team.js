var Team = require("../models/team");

// Devolve a lista de Publicações
module.exports.listar = () => {
  return Team.find().exec();
};

module.exports.consultar = (id) => {
  return Team.find({ _id: id }).exec();
};

// Devolve a lista de Publicações
module.exports.listarMembro = () => {
  return Team.find().select(" nmembers").exec();
};

//insere novo team
module.exports.insert = function (r) {
  var novoTeam = new Team(r);
  //console.log(novoRecurso);
  return novoTeam.save();
};

module.exports.insertMembers = function (r, com) {
  return Team.updateOne({ _id: r }, { $push: { members: com } });
};

module.exports.removeMember = function (re, id) {
  return Team.updateOne({ _id: re }, { $pull: { members: id } });
};

module.exports.remove = function (re) {
  return Team.remove({ _id: re });
};
