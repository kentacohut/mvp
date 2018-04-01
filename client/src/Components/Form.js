import React, {Component} from 'react';

class Form extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      ingredients: [],
      ingredientType: '',
      ingredientQuant: '',
      ingredientMeas: '',
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
    let item = {
      type: this.state.ingredientType,
      quant: this.state.ingredientQuant,
      meas: this.state.ingredientMeas
    }
    ingredients.push(item);
    this.setState({
      ingredients: ingredients,
      ingredientType: '',
      ingredientMeas: '',
      ingredientQuant: ''
    })
    console.log(item)
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
            instructions: this.state.instructions,
            dietary: this.state.dietary
          }
    return (
      <div className="entry">
        <h2>Enter Your Recipe</h2>
        <form 
        onSubmit={(event) => {
          this.props.handleSubmit(event, recipe);
          this.setState({
            title: '',
            ingredients: '',
            hours: '',
            mins: '',
            dietary: '',
            instructions: ''
            });
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
            {ingredient.type} {ingredient.quant} {ingredient.meas} 
            <span onClick={()=>{this.handleRemove(index)}}>X</span>
          </div>)}
        <input 
          type="text" 
          name="ingredientType" 
          placeholder="Ingredient..."
          value={this.state.ingredientType}
          onChange={this.handleChange}/>
        <input 
          type="number" 
          name="ingredientQuant" 
          placeholder="Quantity..."
          value={this.state.ingredientQuant}
          onChange={this.handleChange}/>
        <input 
          type="text" 
          name="ingredientMeas" 
          placeholder="Measurement..."
          value={this.state.ingredientMeas}
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