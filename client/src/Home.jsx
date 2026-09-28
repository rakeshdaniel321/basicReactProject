import React from 'react'
import { useState } from 'react'
import UserFrom from './pages/UserFrom';
function Home() {
   const [showText,setShowText]=useState(false);
   const [user,setUser]=useState("");
    const toggle=()=>{
        setShowText(!showText);
    };
  return (
   <>
    <div>Home</div>
    <input onChange={(e)=>setUser(e.target.value)} type={showText?'text':'password'} placeholder='enter your password'/>
    <p>hello, {user}</p>
    <button onClick={toggle}>{showText?'hide':'show'}</button>
    <UserFrom/>
   </>
  )
}

export default Home