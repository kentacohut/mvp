import React from 'react';

const Recipe = ({recipe, remove, recipeIndex, search, save})=>{
  return ( 
    !recipe ? <div>Select a recipe from your cookbook...</div> : 
    <div className="recipeCard">
      <h3>{recipe.title}</h3>
      <h4>Ingredients</h4>
      {recipe.ingredients.map((ingredient, index)=><div key={index}>- {ingredient}</div>)}
      <h4>Total Time</h4>
      {recipe.hours ? recipe.hours + ' hrs' : ''} {recipe.mins ? recipe.mins + ' mins' : ''}
      <h4>Directions</h4>
      {recipe.directions}
      {!search ?
        <div className="removeRecipe" onClick={()=>remove(recipeIndex, recipe.title)}>Remove Recipe</div> :
        <div className="saveRecipe" onClick={()=>save(recipe)}>Save Recipe</div>
      }
    </div>
  ) 
}

export default Recipe;