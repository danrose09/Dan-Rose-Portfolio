const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "client", "public");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 5000;

app.use(express.static("public"));
console.log(publicPath);
app.get("*", (req, res) => {
  try {
    res.sendFile(path.join(publicPath, "index.html"));
    console.log("Sent:", path);
  } catch (error) {
    console.log(error);
    return 1;
  }
});

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log(`Server is up on ${port}`);
});
