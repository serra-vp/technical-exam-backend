require("dotenv").config();

const express = require("express");
const usersRouter = require("./routes/userRoutes");
const authenticateRouter = require("./routes/authenticateRoutes");
const verifyToken  = require("./config/verifyToken");

//Middleware
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Verify token first
app.use(verifyToken);

//User Routes
app.use("/users", usersRouter);
app.use("/authenticate", authenticateRouter);

app.use( ( err, req, res, next ) => {

  const statusCode = err.statusCode || 500;

  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
