//dependencies
const router = require("express").Router();
const { item } = require("../../item");
const { Item } = require("../../models");

// GET all items
router.get("/", async (req, res) => {
  try {
    const itemData = await Item.findAll();
    res.status(200).json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single item
router.get("/:id", async (req, res) => {
  try {
    const itemData = await item.findByPk(req.params.id, {
      //Not sure here
      include: [{ model: Item, through: Item, as: "Item" }],
    });

    if (!itemData) {
      res.status(404).json({ message: "Nothing matches this id" });
      return;
    }

    res.status(200).json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }
});
