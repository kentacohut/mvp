import React from 'react';

const Entry = ({recipe, index, select})=>{
  return(
    <div className="entry" onClick={()=>select(recipe, index)}>
      {recipe}
    </div>
  )
}

export default Entry;