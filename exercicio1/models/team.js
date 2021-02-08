const mongoose = require("mongoose");

var Member = new mongoose.Schema({
  id: String,
  name: Number,
  course: String,
  scores: [Number],
});

var teamSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  guid: String,
  team: String,
  pitch1: Boolean,
  pitch2: Boolean,
  techPitch: Boolean,
  businessReport: Boolean,
  techReport: Boolean,
  members: [Member],
});

module.exports = mongoose.model("team", teamSchema);
