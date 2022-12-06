import React, { useState } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

//Prop-drilling is basically a sideeffect when we have multiple components and a component tree and you need to start passing some state from the top component to the bottom component of the component tree


//If we want to pass the 'removePerson' prop from 'PropDrilling' component to 'SinglePerson' component, you'll have to pass it to 'list' component, destructure it there, then pass it onto 'SinglePerson' component where you'll have to destructure it again

//'List' does not require the 'removePerson' prop for any purpose but it needs to get that prop from 'PropDrilling' and then pass it onto 'SinglePerson'

//This process is going to be quite tedious when it comes to passing multiple props from a top component in the component tree to the bottom component

//This is where context api and redux come into handy, redux is used for more complex cases
const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    const newPeople = people.filter(person => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <section>
      <h3>prop drilling</h3>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} removePerson={removePerson} />;
      })}
    </>
  );
};

const SinglePerson = ({id, name, removePerson}) => {
  return <div className="item">
    <h4>{name}</h4>
    <button onClick={() => removePerson(id)}>Remove</button>
  </div>;
};

export default PropDrilling;
