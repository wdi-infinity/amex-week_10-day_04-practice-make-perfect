const db = require("./db/models");

db.sequelize
  .sync({ force: true })
  .then(() => console.log("sync success"))
  .catch(e => console.log(e));

db.Post.create({title: "ahmad", author: "me"})
.then(Post => console.log("creating a post" , Post.get({plain:true})))

.catch(e => {console.log(e)});


db.Comment.create({ body: "I Like it" })
.then(Comment => console.log("creating a Comment" , Comment.get({plain:true})))

.catch(e => {console.log(e)});



db.Post.findAll({ include: [{ model: db.Comment, as: "comments" }] })
  .then(post => post.map(p => console.log(p.get({ plain: true }))))
  .catch(e => console.log(e));