'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    author: DataTypes.STRING
  }, {tableName: "posts"}
  );
  Post.associate = function(models) {
    Post.hasMany(models.Comment, {
      foreignKey: "post_id",
      as:"comments"
    })
  }
  return Post;
};