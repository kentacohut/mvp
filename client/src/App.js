import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form.js';
import Recipe from './Components/Recipe.js';
import Cookbook from './Components/Cookbook.js';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cookbook: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRecipeSelect = this.handleRecipeSelect.bind(this);
  }

  componentDidMount(){
    this.getRecipes();
  }

  getRecipes(){
    let recipes = [];
    let that = this;
    axios.get('/api/cookbook')
    .then((response)=>{
      for(let i = 0; i < response.data.length; i++) {
        recipes.push(response.data[i].name);
      }
      that.setState({
        cookbook: recipes
      })
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  handleSubmit(event, recipe){
    let that = this;
    console.log(recipe)
    event.preventDefault();
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
  }

  render() {
    return (
      <div className="App">
        <div className="App-header"> 
          <h1>RecipeVault</h1>
        </div>
        <div className="top">
        <Form handleSubmit={this.handleSubmit}/>
        <Cookbook cookbook={this.state.cookbook} select={this.handleRecipeSelect}/>
        </div>
        <Recipe />
      </div>
    );
  }
}

export default App;
