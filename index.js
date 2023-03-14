const express = require("express");
const app = express();

app.get("/", function (req, res) {
  let data = [
    {
      name: "hamza",
    },
    {
      name: "altamas",
    },
  ];
  res.send(data);
});

app.listen(8000);
