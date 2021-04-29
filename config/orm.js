const connection = require("./connection");

// Transitions an object into SQL syntax
function objToSql(ob) {
  const arr = [];

  for (const key in ob) {
    const value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

const orm = {
  selectAll: function (tableInput, cb) {
    const queryString = `SELECT * FROM ${tableInput}`;
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: function (tableInput, columns, values, cb) {
    const queryString = `INSERT INTO ${tableInput} (${columns}) VALUES (${values})`;
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  updateOne: function (tableInput, condition, value, cb) {
    let queryString = `UPDATE ${tableInput} SET ${objToSql(value)} `;
    queryString += `WHERE ${condition}`;

    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  deleteOne: function (tableInput, condition, cb) {
    let queryString = `DELETE FROM ${tableInput} WHERE ${condition}`;
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
};

module.exports = orm;
