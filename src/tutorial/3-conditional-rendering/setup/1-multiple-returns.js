import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

// const MultipleReturns = () => {
//   const [loading, setLoading] = useState(true);

//   //Infinite loop

//   // if(loading){
//   //   setLoading(false);
//   //   return <h2>Loading......</h2>
//   // }
//   // else{
//   //   setLoading(true);
//   //   return <h2>multiple returns</h2>
//   // }
// };
 
const MultipleReturns = () => {
  let i = 0;
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [user, setUser] = useState('Default user');


  //setState() functions are asynchronous functions and to understand what is rendering after which setState, you can visualise a queue
  useEffect(() => {
    setisLoading(true);
    fetch(url)
    //fetch is not going to trigger any error if the status code is 404 i.e. if we search for the wrong user 
      .then(res => {
        if(res.status >= 200 && res.status <=299){
          // throw new Error(res.statusText);
          return res.json();
        }
        else{
          setisLoading(false);
          setisError(true);
          throw new Error(res.statusText);
        }
      })
      .then(user => {
        const {login} = user;
        setUser(login);
        setisLoading(false);
      })
      .catch(err => {
        console.log(i);
        setisError(true);
      });
  }, []);

  if(isLoading){
    console.log("Is loading");
    return <div>
      <h2>Loading.....</h2>
    </div>
  }
  
  if(isError){
    console.log("Error");
    return <div>
      <h2>Error!!</h2>
    </div>
  }
  
  if(user){
    console.log("User");
    return <div>
      <h2>{user}</h2>
    </div>
  }
};

export default MultipleReturns;
