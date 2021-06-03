import React, { useState } from 'react';

const UseStateHooks = () => {
  const initialState = 0;
  const [count, setCount] = useState(initialState);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };
  const examples1 = `import React, { useState } from 'react'

  const UseStateHooks = () => {
    const initialState = 0
    const [count, setCount] = useState(initialState)
  
    const increaseCount = () => {
      setCount(count + 1)
    }
  
    const decreaseCount = () => {
      setCount(count - 1)
    }
    
    return (
      <div className='usestate-hook'>
        <h2>useState Example </h2>
        <p>{count}</p>
        <button onClick={increaseCount}> Increase</button>
        <button onClick={decreaseCount}> Decrease</button>
      </div>
    )
  }
  
  export default UseStateHooks`;
  return (
    <div className="usestate-hook1">
      <h2>useState Example </h2>
      <pre>{examples1}</pre>
      <div className="action">
        <p className="result">
          <small>Updated Value:</small> {count}
        </p>
        <div className="button-group">
          <button onClick={increaseCount}> Increase</button>
          <button onClick={decreaseCount}> Decrease</button>
        </div>
      </div>
    </div>
  );
};

export default UseStateHooks;
