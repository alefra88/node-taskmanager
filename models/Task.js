const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

model.exports = mongoose.model("Task", TaskSchema);
