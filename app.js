const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/errorHandler");

require("dotenv").config();

//MIDDLEWARE
app.use(express.static("./public"));
app.use(express.json());

// ROUTES

app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandler);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
