const connection = require("../config/database");
const getAllUsers = async () => {
  let [results, fields] = await connection.query("SELECT * FROM Users");
  return results;
};

const getUserById = async (userID) => {
  let [results, fields] = await connection.query(
    "SELECT * FROM Users where id = ?",
    [userID]
  ); // lấy dữ liệu từ db
  let user = results && results.length > 0 ? results[0] : {}; // lấy dữ liệu user từ results
  return user;
};
const updateUserById = async (email, name, city, userId) => {
  let [results, fields] = await connection.query(
    `
    UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?
    `,
    [email, name, city, userId]
  );
};
const deleteUserById = async (userID) => {
  let [results, fields] = await connection.query(
    "DELETE FROM Users WHERE id = ?",
    [userID]
  );
};
module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
