const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.join(__dirname, "client", "public");
const buildPath = path.join(__dirname, "client");

const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "/client")));

console.log(buildPath);
if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
    console.log("Sent:", path);
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}
app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log(`Server is up on ${port}`);
});
