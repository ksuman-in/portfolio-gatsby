import React from 'react';
import UseStateHooks from './UseStateHooks';
import UseStateHooksWithPrevious from './UseStateHooksWithPrevious';
import UseStateHooksWithObject from './UseStateHooksWithObject';
import './UseStatehook.scss';

const UseStateHook = () => {
  return (
    <div className="usestate-hook">
      <h1>UseState Hook</h1>
      <UseStateHooks />
      <UseStateHooksWithPrevious />
      <UseStateHooksWithObject />
    </div>
  );
};

export default UseStateHook;
