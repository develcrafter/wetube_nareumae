const express = require("express");
const app = express();

const PORT = 5388;

function handleListening() {
  console.log(`Listening on http://localhost:${PORT}`);
}

function handleHome(req, res) {
  console.log("homepage");
  res.send("Hello, this is Home!");
}

app.get("/", handleHome);

function handleProfile(req, res) {
  console.log("profile");
  res.send("this is profile page, maybe.");
}
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
