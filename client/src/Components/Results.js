import React from 'react';

const Result = ({result, select})=>{
  return (<div className="result" onClick={()=>{select(result)}}><p>{result.title}</p></div>)
}

export default Result;