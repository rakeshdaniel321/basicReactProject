import React, { useState, useEffect } from "react";

function UseEffect() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  console.log("useEffect components Render...");

  useEffect(() => {
    console.log("effect");
  },[]);

  useEffect(() => {
    setName("rakesh");
    console.log("components Mounted");
  }, []);
 

  useEffect(() => {
    console.log(`name changed: ${name}`);
    
  }, [name]);
   
 
  useEffect(() => {
      console.log(`Count2 dependency value change before effect run : ${count2}`);
      console.log(`name dependency value change before effect run : ${name}`);
  }, [count2,name]);


  return (
    <>
      <h1>useEffect Hooks</h1>
      <h2>first one once when page loads this name state</h2>
      <p>{name}</p>
      <h2>Count</h2>
      <p>count : {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(`increment button click ${count}`);
        }}
      >
        +
      </button>

      

      <p>count : {count2}</p>
      <button
        onClick={() => {
          setCount2(count2 - 1);
          console.log(`decrement button click ${count2}`);
        }}
      >
        +
      </button>

      
      
    </>
  );
}

export default UseEffect;
