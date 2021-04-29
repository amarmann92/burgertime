const orm = require("../config/orm");

const burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  insertOne: function (columns, values, cb) {
    orm.insertOne("burgers", columns, values, function (res) {
      cb(res);
    });
  },
  updateOne: function (condition, value, cb) {
    orm.updateOne("burgers", condition, value, function (res) {
      cb(res);
    });
  },
  deleteOne: function (condition, cb) {
    orm.deleteOne("burgers", condition, function (res) {
      cb(res);
    });
  },
};

module.exports = burger;
