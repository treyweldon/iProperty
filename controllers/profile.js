const Profile = require('../models/profile');

function index(req, res) {
  const profile = Profile.getOne(1004);
  res.render('profile/index', { profile: profile,
    title: 'Admin Profile'
});
}
module.exports = {
  index,
};

