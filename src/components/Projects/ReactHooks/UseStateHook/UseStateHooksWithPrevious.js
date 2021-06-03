import React, { useState } from 'react';

const UseStateHooksWithPrevious = () => {
  const initialState = 0;
  const [count, setCount] = useState(initialState);
  const [value, setValue] = useState(initialState);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const setInputValue = e => {
    const value = +e.target.value;
    setValue(value);
  };

  const increaseCountValue = () => {
    setCount(prevState => prevState + value);
  };

  const decreaseCountValue = () => {
    setCount(prevState => prevState - value);
  };

  const examples2 = `import React, { useState } from 'react';

  const UseStateHooksWithPrevious = () => {
    const initialState = 0;
    const [count, setCount] = useState(initialState);
    const [value, setValue] = useState(initialState);
  
    const increaseCount = () => {
      setCount(count + 1);
    };
  
    const decreaseCount = () => {
      setCount(count - 1);
    };
  
    const setInputValue = e => {
      const value = +e.target.value;
      setValue(value);
    };
  
    const increaseCountValue = () => {
      setCount(prevState => prevState + value);
    };
  
    const decreaseCountValue = () => {
      setCount(prevState => prevState - value);
    };
  
    return (
      <div className="usestate-hook2">
        <h2>useState Example with Previous Value</h2>
        <div className="action">
          <p className="result">
            <small>Updated Value:</small> {count}
          </p>
          <input
            type="text"
            onChange={setInputValue}
            value={value || initialState}
          />
          <div className="button-group">
            <button onClick={increaseCount}> Increase</button>
            <button onClick={decreaseCount}> Decrease</button>
            <button onClick={increaseCountValue}> Increase with {value}</button>
            <button onClick={decreaseCountValue}> Decrease with {value}</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default UseStateHooksWithPrevious;
  `;

  return (
    <div className="usestate-hook2">
      <h2>useState Example with Previous Value</h2>
      <pre>{examples2}</pre>
      <div className="action">
        <p className="result">
          <small>Updated Value:</small> <strong>{count}</strong>
        </p>
        <input
          type="text"
          onChange={setInputValue}
          value={value || initialState}
        />
        <div className="button-group">
          <button onClick={increaseCount}> Increase</button>
          <button onClick={decreaseCount}> Decrease</button>
          <button onClick={increaseCountValue}> Increase with {value}</button>
          <button onClick={decreaseCountValue}> Decrease with {value}</button>
        </div>
      </div>
    </div>
  );
};

export default UseStateHooksWithPrevious;
