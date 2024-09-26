import React from 'react'
import RandomImage from './RandomImages'

const Card = ({title="Random Image", btntext="Go Somewhere"}) => {
  return (
    <>
    <div className="col-sm">
      <div className="card" style={{height:"440px"}}>
        <RandomImage />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">{btntext}</a>
      </div>
    </div>
  </div>
    </>
  )
}

export default Card