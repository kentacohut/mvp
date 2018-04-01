import React from 'react';

const Entry = ({recipe, index, select})=>{
  return(
    <div className="entry" onClick={()=>select(recipe, index)}>
      <p>{recipe}</p>
    </div>
  )
}

export default Entry;