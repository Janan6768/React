import React from 'react'
import './Style/style.css'

function clickHandler(){
    console.log('Mouse Clicked');
}

function overHandler(){
    console.log('Mouse-Over');
}
export const Event = () => {
  return (
    <div className='container'>
        <img
        src="https://picsum.photos/640/360"
        alt="Changable-Img"
        onMouseOver={overHandler}/>
        <button
        onClick={clickHandler}>
            Click me
        </button>
    </div>
  )
}
