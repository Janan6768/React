import React from 'react'

export const Logo = () => {
  return (
    <div style={{textAlign:'center'}}>
        <img src="image/react-logo.png" alt="React-logo" width={'70px'}/>
        <h1>Fun Facts About React</h1>
        <ul style={{listStyleType:'none',padding:'0', fontSize:'18px', fontFamily:'monospace'}}>
            <li>Was First Released in 2013</li>
            <li>Was originally Created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Power thousands of Enterprise app, including mobile app</li>
        </ul>
    </div>
  )
}



