import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [lenght, setLenght] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  
  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "~!@#$%^&*(;)_-+={}[]|:`'<>.?/"

    for (let i = 1; i <= lenght; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[lenght,numAllowed,charAllowed,setCharAllowed])

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,33)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  },[lenght, numAllowed, charAllowed,passwordGenerator])
  

  return (
    
    <div className='w-full max-w-md mx-auto shadow-md
    rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-center text-white font-mono text-lg my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
        type="text"
        value={password}
        placeholder='Password'
        className='outline-none w-full py-1 px-3'
        readOnly
        ref={passwordRef}/>
        <button
        onClick={copyToClipboard}
        className='outline-none bg-blue-700 text-white
        px-3 py-0.5 shrink-0 hover:bg-green-700'
        >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
            <input
            type="range"
            min={8}
            max={32}
            value={lenght}
            className='cursor-pointer'
            onChange={(e) => {setLenght(e.target.value)}}
            />
            <label htmlFor="range" >Lenght: {lenght}</label>
          </div>
            <div className='flex items-center gap-x-1'>
              <input
              type="checkbox"
              id='numberInput'
              defaultChecked={numAllowed}
              onChange={() => {
                setNumAllowed((prev) => (!prev))
              }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
              type="checkbox"
              id='charInput'
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => (!prev))
              }}
              />
              <label htmlFor="charInput">Character</label>
            </div>
        </div>
        
      
    </div>
  )
}

export default App
