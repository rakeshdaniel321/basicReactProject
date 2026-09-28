import React from 'react'
import { useState } from 'react'
function ToggleButton() {
    const[toggle,setToggle]=useState(false);
    const Toggle=()=>{
        if(toggle===false){
            
        }
    }
  return (
   <>
    <div>ToggleButton</div>
    <button onClick={Toggle}></button>
   </>
  )
}

export default ToggleButton