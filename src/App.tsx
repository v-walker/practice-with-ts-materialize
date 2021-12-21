import React, { useState } from 'react';
import Button from './components/Button';

function App() {
  const [count, setCounter] = useState(0);

  const increaseCount = (): void => {
    setCounter(count + 1)
  }

  const decreaseCount = (): void => {
    setCounter(count - 1)
  }

  const resetCount = (): void => {
    setCounter(0)
  }


  return (
    <>
      <div className="container valign-wrapper center-align">
        <div className="row">
          <div className="col s10 center-align">
            <h1>Counter: {count}</h1>
            <Button text="+ increase" action={() => increaseCount()} />
            <Button text="- decrease" action={() => decreaseCount()} color="red lighten-2"/>
            <Button text="reset" action={() => resetCount()} color="blue lighten-1"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
