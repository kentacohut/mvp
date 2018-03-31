import React from 'react';

const Entry = ({recipe, index, select})=>{
  return(
    <div onClick={()=>select(recipe, index)}>
    {recipe}
    </div>
  )
}

export default Entry;