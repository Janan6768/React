import { useState } from 'react'
import './App.css'

function App() {
  //add Value
 let [counter, setCounter] = useState(0)
  // let counter = 0;
  const addValue = () => {
    // console.log('clicked', counter);
    // counter = counter + 1, Math.random();
    // counter = counter + 1
    if(counter < 10){
      setCounter(counter + 1)
    }

    }

    //remove value
    const removeValue = () => {
      if(counter > 0){
        setCounter(counter -1)
      }
    }

  return (
    <>
      <h1>Project One</h1>
      <h2>Counter Value : {counter}</h2>

      <button
       className='add'
       onClick={addValue}>Add Value
      </button>
      <button
      className='remove'
      onClick={removeValue}>Remove Value
      </button>
    </>
  )
}

export default App
