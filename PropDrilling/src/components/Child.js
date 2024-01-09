import React from "react";
import Grandchild from "./Grandchild";

export default function Child({ company }) {
  return (
    <div>
      <Grandchild company={company}> </Grandchild>
    </div>
  );
}
