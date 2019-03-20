const db = require("./db/models");

// create a new post
db.Post.create({ title: "this is a title", body: "this is a body" })
  .then(post => console.log(post.get({ plain: true })))
  .catch(e => console.log(e));

// create a new comment for post id 1
db.Comment.create({ body: "this is a body", post_id: 1 })
  .then(commetn => console.log(comment.get({ plain: true })))
  .catch(e => console.log(e));

// list all the posts with the comments
db.Post.findAll({ include: [{ model: db.Comment, as: "comments" }] })
  .then(post => post.map(p => console.log(p.get({ plain: true }))))
  .catch(e => console.log(e));
