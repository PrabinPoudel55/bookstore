const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./config/db");

connectDB().then(() => {
  console.log("Connection test passed — closing.");
  process.exit(0);
});
