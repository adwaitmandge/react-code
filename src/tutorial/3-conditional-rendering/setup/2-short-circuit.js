import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

//We use short-circuit evaluation and ternary operator for conditional rendering

const ShortCircuit = () => {
  const [text, setText] = useState('Peter');
  const [isError, setError] = useState(false);

  //if 'text' is truthy it is going to return text otherwise it will return 'hello world' in case of || operator

  //So basically we are assigning a default value with the help of 'or' operator
  const firstValue = text || 'hello world';
  //in case of && operator if text is truthy it is going to return the second value and if it is falsy then it will return the first value which in our case is an empty string
  const secondValue = text && 'hello world';
  return <>
  <h1>{text || 'John Doe'}</h1>
  <button className='btn' onClick={() => setError((currentValue) => !currentValue)}>Toggle Error</button>
  {/* {text && <h1>Hello World</h1>} */}
  {/* {!text && <h1>Hello World</h1>} */}
  {isError && <h1>Error....</h1>}
  {isError?<h2>There is an error</h2>:<div><h2>There is no error</h2></div>}
  </>;
};

export default ShortCircuit;
