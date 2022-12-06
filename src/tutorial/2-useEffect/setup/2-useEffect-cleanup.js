import { getSingleElementValue } from "@testing-library/jest-dom/dist/utils";
import React, { useState, useEffect } from "react";
import axios from 'axios';
// cleanup function
// second argument

// ***********************************************************************************


// https://stackoverflow.com/questions/55148322/when-is-the-cleanup-function-triggered-when-using-useeffect-hook-with-dependenci#:~:text=The%20cleanup%20function%20is%20called,when%20the%20component%20is%20unmounted.


// https://reactjs.org/docs/hooks-reference.html#:~:text=The%20function%20passed%20to%20useEffect,when%20certain%20values%20have%20changed.

// ***********************************************************************************


const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("Hello World!");
    window.addEventListener('resize', checkSize);

    //How is this working?
    //The first time we render the page, useEffect is called, meaning that the callback passed to useEffect is invoked, so now 'Hello World!' is logged into our console and an eventlistener called 'resize' will be added to window.

    //The cleanup callback is not returned, it stays put, now if we try to 'resize' our window the callback passed to the event listener is going to be triggered which is going to invoke the setState() function, we know that setState() triggers a re-render and so a re-render is triggered and before the effects of re-render are applied the cleanup function is invoked which basically removes the event listener and after the effects of re-render are applied again useEffect is invoked, 'hello world' is logged and an event listener is added to window

    //In the absence of any cleanup function, the same event listener would be added to window on every re-render, eventually, the browser would crash
    return () => {
      console.log("Cleanup!");
      window.removeEventListener('resize', checkSize);
    };
  });

  //Here we can resolve our issue by adding an empty dependency array but it cleanup functions are important when it comes to appearing and disappearing of components

  return (
    <>
    {console.log('HEYYY')}
      <h1>Window</h1>
      <h2>{size}px</h2>
    </>
  );
};

export default UseEffectCleanup;
