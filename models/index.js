const User = require("./User");
const Comment = require("./Comment");
const Post = require("./Post");

User.hasMany(Post, { 
    foreignKe: "user_id"
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
    foreignKey: "user_id",
    onDelete: "cascade"
});

User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "cascade"
});

Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "casacde"
})

module.exports = { User, Post, Comment };