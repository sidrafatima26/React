import React from "react";
import { data1, data2 } from "../App";
import { useContext } from "react";

export default function Child3() {
  const name = useContext(data1);
  const age = useContext(data2);
  return (
    <>
      <h1>
        My Name is {name} and My age is {age}
      </h1>
    </>
  );
}
