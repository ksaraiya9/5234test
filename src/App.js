import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Welcome to the improved React app!');

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{message}</h1>
        <p>
          This is an enhanced version of the React app with interactive features.
        </p>
        
        <div className="counter-section">
          <h2>Counter: {count}</h2>
          <div className="button-group">
            <button onClick={handleIncrement} className="counter-btn">
              Increment
            </button>
            <button onClick={handleDecrement} className="counter-btn">
              Decrement
            </button>
            <button onClick={handleReset} className="counter-btn reset">
              Reset
            </button>
          </div>
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
