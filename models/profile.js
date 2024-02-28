//Test data
const profiles = [
  {id: 1001, name: 'Trey Weldon' },
  {id: 1002, name: 'Jessica Mendez'},
  {id: 1003, name: 'Ricardo Colon'},
  {id: 1004, name: 'Victor Suarez'}
  
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