const db = require("../config/connection");

module.exports = (sql, values) => {
  return new Promise((resolve, reject) => {
    db.query(sql, values, (error, result) => {
      if (error) reject(error);
      return resolve(result);
    });
  });
};
