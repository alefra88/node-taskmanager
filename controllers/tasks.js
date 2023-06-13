const getAllTasks = (req, res) => {
  res.send("all items from the file");
};

const createTask = (req, res) => {
  res.json(req.body);
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
