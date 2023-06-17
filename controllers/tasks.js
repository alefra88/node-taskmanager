const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = async (req, res) => {
  try {
    const task = await Task.findById({ id: req.params.id });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
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
