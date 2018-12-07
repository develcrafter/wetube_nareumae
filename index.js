import express from "express";

const app = express();
const PORT = 5388;

// function handleListening() {
//   console.log(`Listening on http://localhost:${PORT}`);
// }

const handleListening = () =>
  console.log(`Lisgening on: http://localhost:${PORT}`);

// function handleHome(req, res) {
//   console.log("homepage");
//   res.send("Hello, this is Home!");
// }

const handleHome = (req, res) => {
  console.log("homepage");
  res.send("Hello, this is Home!\n Thank you to come here");
};

app.get("/", handleHome);

const handleProfile = (req, res) => res.send("This is profile page, maybe!");

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
