const withAuth = (req, res, next) => {
  console.log('5')
  if (!req.session.logged_in) {
    console.log('6')
    res.redirect('/login');

  } else {
    console.log('7')
    next();
  }
};

module.exports = withAuth;
