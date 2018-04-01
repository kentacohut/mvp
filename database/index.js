const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const sample = require('./sampleapi.json')

const dbURI = `mongodb://localhost:27017/RecipeVault`;

mongoose.connect(dbURI);

const recipeSchema = mongoose.Schema({
    title: {type: String, unique: true},
    directions: String,
    hours: Number,
    mins: Number,
    ingredients: [],
    dietary: String,
    yields: Number,
    image: String,
});

const Recipes = mongoose.model('Recipes', recipeSchema);

function insertOne(recipe, callback) {
  Recipes.create(recipe, callback);
}
function findOne(title, callback) {
  Recipes.findOne().where('title').equals(title).exec(callback);
}
function findAll(callback){
  Recipes.find({}, 'title', callback);
}
function removeOne(title, callback){
  Recipes.remove({'title': title}, callback);
}
function close() {
  mongoose.close();
}

// let test = sample.hits
// for(let i=0; i<test.length; i++){
//   let recipe = {
//     title: test[i].recipe.label,
//     directions: test[i].recipe.url,
//     hours: Math.floor(test[i].recipe.totalTime/60),
//     mins: test[i].recipe.totalTime%60,
//     ingredients: test[i].recipe.ingredientLines,
//     dietary: test[i].recipe.healthLabels,
//     yields: test[i].recipe.yield,
//     image: test[i].recipe.image
//   }
//   insertOne(recipe, (error, result)=>{
//     if(error){
//       console.log(error);
//     } else {
//       console.log('Success!');
//     }
//   })
// }

exports.findAll = findAll;
exports.insertOne = insertOne;
exports.findOne = findOne;
exports.removeOne = removeOne;
exports.close = close;