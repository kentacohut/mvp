import React from 'react';
import Entry from './Entry.js'
const Cookbook = ({cookbook})=>{
 return (
  <div>
  <h2>Your Cookbook</h2>
  {cookbook.map((recipe, index)=>{return <Entry key={index} index={index} recipe={recipe}/>})}
  </div>
  )
}

export default Cookbook;