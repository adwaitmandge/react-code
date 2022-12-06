import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext()
//The moment you use createContext you'll have access to two components -> Provider and Consumer
//With the arrival of 'useContext', we don't use the 'Consumer'

//To access the components use PersonContext.provider or PersonContext.consumer etc. 
// 'Provider' works as a distributor, in our example, ContextApi is our root component which is rendering all the other components and providing the 'removePerson' function, so 
const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    //you can pass whatever you want to value, essentially the information that you would like to pass around, then in the lower levels, you can use 'useContext' to access that information and you need to pass in PersonContext to useContext

    //PersonContext.Provider is goint to wrap your whole component tree, you can also wrap in your whole application within

    //You can pass anything to the value and you can pass it regardless of how many levels deep you consumer component is present
    <PersonContext.Provider value={{removePerson}}>
      <h3>Context API / useContext</h3>
      <List people={people} />
    </PersonContext.Provider>
  );
};

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name}) => {
  const {removePerson} = useContext(PersonContext);
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

//Basically with the help of contextAPI and useContext you avoid passing data to unnecessary components
export default ContextAPI;
