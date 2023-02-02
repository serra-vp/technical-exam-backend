const db = require("../config/database");
const argon2 = require("argon2");

const getAllUsers = async () => {
  const users = await db.query("SELECT * FROM users");
  if (users.length === 0) return "No Users found!";
  return users;
};

const getSingleUser = async (params) => {
  const { id } = params;
  const [user] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
  return user || "No User found!.";
};

const createUser = async (params) => {
  const {
    first_name,
    last_name,
    address,
    post_code,
    contact_phone_number,
    email,
    username,
    password,
  } = params;

  //hash the password first
  const hash_password = await argon2.hash(password);

  await db.query(
    "INSERT INTO users(first_name, last_name, address, post_code, contact_phone_number, email, username, password) VALUES (?,?,?,?,?,?,?,?)",
    [
      first_name,
      last_name,
      address,
      post_code,
      contact_phone_number,
      email,
      username,
      hash_password,
    ]
  );

  return "Success! You have successfully created a user";
};

const updateUser = async (params) => {
  const {
    first_name,
    last_name,
    address,
    post_code,
    contact_phone_number,
    email,
    username,
    password,
    id,
  } = params;

  //hash the password first
  const hash_password = await argon2.hash(password);

  await db.query(
    "UPDATE users SET first_name = ?, last_name = ?, address = ?, post_code = ?, contact_phone_number = ?, email = ?, username = ?, password = ? WHERE id = ?",
    [
      first_name,
      last_name,
      address,
      post_code,
      contact_phone_number,
      email,
      username,
      hash_password,
      id,
    ]
  );

  return "Success! You have successfully updated a user";
};

const deleteUser = async (params_data, type) => {
  if (type === "multiple") {
    const users_id = params_data.users_id.split(",").map((x) => parseInt(x));
    const sql_arguments = [users_id];

    const response = await db.query(
      "DELETE FROM users WHERE id IN (?)",
      sql_arguments
    );

    if (response.affectedRows === 0) return "An error has occured!";

    return "Success! You have successfully deleted multiple users";
  }

  const response = await db.query("DELETE FROM users WHERE id = ?", [
    params_data.id,
  ]);
  
  if (response.affectedRows === 0) return "An error has occured!";
  return "Success! You have successfully deleted a user";
};

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
