import React, {Component} from 'react';
import Result from './Results.js';
import axios from 'axios';
import api from '../api.js';

class Search extends Component{
  constructor(){
    super();
    this.state = {
      recipeSearch: '',
      searchResults: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event, query){
    let that = this;
    event.preventDefault()
    axios.get(`https://api.edamam.com/search?q=${query}&app_id=${api.appID}&app_key=${api.appKey}&to=10`)
    .then((response)=>{
      let recipes = [];
      let results = response.data.hits;
      for (let i=0; i<results.length; i++){
        let recipe = {
          title: results[i].recipe.label,
          directions: results[i].recipe.url,
          hours: Math.floor(results[i].recipe.totalTime/60),
          mins: results[i].recipe.totalTime%60,
          ingredients: results[i].recipe.ingredientLines,
          dietary: results[i].recipe.healthLabels,
          yields: results[i].recipe.yield,
          image: results[i].recipe.image
        }
        recipes.push(recipe);
      }
      that.setState({
        searchResults: recipes
      })
    })
    .catch((error)=>{
      console.log(error);
    })
    this.setState({
      recipeSearch: ''
    })
  }

  handleChange(e){
   this.setState({[e.target.name]: e.target.value})
  }

  render(){
    return (
    <div className="search">
      <h2>Search For A Recipe</h2>
      <form onSubmit={(event)=>{this.handleSearch(event, this.state.recipeSearch)}}>
      <input 
        type="text"
        name="recipeSearch"
        value={this.state.recipeSearch}
        placeholder="Search for a recipe..."
        onChange={this.handleChange}/>
      <input type ="submit"/>
      </form>
      {this.state.searchResults.map((result) => <Result result={result}/>)}
    </div>
    )
  }
}

export default Search;