import React, { useState } from "react";

const UseStateCounter = () => {                                                                                  
  const [value, setValue] = useState(0);

  const increase = () => {
    setValue(value + 1);
  };

  const decrease = () => {
    setValue(value - 1);
  };

  const reset = () => {
    setValue(0);
  };

  const delayedUpdate = () => {
    setTimeout(() => {
      //This is not going to work if we click the button multiple times because the setValue funciton is asynchronous as it is going to take the old value of 'value' i.e 0 everytime we click on it   
      // setValue(value + 1);

      //If we pass a function to setValue, it's parameter gets that old stateValue, in this case, it is going to be the current value not the one that is old but the current one 
      setValue(prevValue => {
        //whatever you return from this function is going to be the new Statevalue and you must always return something otherwise the stateValue will remain undefined 
        return prevValue + 1;
      })
    }, 4000);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h1>Regular Counter</h1>
        <h2>{value}</h2>
        <button className="btn" onClick={increase}>
          Increase
        </button>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
      </section>

      <section style={{ margin: "4rem 0" }}>
        <h1>More Complex Counter</h1>
        <h2>{value}</h2>
        <button className="btn" onClick={delayedUpdate}>Increase Later</button>
      </section>
    </>
  );
};

export default UseStateCounter;
