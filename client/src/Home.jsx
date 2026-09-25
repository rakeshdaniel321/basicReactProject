import React from 'react'
import { useState } from 'react'
function Home() {
   const [showText,setShowText]=useState(false);
    const toggle=()=>{
        setShowText(!showText);
    };
  return (
   <>
    <div>Home</div>
    <input type={showText?'text':'password'} placeholder='enter your password'/>
    <button onClick={toggle}>{showText?'hide':'show'}</button>
   </>
  )
}

export default Home