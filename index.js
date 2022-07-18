const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.join(__dirname, "client", "public");
const buildPath = path.join(__dirname, "./client/build");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 5000;

app.use(express.static(buildPath));
console.log(publicPath);
console.log(buildPath);
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
  console.log("Sent:", path);
});

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log(`Server is up on ${port}`);
});
