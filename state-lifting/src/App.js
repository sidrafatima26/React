import './App.css'
import React, { useState } from "react";
import Child from "./components/Child";

export default function App() {
  const [name, setName] = useState("");
  function handleCallback (childData) {
    setName(childData);
  };

  return (
      <div>
        <Child parentCallback={handleCallback} />
        {name}
      </div>
  )
}

