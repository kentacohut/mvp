const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dbURI = `mongodb://localhost:27017/RecipeVault`;

mongoose.connect(dbURI);

const recipeSchema = mongoose.Schema({
    name: {type: String, unique: true},
    directions: String,
    hours: Number,
    mins: Number,
    ingredients: [],
    dietary: String,
    yields: Number,
    image: String,
    originalUrl: String
});

const Recipes = mongoose.model('Recipes', recipeSchema);

function insertMany(array, callback) {
  Recipes.insertMany(array, callback);
}
function insertOne(recipe, callback) {
  Recipes.create(recipe, callback);
}
function findOne(name, callback) {
  Recipes.findOne().where('name').equals(name).exec(callback);
}
function findAll(callback){
  Recipes.find({}, 'name', callback);
}
function close() {
  mongoose.close();
}

exports.findAll = findAll;
exports.insertOne = insertOne;
exports.insertMany = insertMany;
exports.findOne = findOne;
exports.close = close;