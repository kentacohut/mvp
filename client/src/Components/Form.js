import React, {Component} from 'react';

class Form extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      ingredients: '',
      time: '',
      dietary: '',
      instructions: ''
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleDietaryChange = this.handleDietaryChange.bind(this);
    this.handleInstructionsChange = this.handleInstructionsChange.bind(this);
  }

  handleTitleChange(e){
    this.setState({title: e.target.value})
  }

  handleIngredientsChange(e){
    let ingredients = e.target.value;
    this.setState({ingredients: ingredients})
  }

  handleTimeChange(e){
    this.setState({time: e.target.value})
  }

  handleDietaryChange(e){
    this.setState({dietary: e.target.value})
  }

  handleInstructionsChange(e){
    this.setState({instructions: e.target.value})
  }

  render(){
    let recipe = {
            name: this.state.title,
            time: this.state.time,
            ingredients: this.state.ingredients.split(/, ?/),
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
            time: '',
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
          onChange={this.handleTitleChange}/>
        <br/>
        Ingredients:<br/>
        <textarea 
          name="ingredients"
          rows="4"
          cols="50"
          placeholder="Enter ingredients seperated by commas..."
          value={this.state.ingredients}
          onChange={this.handleIngredientsChange}/>
        <br/>
        Directions:<br/>
        <textarea 
          name="directions"
          rows="4"
          cols="50"
          placeholder="Enter cooking instructions..."
          value={this.state.instructions}
          onChange={this.handleInstructionsChange}/>
        <br/>
        Cooking Time:<br/>
        <input 
          type="text" 
          name="time" 
          placeholder="Enter Cooking Time..."
          value={this.state.time}
          onChange={this.handleTimeChange}/>
        <br/>
        Dietary needs?<br/>
        <select 
          name="dietary"
          onChange={this.handleDietaryChange}
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