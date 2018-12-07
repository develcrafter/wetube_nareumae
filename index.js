const express = require("express");
const app = express();

const PORT = 5388;

function handleListening() {
  console.log(`Listening to http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);
