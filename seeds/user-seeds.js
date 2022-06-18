const User = require('../models');

const userData = [{
    username: 'Adam',
    password: 'mclane'

},
{
    username: 'test',
    password: 'testpw'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;