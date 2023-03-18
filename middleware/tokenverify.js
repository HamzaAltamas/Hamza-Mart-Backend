var jwt = require("jsonwebtoken");

function tokenVerify(req, res, next) {
  //   console.log(req.headers.authorization);
  jwt.verify(req.headers.authorization, "userpass", function (err, decoded) {
    if (err) {
      return res.send("middwire error ");
    }
    if (decoded.name === "Hamza Altamas") {
      //   return res.send(decoded);
      next();
    }
  });
}
module.exports = tokenVerify;
