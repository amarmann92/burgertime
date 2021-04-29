const router = require("express").Router();
const burger = require("../models/burger");

router.get("/", (req, res) => {
  burger.selectAll((dbBurgers) => {
    const burgerData = {
      burgers: dbBurgers,
    };
    res.render("index", burgerData);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.insertOne(["burger_name"], `"${req.body.name}"`, (dbBurger) => {
    res.json(dbBurger);
  });
});

router.put("/api/burgers/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;
  burger.updateOne(condition, { devoured: req.body.devoured }, (dbBurger) => {
    if (dbBurger.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;
  burger.deleteOne(condition, (dbBurger) => {
    if (dbBurger.affectedRows == 0) {
      return res.status(404).end(0);
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
