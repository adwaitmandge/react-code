import React, { useEffect, useRef } from "react";

//useRef works a lot like useState

// preserves value in between renders
// DOES NOT trigger re-render unlike usestate
// target DOM nodes/elements

//we invoke useRef and then assign it to a container, by passing some kind of initial value and then pass it to the ref attribute in our input field

//useRef allows us to set uncontrolled inputs
const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);
  const handleSubmit = (e) => {
    //when we submit the form, since we added the 'ref' attribute to the input, the 'current' property will hold the value of our input
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  };

  //refContainer is an object containing a property called current which points to the element to which the ref attribute is attached

  //You can use ref's within useEffect without mentioning the refContainer in a dependency list as they do not trigger re-renders
  //example, to focus the input field when the page loads
  console.log(refContainer);

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
      <div ref={divContainer}></div>
    </>
  );
};

export default UseRefBasics;
