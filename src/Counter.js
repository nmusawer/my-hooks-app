// src/Counter.js
import React, { useState, useEffect } from 'react';

const Counter = () => {
  // Step 1: Use useState to manage counter state
  const [count, setCount] = useState(0);

  // Step 2: Use useEffect to log messages
  useEffect(() => {
    console.log(`Component mounted or count changed: ${count}`);

    // Optional: Return a cleanup function (called when component unmounts)
    return () => {
      console.log('Component unmounted');
    };
  }, [count]); // Dependency array - runs when 'count' changes

  // Step 3: Create handlers to update the counter
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;