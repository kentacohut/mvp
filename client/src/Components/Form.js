import React, {Component} from 'react';

class Form extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: null,
      ingredients: null,
      time: null,
      dietary: null
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleDietaryChange = this.handleDietaryChange.bind(this);
  }

  handleTitleChange(e){
    this.setState({title: e.target.value})
  }

  handleIngredientsChange(e){
    this.setState({ingredients: e.target.value.split(/, ?/)})
  }

  handleTimeChange(e){
    this.setState({time: e.target.value})
  }

  handleDietaryChange(e){
    this.setState({dietary: e.target.value})
  }

  render(){
    let recipe = {
      name: this.state.title,
      directions: 'String',
      time: this.state.time,
      ingredients: this.state.ingredients,
      dietary: this.state.dietary,
      yields: 15,
      image: 'String',
      originalUrl: 'String'
    }
    return (
      <div 
        className="entry" 
        onSubmit={(event) => {

          this.props.handleSubmit(event, recipe)
        }}>
        <form>
        Recipe Title:<br/>
        <input 
          type="text" 
          name="title" 
          placeholder="Enter Recipe Title..."
          onChange={this.handleTitleChange}/>
        <br/>
        Ingredients:<br/>
        <textarea 
          name="ingredients"
          rows="4"
          cols="50"
          placeholder="Enter ingredients seperated by commas..."
          onChange={this.handleIngredientsChange}/>
        <br/>
        Cooking Time:<br/>
        <input 
          type="text" 
          name="time" 
          placeholder="Enter Cooking Time..."
          onChange={this.handleTimeChange}/>
        <br/>
        Dietary needs?<br/>
        <select 
          name="dietary"
          onChange={this.handleDietaryChange}>
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