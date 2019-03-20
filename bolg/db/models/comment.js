'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    body: DataTypes.STRING
  }, {tableName: "comments"});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.Post, {
      foreignKey:'post_id',
      onDelete: "CASCADE"
    })
  };
  return Comment;
};