import React from 'react'
import './Test.css'
import Typewriter from 'typewriter-effect';

const Test = () => {

   
  return (
    <div >
      <h1>
        <Typewriter
  options={{
    strings: ['Hello', 'World'],
    autoStart: true,
    loop: true,
  }}
/>
</h1>
    </div>

        
  )
}

export default Test