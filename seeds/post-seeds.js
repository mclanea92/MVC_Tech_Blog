const Post = require('../models');

const postData = [{
    title: 'Test post 1',
    content: 'some test content here',
    user_id: 1

},
{
    title: 'Number 2 test',
    content: 'test test test',
    user_id: 2
},
{
    title: 'hopefully this works test',
    content: 'hello hello hello',
    user_id: 3
}
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;