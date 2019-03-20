"use strict";
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      title: DataTypes.STRING,
      body: DataTypes.TEXT
    },
    { tableName: "posts" }
  );
  Post.associate = function(models) {
    Post.hasMany(models.Comment, {
      foreignKey: "post_id",
      as: "comments"
    });
  };
  return Post;
};
