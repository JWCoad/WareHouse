const router = require('express').Router();
const { Item } = require('../../models');


/* get all items */
router.get('/', (req, res) => {
    Item.findAll({
        attributes: ['id',
            'name',
            'material',
            'color',
            'price',
        ],
        order: [
            ['id', 'ASC']
        ],

    })
        .then(dbItemData => res.json(dbItemData.reverse()))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

});


/* get by id */
router.get('/:id', (req, res) => {
    Item.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id',
            'name',
            'material',
            'color',
            'price',
        ],

    })
        .then(dbItemData => {
            if (!dbItemData) {
                res.status(404).json({ message: 'No item found with this id' });
                return;
            }
            res.json(dbItemData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});



/* add items */
router.post('/', (req, res) => {
    Item.create({
        name: req.body.name,
        material: req.body.material,
        color: req.body.color,
        price: req.body.price

    })

        .then(dbItemData => {
            req.save(() => {
                req.body.name = dbItemData.name;
                req.body.material = dbItemData.material;
                req.body.color = dbItemData.color;
                req.body.price = dbItemData.price;

                res.json(dbItemData);

            });
        })

    res.redirect('/');
});



/* delete items */
router.delete('/:id', (req, res) => {
    Item.destroy({
        where: {
            id: req.params.id
        },

    }).then(dbItemData => {
        if (!dbItemData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbItemData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;
