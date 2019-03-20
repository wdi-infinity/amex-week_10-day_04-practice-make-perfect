![practice](https://i0.wp.com/zacharytotah.com/wp-content/uploads/2017/01/Stormtrooper-Practice-Meme.jpg)

# Keep Practice !

build a blog database using sequelize !!

## models

1. Post
2. Comment

## Assocation

posts can have multiple comments ?

# SEQUELIZE GUID

1. Create a new project file

```
mkdir blog
cd blog
```

2. Initiate an npm

```
npm init -y
```

3. Install the project dependencies

```
npm install --save sequelize pg pg-hstore path
```

4. Tell sequelize to create all the files inside db folder

```
mkdir db
touch .sequelizerc
```

5. Edit .sequelizerc file

```
const path = require('path');

module.exports = {
  "config": path.resolve('./db/config', 'config.json'),
  "models-path": path.resolve('./db/models'),
  "seeders-path": path.resolve('./db/seeders'),
  "migrations-path": path.resolve('./db/migrations'),
}
```

6. Generate Sequelize files

```
sequelize init
```

7. make sure that all your files inside the db folders like this

```
db
├── config
│ └── config.json
├── migrations
├── models
│ └── index.js
├── seeders
```

8. update the config file

```
// db/config/config.json

{
  "development": {
  "username": <your username>,
  "password": null,
  "database": "sequelize_demo",
  "host": "127.0.0.1",
  "dialect": "postgres",
  "define": {
        "underscored": true
    }
  },
...
}
```

9. Generate the models

```
// write the commands
```

10. Update the models that sequelize generated:

- Change the table name to make it all lower case `postgres naming conventions`
- Add the assocation

11. update the migration file Change the table name to make it all lower case `postgres naming conventions` and add the assocation field

12. run the migration files

```
write the command
```

13. create an index.js file to write your query

- Create a new post
- Create a new comment
- List all the posts with thier comments

> don't forget to require the modesl before running the queries
> const db = require("./db/models");

14. what is the diffrent between running migration and using ?

```
db.sequelize.sync({force: true})
```
