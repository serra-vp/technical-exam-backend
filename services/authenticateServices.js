require("dotenv").config();
const db = require("../config/database");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const userLogin = async (params) => {
  const username = params.username;
  const password = params.password;

  const username_res = await db.query(
    "SELECT * FROM users WHERE username = ?",
    [username]
  );

  if (username_res.length === 0) {
    return {
      status: 401,
      message: "Incorrect username or password",
    };
  }

  const user = username_res[0];

  const valid = await argon2.verify(user.password, password);
    if (!valid) {
      return {
        status: 401,
        message: "Incorrect username or password",
      };
    }

  try {
    const valid = await argon2.verify(user.password, password);
    if (!valid) {
      return {
        status: 401,
        message: "Incorrect username or password",
      };
    }

    // Generate a JSON Web Token and send it back to the client
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
    return {
      status: 200,
      message: "Successfully login!",
      token: token,
    };
  } catch (err) {
    return {
      status: 500,
      message: "An error occurred",
    };
  }
};

module.exports = {
  userLogin,
};
