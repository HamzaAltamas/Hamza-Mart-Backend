const express = require("express");
const dbConnection = require("./Config/db");
const User = require("./models/userSchema");
const app = express();
const userSchema = require("./models/userSchema");
const tokenVerify = require("./middleware/tokenverify");
var jwt = require("jsonwebtoken");

app.use(express.json());

dbConnection();

// let asd = jwt.sign({ name: "Hamza Altamas" }, "userpass");
// console.log(asd);

app.post("/", async function (req, res) {
  let { name, email } = req.body;
  let user = new User({
    name,
    email,
  });
  let userr = await User.find({ email });
  console.log("Defgws", userr);

  if (userr.length > 0 && req.body.email === userr[0].email) {
    return res.send("already exist");
  } else {
    await user.save();
  }

  var token = jwt.sign({ email: user.email }, "e-commerce");
  console.log(token);
  res.send(user);
});

app.post("/v", async function (req, res) {
  console.log(req.headers.authorization);
  console.log(req.body.email);
  var decoded = jwt.verify(req.headers.authorization, "e-commerce");
  var userr = await User.find({
    email: decoded.email,
    varified: true,
  });
  if (decoded.email !== req.body.email) {
    return res.send("Unauthorized");
  } else if (userr.length > 0 && userr[0].varified === true) {
    res.send("Already verified");
  } else {
    await User.findOneAndUpdate(
      { email: decoded.email },
      {
        varified: true,
      },
      {
        new: true,
      }
    );
    res.send("Successfully verified");
  }
});

app.get("/u", tokenVerify, async function (req, res) {
  let user = await User.find({});
  res.json(user);
});

app.listen(8000);
