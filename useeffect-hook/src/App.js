//UseEffect is a hook that is used to perform side effects in a function component.  If you want to perfrom a task after your componenet renders then that task is defined under useEffect and this task is called side effect (eg: changing the DOM, saving data to a database, adding/removing Listener, etc)
import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [a, setA] = useState("");

  //Variation 1 of useEffect. In this case, whenever you are adding or changing the value inside input the console.log will be called.
  // useEffect(() => {
  //   console.log("Inside UseEffect");
  // });

  //Variation 2 of useEffect. Dependency List is the array of dependencies that tells the useEffect hook which values are changing. This will only run on the first render. componenetDidMount
  // useEffect(() => {
  //   console.log("Inside UseEffect");
  // }, []);

  //Variation 3 of useEffect. Runs on first render and when the dependency changes. componenetDidUpdate
  useEffect(() => {
    console.log("Inside UseEffect");
  }, [a]);

  //Variation 4 of useEffect. This is used for cleaning up. If the useEffect return function returns a function, the returned function is called cleanup. cleanup is run before the effect is reached (to clean up effects from previous renders). This is used for unmounting. componentWillUnmount
  // useEffect( ()=> {
  //   //addEventListener
  //   console.log("Listener added");
  //   return( () =>{
  //     console.log("Listener Removed");
  //   } )
  // } );

  function handleChange(event) {
    setA(event.target.value);
    console.log(a);
  }
  return (
    <main>
      <h1>useEffect Hook</h1>
      React ⚛️ + Vite ⚡ + Replit
      <br></br>
      <input type="text" onChange={handleChange}></input>
      <br></br>
      <h2> {a}  </h2>
    </main>
  );
}
