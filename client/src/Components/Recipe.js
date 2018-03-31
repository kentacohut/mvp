import React from 'react';

const Recipe = ({current})=>{
  return ( 
    !current ? <div>Select a recipe from your cookbook...</div> : <div>{current}</div>
  ) 
}

export default Recipe;