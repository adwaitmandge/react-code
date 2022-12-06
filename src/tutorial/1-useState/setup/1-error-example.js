import React from "react";

const ErrorExample = () => {
  let title = "Random Title";

  const clickHandler = () => {
    title = "Hello World!";
    console.log(title);
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className="btn" onClick={clickHandler}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
