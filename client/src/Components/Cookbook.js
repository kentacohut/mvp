import React from 'react';
import Entry from './Entry.js'
const Cookbook = ({cookbook, select})=>{
 return (
  <div>
  <h2>Your Cookbook</h2>
  {cookbook.map((recipe, index)=>{
    return <Entry 
        key={index} 
        index={index} 
        recipe={recipe}
        select={select}/>
      })}
  </div>
  )
}

export default Cookbook;