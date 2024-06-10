const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to VSP's EC2 Instance app");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
