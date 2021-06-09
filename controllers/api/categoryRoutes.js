const router = require('express').Router();
const { Category } = require('../../models');
router.get('/:id', async (req, res) => {
    try {
        const getItem = await Category.findOne({
            where: {
                id: req.params.id
            }
        })

        if (!getItem) {
            res.status(404).json({ message: 'No item found with this id' });
            return;
        }
        res.json(getItem);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;