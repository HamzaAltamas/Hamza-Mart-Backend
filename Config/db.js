const mongoose = require("mongoose");

function dbConnection() {
  mongoose
    .connect(
      "mongodb+srv://e-commerce:e-commerce@app.tzveal3.mongodb.net/e-commerce?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("db connect");
    });
}

module.exports = dbConnection;
