import React, { useState } from 'react';
import { data } from '../../../data';
import { Link } from 'react-router-dom';
const People = () => {
  const [people, setPeople] = useState(data);
  return (
    <div>
      <h1>People Page</h1>
      {people.map((person) => {
        const {name, id} = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <Link to={`/person/${id}`}>Learn More</Link>
          </div>
        );
      })}
    </div>
  );
};

export default People;
