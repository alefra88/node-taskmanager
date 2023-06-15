const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const bodyParser = require("body-parser");
const connectDB = require("./db/connect");

//MIDDLEWARE
app.use(express.json());
app.use(bodyParser.json());

// ROUTES
app.get("/hello", (req, res) => {
  res.send("task manager app uwu");
});

app.use("/api/v1/tasks", tasks);

const port = 3000;

const start = async () => {
  try {
    await connectDB();
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
