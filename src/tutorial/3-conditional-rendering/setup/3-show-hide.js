import React, { useState, useEffect } from "react";

//Toggling components

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
    <button className="btn" onClick={() => setShow(!show)}>Show/hide</button>
    {show && <Item />}  
    </>
  )
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  //Here we are doing the same thing that we did back in use-cleanup.js, the only difference is that now we are rendering the 'Item' component everytime we click the button. Previously we could have avoided the infinite loop stuff by simply passing an empty dependency list as the second argument to useEffect() and by also returning a cleanup function, now we have no choice but to return a cleanup function. The reason why empty dependency list will fail is that it triggers the useEffect callback on the initial render, now , every time we show the <Item /> component, useEffect will be called as every toggle that makes the <Item/> component visible is going to count as the first time it is rendering
  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  });

  return(
    <div style={{marginTop:'2rem'}}>
      <h1>Window</h1>
      <h2>Size :{size}</h2>
    </div>
  )
};

export default ShowHide;
