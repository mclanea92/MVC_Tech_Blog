// this connects the comments, posts and users together and shows their relationship

const User = require("./User");
const Comment = require("./Comment");
const Post = require("./Post");

User.hasMany(Post, { 
    foreignKey: "post_id"
});

Post.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "cascade"
});

Comment.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "cascade"
});

Comment.belongsTo(Post, {
    foreignKey: "post_id",
    onDelete: "cascade"
});

User.hasMany(Comment, {
    foreignKey: "comment_id",
    onDelete: "cascade"
});

Post.hasMany(Comment, {
    foreignKey: "comment_id",
    onDelete: "casacde"
})

module.exports = { User, Post, Comment };