import React from 'react';

const Recipe = ({recipe})=>{
  return ( 
    !recipe ? <div>Select a recipe from your cookbook...</div> : 
    <div>
      {recipe.name}
      {recipe.ingredients.map((ingredient)=><div>{ingredient}</div>)}
    </div>
  ) 
}

export default Recipe;