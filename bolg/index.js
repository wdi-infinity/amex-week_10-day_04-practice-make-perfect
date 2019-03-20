const db = require('./db/models');

db.Post.create({ title: 'First post', body: 'hello new post'})
.then(post => console.log(post.get({plain: true})))
.catch(e => console.log(e)
);

db.Comment.create({ body: 'first comment', post_id: 1})
.then(post => console.log(post.get({ plain: true})))
.catch(e => console.log(e)
)

