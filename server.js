const mongoose = require("mongoose");
const app = require("./app");

const { DB_HOST, PORT = 4000 } = process.env;

mongoose.set("strictQuery", true);
mongoose.connect(DB_HOST).then(() => {
  // console.log("ПРОЦЕСС:",process.env);
  app.listen(PORT, () => {
    console.log(`Database connection successful`);
  });
}).catch(error => {
  console.log(error.message);
  process.exit(1);
}

);
