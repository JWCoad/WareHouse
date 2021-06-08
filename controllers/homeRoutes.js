const router = require('express').Router();
const { User, Item, Category } = require('../models');
const withAuth = require('../utils/auth');


/* Get Items */
router.get('/', withAuth, async (req, res) => {
  try {

    const dbItemData = await Item.findAll({
      attributes: ['id',
        'name',
        'material',
        'color',
        /*  'date_created', */
        'price',
      ],
      order: [
        ['id', 'ASC']
      ],

    });

    const items = dbItemData.map(item => item.get({ plain: true }));

    res.render('homepage', {
      items,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});








/* check user */
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* login page if logged in render home */
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

/* link to signup */
router.get('/signup', (req, res) => {
  res.render('signup');
});

const categoryImageMap = {
  dresses: "./images/dresses.png",
  jackets: "./images/jackets.png",
  pants: "./images/pants.png",
  shoes: "./images/shoes.jpeg",
  tops: "./images/tops.jpeg"

}

router.get("/category", withAuth, async (req, res) => {
  const rawCategories = await Category.findAll();
  const categories = rawCategories.map(item => ({ ...item.get({ plain: true }), imagePath: categoryImageMap[item.name] }))
  res.render("category", { categories, logged_in: req.session.logged_in })
})

router.get("/category/:id", withAuth, async (req, res) => {
  const items = await Item.findAll({
    where: {
      category_id: req.params.id
    }
  })

  const plainItems = items.map((item) => item.get({ plain: true }))
  console.log(plainItems)
  res.render("category-item", { items: plainItems, logged_in: req.session.logged_in })
})


/* link to add-item page */
router.get('/add-item', (req, res) => {
  res.render('add-item', {
    logged_in: req.session.logged_in,
  });
})



module.exports = router;
