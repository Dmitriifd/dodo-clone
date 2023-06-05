import { useState } from 'react';
import './Counter.scss';

const Counter = () => {
  const [count, setCount] = useState(1);

  const countIncrement = () => {
    setCount(count + 1);
  };
  const countDecrement = () => {
    if (count) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter">
      <button className="counter__button" onClick={countDecrement}>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          xmlns="http://www.w3.org/2000/svg">
          <rect fill="#454B54" y="4" width="10" height="2" rx="1"></rect>
        </svg>
      </button>
      <p className="counter-amount">{count}</p>
      <button className="counter__button" onClick={countIncrement}>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          xmlns="http://www.w3.org/2000/svg">
          <g fill="#454B54">
            <rect x="4" width="2" height="10" ry="1"></rect>
            <rect y="4" width="10" height="2" rx="1"></rect>
          </g>
        </svg>
      </button>
    </div>
  );
};

export { Counter };
