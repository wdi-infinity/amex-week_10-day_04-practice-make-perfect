const db = require("./db/models");

// db.sequelize
//   .sync({ force: true })
//   .then(() => console.log("sync success"))
//   .catch(e => console.log(e));

db.Post.create({ title: "NoTitle", author: "NoOne" })
  .then(post =>
    console.log("creating a post", post.get({ plain: true }))
  )
  .catch(e => {
    console.log(e)});


    db.Comment.create({ body: "This is a body", commenter: "NoOne" ,post_id: 1 })
  .then(comment =>
    console.log("creating a Comment", comment.get({ plain: true }))
  )
  .catch(e => {
    console.log(e)});

    db.Post.findAll({include: [{model: db.comment ,  as:"comments"}]})
    .then(post =>post.map (p => console.log("creating a post", post.get({ plain: true })))
      )
      .catch(e => {
        console.log(e)});