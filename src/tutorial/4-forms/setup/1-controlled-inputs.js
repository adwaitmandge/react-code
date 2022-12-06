import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

//In Js you use something like above to access the input fields of the form, in react we cannot do that and hence we use the useStates to access values of the input field
// const ControlledInputs = () => {
//   //To access the form data we use stateValues
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const clickHandler = (evt) => {
//     evt.preventDefault();
//     //essentially, now we are not refreshing the page when we are submitting the form
//     console.log(name, email);
//   };

//   return (
//     <>
//       <article>
//         <form className="form" onSubmit={clickHandler}>
//           <div className="form-control">
//             <label htmlFor="firstName">Name : </label>

//             {/* Adding a 'value' prop without onChange handler is going to make the input field immutable,
//               so you can either add the onChange handler or change 'value' to 'defaultValue'

//               You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
//             */}
//             <input type="text" id="firstName" value={name} onChange={(evt) => setName(evt.target.value)} />
//           </div>

//           <div className="form-control">
//             <label htmlFor="email">Email : </label>
//             {/* Here evt.target basically refers to the element that you're adding the event listener on */}
//             <input type="text" id="email" value={email} onChange={(evt) => setEmail(evt.target.value)}  />

//             {/* Whenever you type something, the onChange event is triggered which is triggering the setState() callback which sets the state value to the input.value essentially and setState() triggers a re-render and hence the value attribute of the input field is updated everytime we type something */}
//           </div>
//           <button type='submit'>Add Person</button>
//         </form>

//         {/* That's how a contolled input is setup in react, you need to have a value property that references some stateValue and then you have onChange eventListener */}
//       </article>
//     </>
//   );
// };

//In es6, if both your key and variable holding the value share the same name then instead of writing const person = {firstName:firstName}, you can write const person = {firstName}
const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const submitHandler = (evt) => {
    evt.preventDefault();

    if (firstName && email) {
      const person = {id: new Date().getTime().toString(), firstName, email };
      // people.push(person);
      //You can either use people.push(person) to change the state or you can use the setState() callback
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
      console.log(people);
    }
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Add person</button>
        </form>
        <ul>
          {people.map((person, index) => {
            const {id, firstName, email} = person;
            return (
              // You don't wanna use something like index as an id when performing stuff like adding and removing items from the list
              <li key={id} className="item">
                <h4>{firstName}</h4>
                <p>{email}</p>
              </li>
            );
          })}
        </ul>
      </article>
    </>
  );
};

export default ControlledInputs;
