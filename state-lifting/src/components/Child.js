import React, { useState } from "react";

const Child = ({ parentCallback }) => {
  const [childData, setChildData] = useState("");

  function handleChange(event) {
    const newData = event.target.value;
    setChildData(newData);
    parentCallback(newData);
  }  
  return (
    <div>
      <label>Enter Data:</label>
      <input type="text" value={childData} onChange={handleChange} />
    </div>
  );
};

export default Child;
