import React from 'react'
import ResultList from './ResultList'
const Result = ({result}) => {
  return (
   
    <div className="row justify-content-center">

      {result.map((item) => (
        <ResultList item={item} key={item.id} />
      ))}

    </div>
  )
}

export default Result