import { useState } from 'react'
import './App.css'
import Home from './Home';

function App() {
   const[count,setCount]=useState(0);
 
  return (
    <>
    <h1 className='text-3xl font-bold underline' >App page</h1>
     <div className='text-3xl font-bold underline'>Rakesh</div>
     <h1>count:{count}</h1>
     <button className='w-24 h-9  px-6 py-2.5 bg-gradient-to-r from-green-500 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-green-500/50 transition-all active:scale-95' onClick={()=>setCount(count+1)}>increment</button>
     <button className='w-24 h-9  px-6 py-2.5 bg-gradient-to-r from-green-500 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-green-500/50 transition-all active:scale-95' onClick={()=>setCount(count-1)}>decrement</button>
     <button className='w-24 h-9  px-6 py-2.5 bg-gradient-to-r from-green-500 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-green-500/50 transition-all active:scale-95' onClick={()=>setCount(0)}>reset</button>
    <Home/>
    </>
  )
}

export default App
