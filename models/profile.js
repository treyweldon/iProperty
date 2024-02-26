//Test data
const profiles = [
  {id: 1001, name: 'Trey Weldon', bio:'This is a sample for the admin profile' },
  {id: 1002, name: 'Jessica Mendez', bio:'This is a sample Bio for the admin profile' },
  {id: 1003, name: 'Ricardo Colon', bio:'This is a sample Bio for the admin profile' },
  {id: 1004, name: 'Victor Suarez', bio:'This is a sample Bio for the admin profile' }
  
];
function create(name) {
  profiles.id = Date.now() % 1000000;
  profiles.push(name);
}

 function getAll() {
   return profiles;
 }

function getOne(id) {
  const profile = profiles.find(s => s.id === parseInt(id));
  return profile;
 }

module.exports = {
  create,
  getAll,
  getOne
 };