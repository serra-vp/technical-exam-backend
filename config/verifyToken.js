require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  //exception in login routes
  if (req.path === "/authenticate/login") {
    return next();
  }
  const bearerHeader = req.headers["authorization"];
  if (!bearerHeader) {
    return res.status(401).send({ message: "No token provided" });
  }
  const bearer = bearerHeader.split(" ");
  const bearerToken = bearer[1];
  try {
    const decoded = jwt.verify(bearerToken, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).send({ message: "Invalid token" });
  }
};

module.exports = verifyToken;
