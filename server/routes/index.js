var express = require("express");
const { containerId } = require("../config");
var router = express.Router();
var itemsService = require("../services/itemsService");

router.get("/items", async function (req, res, next) {
  let result = await itemsService.read();
  res.json(result);
});

router.put("/items", async function (req, res, next) {
  let newItem = {
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    isComplete: false,
  };

  const createdItem = await itemsService.create(newItem);

  res.json(createdItem);
});

router.post("/item/:id", async function (req, res, next) {
  let id = req.params.id;
  let updatedItem = req.body;

  let result = await itemsService.update(id, updatedItem);

  res.json(result);
});

router.delete("/item/:id", async function (req, res, next) {
  let id = req.params.id;
  let category = req.query.category;

  await itemsService.delete(id, category);

  res.json(true);
});

module.exports = router;
