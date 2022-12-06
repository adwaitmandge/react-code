import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  //useParams() is going to convert your req param to string and then return it, so you need to parse it and then find the target person
  const [name, setName] = useState("default name");
  const { id } = useParams();

  useEffect(() => {
    const foundPerson = data.find((person) => person.id === parseInt(id));
    setName(foundPerson.name);
  },[]);

  return (
    <div>
      <h2>{name}</h2>
      <Link to="/people" className="btn">
        Back To People
      </Link>
    </div>
  );
};

export default Person;
