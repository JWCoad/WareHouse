const router = require('express').Router();
const { User, Item } = require('../models');
const withAuth = require('../utils/auth');


/* Get Items */
router.get('/', withAuth, async (req, res) => {
  try {

    const dbItemData = await Item.findAll({
      attributes: ['id',
        'name',
        'material',
        'color',
        'date_created',
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








/* User login */

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

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


router.get('/signup', (req, res) => {
  res.render('signup');
});




module.exports = router;
