import React from "react";
import Child from "./components/Child";

export default function App(){
  let company = "Wipro";
  return (
  <div>
    React ⚛️ + Vite ⚡ + Replit
      <Child company={company}></Child>
  </div>
  );
};


