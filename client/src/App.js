import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form.js';
import Search from './Components/Search.js';
import Recipe from './Components/Recipe.js';
import Cookbook from './Components/Cookbook.js';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cookbook: [],
      selected: null,
      selectedIndex: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRecipeSelect = this.handleRecipeSelect.bind(this);
    this.handleRemoveRecipe = this.handleRemoveRecipe.bind(this);
  }

  componentDidMount(){
    this.getRecipes();
  }

  getRecipes(){
    let recipes = [];
    let that = this;
    axios.get('/api/cookbook')
    .then((response)=>{
      console.log(response.data);
      for(let i = 0; i < response.data.length; i++) {
        recipes.push(response.data[i].title);
      }
      that.setState({
        cookbook: recipes
      })
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  handleSubmit(recipe){
    console.log(recipe);
    let that = this;
    axios.post('/api/recipe/post', recipe)
    .then((response)=>{
      that.getRecipes();
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  handleRecipeSelect(title, index){
    console.log(title, index);
    let that = this;
    axios.get('/api/recipe/get', {
      params: {
        title: title
      }
    })
    .then((response)=>{
      that.setState({
        selected: response.data,
        selectedIndex: index
      });
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  handleRemoveRecipe(index, title){
    let that = this
    if (window.confirm('This will permanently remove the recipe.')) {
      axios.get('/api/recipe/remove', {
        params: {
          title: title
        }
      })
      .then((response)=>{
        console.log(response);
        that.setState({
          selected: null,
          selectedIndex: null
        });
        that.getRecipes();
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header"> 
          <div className="logo"></div>
          <div className="title">RecipeVault</div>
        </div>
        <div className="top">
        <Search />
        <Form 
          handleSubmit={this.handleSubmit}/>
        <Cookbook 
          className="cookbook"
          cookbook={this.state.cookbook} 
          select={this.handleRecipeSelect}/>
        </div>
        <div className="display">
          <Recipe 
            recipe={this.state.selected}
            remove={this.handleRemoveRecipe}
            recipeIndex={this.state.selectedIndex}/>
        </div>
      </div>
    );
  }
}

export default App;
