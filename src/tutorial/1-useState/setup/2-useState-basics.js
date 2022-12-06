import React, { useState } from "react";
//useState is a function inside the react library which requires an initial state which could be a boolean or a string or an array or an object
const UseStateBasics = () => {
  // console.log(useState('hello world!'));
  //useState() when invoked returns an array which contains the argument that we pass into useState and the second member of the array is a function
  // useState('something') returns an array so we can store it in a variable

  //useState() not only allows us to trigger re-renders but also helps us preserve the value in-between renders

  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value);

  //handler is a function that controls the value that we have in our state
  //we can also destructure from the array
  const [text, setText] = useState("Random Title");
  //second argument is always named set'firstarg'
  //you always pass the default value of whatever you want to change to useState()

  const clickHandler = () => {
    if (text === "Random Title") {
      //Here we are invoking the function returned by useState within a conditional which is allowed but useState() itself cannot be invoked inside a conditional 
      setText("Hello World!");
      //everytime you invoke setText('') whatever value you pass to it will be set as the new statevalue and the component will be re-rendered
    } else {
      setText("Random Title");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={clickHandler}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;

//GENERAL RULES OF HOOKS
//1. All hooks must begin with 'use'
//2. Component name must be uppercase otherwise an error will be thrown
//3. Hook must be used within the function component/body
//4. Hook cannot be called conditionally, eg: useState() cannot be called within and if else structure but the function returned by useState() can be called within any conditional