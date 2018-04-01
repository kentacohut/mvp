import React from 'react';

const Recipe = ({recipe})=>{
  return ( 
    !recipe ? <div>Select a recipe from your cookbook...</div> : 
    <div className="recipeCard">
      <h3>{recipe.name}</h3>
      <h4>Ingredients</h4>
      {recipe.ingredients.map((ingredient)=><div>{ingredient}</div>)}
    </div>
  ) 
}

export default Recipe;