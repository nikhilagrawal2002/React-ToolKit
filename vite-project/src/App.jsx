// src/App.jsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counter/counterSlice';
import './App.css'; // Import the CSS file

function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Counter: {count}</h1>
      <div className="buttons">
        <button className="btn increment" onClick={() => dispatch(increment())}>Increment</button>
        <button className="btn decrement" onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
