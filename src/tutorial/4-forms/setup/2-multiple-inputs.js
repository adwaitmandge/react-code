import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

//Handling multiple input fields:
//Instead of having states for each input, it would be better if we could just have one state for a given person

//There are gonna be some use cases where this is going to be much faster instead of having separate stateValues and setState for every input field

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState('');
  // const [email, setEmail] = useState('');
  // const [age, setAge] = useState('');
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  const handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    //each and every time you type in the input you are dynamically changing the state value
    setPerson({
      ...person,
      [name]: value,
      id: new Date().getTime().toString(),
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (person.firstName && person.age && person.email) {
      const newPerson = { ...person };
      setPeople((people) => {
        return [...people, newPerson];
      });

      setPerson({ firstName: "", email: "", age: "" });
    }
  };

  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="text"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            add person
          </button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email, age } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;