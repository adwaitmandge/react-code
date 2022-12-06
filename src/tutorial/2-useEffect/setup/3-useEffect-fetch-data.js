import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await fetch(url);
    const users = await res.json();
    setUsers(users);
  };

  useEffect(() => {
    //You cannot make this callback within useEffect an async function

    //Here an infinite loop will run as during the first render, useEffect will be invoked which further invokes getUsers and getUsers invokes setUsers which will trigger a re-render so useEffect will be triggered again which further invoke getUsers and so on and so on and so on, so the solution to this problem is adding an empty dependency list to useEffect and so useEffect will be triggered only on the first render
    getUsers();
  }, []);

  return (
    <>
      <h2>github users</h2>
      <ul className="users">
        {users.map((user) => {
          const { login, id, avatar_url, html_url } = user;

          return (
            <li key={id}>
              <img src={avatar_url} className="image" alt={login} />
              <div>
              <h4>{login}</h4>
              <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
      ;
    </>
  );
};

export default UseEffectFetchData;
