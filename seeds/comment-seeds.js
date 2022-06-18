

const Comment = require('../models');

const commentData = [{
    comment_text: "Test Comment 1",
    user_id: 1,
    post_id: 1
},
{
    comment_text: "comment test 2",
    user_id: 2,
    post_id: 2
},
{
    comment_text: "i wonder if this comment will work",
    user_id: 3,
    post_id: 3
}
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;