import React, {Component} from 'react';

class Form extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      ingredients: [],
      ingredientText: '',
      hours: '',
      mins: '',
      dietary: '',
      instructions: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleIngredientsAdd = this.handleIngredientsAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleChange(e){
   this.setState({[e.target.name]: e.target.value})
  }

  handleIngredientsAdd(){
    let ingredients = this.state.ingredients;
    if(this.state.ingredientText){
      ingredients.push(this.state.ingredientText);
      this.setState({
        ingredients: ingredients,
        ingredientText: ''
      })
    } else {
      alert('You cannot add nothing!')
    }
  }

  handleRemove(index){
    let ingredients = this.state.ingredients
    ingredients.splice(index, 1);
    this.setState({
      ingredients: ingredients
    })
  }

  render(){
    let recipe = {
            title: this.state.title,
            hours: this.state.hours,
            mins: this.state.mins,
            ingredients: this.state.ingredients,
            directions: this.state.instructions,
            dietary: this.state.dietary
          }
    return (
      <div className="form">
        <h2>Enter Your Recipe</h2>
        <form 
        onSubmit={(event) => {
          event.preventDefault();
          if(!this.state.title){
            alert('Enter a recipe title!');
          } else if (this.state.ingredients < 1) {
            alert('Add some ingredients!');
          } else if (!this.state.instructions) {
            alert('Add some directions!');
          } else {
            this.props.handleSubmit(recipe);
            this.setState({
              title: '',
              ingredients: [],
              hours: '',
              mins: '',
              dietary: '',
              instructions: ''
              });
          }
        }}>
        Recipe Title:<br/>
        <input 
          type="text" 
          name="title" 
          placeholder="Enter Recipe Title..."
          value={this.state.title}
          onChange={this.handleChange}/>
        <br/>
        Ingredients:<br/>
        {this.state.ingredients.map((ingredient, index) =>
          <div key={index}>
            {ingredient}
            <span 
              className="removeIngredient"
              onClick={()=>{this.handleRemove(index)}}> - X</span>
          </div>)}
        <input 
          type="text" 
          name="ingredientText" 
          placeholder="Ingredient..."
          value={this.state.ingredientText}
          onChange={this.handleChange}/>
        <br/>
        <button type="button" onClick={this.handleIngredientsAdd}>Add Ingredient</button>
        <br/>
        Directions:<br/>
        <textarea 
          name="instructions"
          rows="4"
          cols="50"
          placeholder="Enter cooking instructions..."
          value={this.state.instructions}
          onChange={this.handleChange}/>
        <br/>
        Cooking Time:<br/>
        <input 
          type="number" 
          name="hours" 
          placeholder="Hours..."
          value={this.state.hours}
          onChange={this.handleChange}/>
        <input 
          type="number" 
          name="mins" 
          placeholder="Minutes..."
          value={this.state.mins}
          onChange={this.handleChange}/>
        <br/>
        Dietary needs?<br/>
        <select 
          name="dietary"
          onChange={this.handleChange}
          value={this.state.dietary}>
          <option value="null">None</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="gluten-free">Gluten-Free</option>
          <option value="low-carb">Low-Carb</option>
        </select>
        <br/>
        <input type="submit" />
        </form>
      </div>
    )
  }
}

export default Form;