const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("all items from the file");
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("update item from the file");
};

const deleteTask = (req, res) => {
  res.send("delete item from the file");
};
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
