const router = require('express').Router();
const { Item } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const itemData = await Item.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(itemData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const itemData = await Item.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!itemData) {
      res.status(404).json({ message: 'No item found with this id!' });


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


module.exports = router;

