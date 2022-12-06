import React, { useState, useEffect } from "react";
// by default useEffect runs after every re-render

//The other components of useEffect are :
// 1.cleanup function
// 2.second parameter

//The useEffect() hook allows you to work on side-effects, basically you can work on anything that is outside your component, even console.log() is considered as a side-effect

// useEffect() is used in all instances of data-fetching, signing up for subscriptions and stuff along those lines

//The way useEffect() works is that you pass in a callback that runs after every render
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  //Each and every time we click the button, we are invoking setValue, useState preserves the values between subsequent renders and triggers re-renders, so everytime you click the button you are triggering the useEffect()

  //Although we cannot use a hook inside a conditional, we can use a conditional inside a hook, eg:we want the title to change only if the value is greater than 1

  //The second parameter that we pass into useEffect is usually an array called 'dependency list' and if we pass an empty array '[]' it means that the callback i.e the first parameter will only run on the initial render

  //If we want the useEffect() to get triggered only after changes are made to a specific entity which is considered to be a dependency, you can add that 'dependency' to the 'dependecy list'   

  //We can also have multiple useEffects()
  useEffect(() => {
    console.log("useEffect");
    if (value > 1) {
      document.title = `New Messages (${value})`;
    }
  }, [value]);

  // This useEffect() will run only on the initial render as the dependecy list is empty 
  useEffect(() => {
    console.log("Hello World!");
  }, [])

  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue((val) => val + 1)}>
        Click Me!
      </button>
    </>
  );
};

export default UseEffectBasics;
