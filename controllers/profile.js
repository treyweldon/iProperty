const Profile = require('../models/profile');


function index(req, res) {
  //get one profile
  const profile = Profile.getOne(1001);
  res.render('profile/index', { profile: profile,
    title: 'Admin Profile'
});
}
module.exports = {
  index,
};
