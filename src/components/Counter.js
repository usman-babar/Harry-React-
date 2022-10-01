import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <div className="my-3">
        <h3 className=" my-3">Count = {count}</h3>
        <button className="btn btn-success mx-2" onClick={increment}>
          Increment
        </button>
        <button className="btn btn-primary my-2">{count}</button>
        <button className="btn btn-danger mx-2" onClick={decrement}>
          Deccrement
        </button>
      </div>
    </div>
  );
}
