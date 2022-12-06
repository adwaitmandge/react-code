import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age:24,
    message: 'random message'
  })

  const changeMessage = () => {
    if(person.message === 'random message'){
      setPerson({...person, message:'New message'});
    }
    else{
      setPerson({...person, message:'random message'});
    }
  };

//You can also have multiple useStates for individual properties of an object
  // const [name, setName] = useState('John');
  // const [age, setAge] = useState(24);
  // const [message, setMessage] = useState('random message');

  return (
    <>
      <h1>UseStateObject Example</h1>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={() => changeMessage()}>Change Message</button>
    </>
  )
};

export default UseStateObject;