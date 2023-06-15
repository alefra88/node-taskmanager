const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://<alanef88>:<a4969a>@cluster0.3narixn.mongodb.net/taskDB?retryWrites=true&w=majority";

mongoose
  .connect(connectionString)
  .then(() => console.log("CONNECTED TO DATABASE..."))
  .catch((err) => console.log(err));
