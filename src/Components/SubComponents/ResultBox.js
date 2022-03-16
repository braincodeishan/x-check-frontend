import React from 'react'

const ResultBox = (props) => {
  return (
    <div className='resultBox'>
      <div className="data phoneImage">
        <img src={props.data.image} alt={props.data.name}/>
      </div>
      <div className="data phoneDetails">
        <h5>{props.data.name}</h5>

      </div>
      <div className="data Price">

      </div>


    </div>
  )
}

export default ResultBox