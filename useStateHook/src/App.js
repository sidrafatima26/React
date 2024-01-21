import "./App.css";
import React, { useState } from "react";

export default function App() {
  //Hook allows function compoenents to have access to state and other react features.  1. Hooks can only be called inside React function components. 2. Hooks can only be callled at the top level of the function component. 3. Hooks can not be conditional.

  const [count, setCount] = useState(0); //This will only be called once.
  function minus() {
    setCount(count - 1);
  }

  function plus() {
    setCount(count + 1);
  }
  return (
    <main>
      <button onClick={minus}> - </button>
      <span> {count} </span>
      <button onClick={plus}> + </button>
    </main>
  );
}
//useState Hook:
//1. React useState hook allows us to track the state in a function compoenet.
//2. Import {useState} from 'react'
//3. useState accespes an initial state and returnes two values a) The current state b) A fucntion that upates the state.

// import React, {useState} from 'react';
// export defalut function App(){
// const [count, setCount] = useState(0);
// function minus(){
// setCount(count-1);
// }
// function plus(){
// setCount(count+1);
// }
// return(
// <>
// <button onCLick={minus}> - </button>
// <span> {count} </span>
// <button onCLick={plus}> + </button>
// </>
// )
// }
