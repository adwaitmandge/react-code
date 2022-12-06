import React from "react";
import { data } from "../../../data";

//each and everytime you are ivoking a function you must nest it within an arrow function because you would want it to get invoked only when you click on the button

const UseStateArray = () => {
  let [people, setPeople] = React.useState(data);

  const removeItem = (name) => {
    console.log(`inside ${name}`);
    // people = people.filter((person) => person.name !== name);
    // setPeople(people);

    //We can also perform the same operation by passing a function to setPeople and the parameter is going to contain the oldStateValue or the currentStateValue  
    setPeople(people => {
        const newPeople = people.filter(person => person.name !== name);
        return newPeople;
    });
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItem(name)}>
              Remove Item
            </button>
          </div>
        );
      })}
      <button
        type="button"
        className="btn"
        onClick={() => setPeople([])}
      >Clear Items
      </button>
    </>
  );
};

export default UseStateArray;
