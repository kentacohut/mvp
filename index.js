const express = require('express');
const bodyParser = require('body-parser');
const port = 5000;
const app = express();
const db = require('./database/index.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('./client/public'));

app.get('/api/cookbook', (req, res)=>{
  db.findAll((error, recipes)=>{
    if (error) {
      console.log(error);
    } else {
      res.send(recipes);
    }
  })
});

app.get('/api/recipe/get', (req, res)=>{
  let title = req.query.title;
  db.findOne(title, (error, recipe)=>{
    if(error) {
      console.log(error);
    } else {
      res.send(recipe);
    }
  })
});

app.get('/api/recipe/remove', (req, res)=>{
  let title = req.query.title;
  db.removeOne(title, (error, result)=>{
    if(error) {
      console.log(error);
    } else {
      res.send(`Removed recipe!`);
    }
  })
});

app.get('/api/search', (req, res)=>{
  let query = req.query.search;
  console.log(query);
})

app.post('/api/recipe/post', (req, res)=>{
  let post = req.body;
  let recipe = {
    title: post.title,
    directions: post.directions,
    mins: post.mins,
    hours: post.hours,
    ingredients: post.ingredients,
    dietary: post.dietary,
    yields: post.yields,
    image: post.string,
    originalUrl: post.originalUrl
  }
  db.insertOne(recipe, (error)=>{
    if(error){
      console.log(error);
    } else {
      console.log('Saved!');
    }
  });
  res.send('Recipe Received!');
});

app.listen(port, ()=>console.log(`Now listening on port ${port}`));