import React, { useState, useReducer, useEffect } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

// const Index = () => {
//   const [people, setPeople] = useState(data);
//   const [name, setName] = useState('');
//   const [showModal, setShowModal] = useState(false);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if(name){
//       setPeople([...people, {id:new Date().getTime().toString(), name}]);
//       setName('');
//     }else{
//       setShowModal(true);
//       return;
//     }
//   }

//   return <>
//     {showModal && <Modal/>}
//     <form onSubmit={submitHandler} className='form'>
//       <div>
//         <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
//       </div>
//       <button type='submit' className='btn'>Add Item</button>
//     </form>
//     {people.map(person => {
//       const {name, id} = person;
//       return(
//         <div key={id} className='item'>
//           <h4>{name}</h4>
//         </div>
//       )
//     })}
//   </>;
// };

//useReducer is going to add more structure to your state
//everytime you invoke useReducer it is going to return two values, a stateValue and a dispatch function(), when you invoke useReducer you have to pass in a 'reducer' function and a second parameter which is going to be your initial or default state, default state could be an array, an object, a string or a boolean, the stateValue returned by useReducer initially it is going to represent the defaultState

//The difference between useState and useReducer is that each and everytime you want to do something with the oldState, you must 'dispatch' it and it must go through the reducer function and reducer function can be considered as something that takes in something called 'action' and then spits out the newState

//A reducer function basically takes in two things, first is the 'state' and the second is the 'action' where state is the old or currentState and 'action' is what you want to do with that state so a reducer function is going to manipulate the state once we call 'dispatch' or once we 'dispatch' the 'action'

//The whole idea of useReducer is that you should be able to update everything at once when you call 'dispatch' and once you pass in the 'action' and all this is going to happen inside the reducer function

//In order to affect anything in our state we are going to need to dispatch it

// const reducer = (state, action) => {
//   //READ THIS AFTER GOING THROUGH THE COMMENTS IN THE SUBMIT HANDLER

//   //In the reducer, you have to return some kind of state otherwise the code that you have written that is dependent on the states won't make any sense, say you 'dispatch' an 'action' and don't return any kind of state from the reducer then your defaultState is going to go bananas, like you'll get an error after submitting the form 'cannot read 'isModalOpen' property of undefined' cause your reducer function has not returned any state, so reducer must return some kind of state in order for your functionalities to work
//   console.log(state, action);

//   //Say you are checking if the 'type' attribute of 'action' is set to 'TESTING' and then returning the new state(which is an object in this case)
//   if (action.type === "ADD_PEOPLE") {
//     const newPeople = [...state.people, action.payload];

//     //You can't just add any properties while returning the new state, the newState must have all the properties of the old State, so it is best to use the spread operator and grab all the values of the oldState and then make changes to the required properties

//     //To pass more data to the 'action' object, you can add that data as the property of the 'action' object
//     return {
//       ...state,
//       people: newPeople,
//       isModalOpen: true,
//       modalContent: "item added",
//     };

//     //if you dispatch an action further, you'll find that your state parameter has been set to the stuff that you have returned above
//   } else if (action.type === "EMPTY_ITEM") {
//     //HANDLING THE CASE OF EMPTY HANDLE SUBMISSION
//     return {
//       ...state,
//       isModalOpen: true,
//       modalContent: "Cannot Add Empty Item",
//     };
//   } else if (action.type === "CLOSE_MODAL") {
//     return { ...state, isModalOpen: false };
//     //You would want the modal to disappear after sometime say 3 seconds so pass the 'closeModal' function to the <Modal/> component and then trigger it after seconds using the 'setTimeout' function but do this inside 'useEffect' as you would require the modal to disappear 3 seconds after 'each' render
//   }
//   else if(action.type === 'REMOVE_ITEM'){
//     const newPeople = state.people.filter(person => person.id !== action.payload);
//     return {...state, people:newPeople};
//   }
//   //You can return something like a default state if the action that you pass in doesn't match with the conditions set above or you can throw in an error

//   //You won't have a clue of what what went wrong if you return the same state if none of the if's for the action types match up
//   // return state;

//   //This is a good scenario where you have a bunch of if's for all the action types that you have set up and if none of them match you are throwing in an error
//   throw new Error("no matching action type");

//   //ALWAYS ADD YOUR OLD STATE PROPERTIES USING THE SPREAD OPERATOR AND THEN DECIDE WHICH PROPERTY VALUES YOU WANT TO CHANGE
// };

// const defaultState = {
//   people: [],
//   isModalOpen: false,
//   modalContent: "",
// };

// const Index = () => {
//   const [name, setName] = useState("");
//   const [state, dispatch] = useReducer(reducer, defaultState);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (name) {
//       //Say we are setting the name after submitting the form, in order to update the name we need to call the 'dispatch' function and pass in an object with a property called 'type', that object is essentially our 'action' and then you need to set the 'type' property to something usually something that is uppercase, say {type:'TESTING'}. Once you dispatch your action (call 'dispatch' and pass in 'action') you need to handle the reducer.

//       // dispatch({ type: "TESTING" });

//       //To pass data to the reducer function you can add properties on the action object and a common convention is to add values to 'payload' property
//       const newPeople = { id: new Date().getTime().toString(), name };
//       dispatch({ type: "ADD_PEOPLE", payload: newPeople });

//       //clearing the input field after adding items
//       setName("");
//     } else {
//       dispatch({ type: "EMPTY_ITEM" });
//     }
//   };

//   const closeModal = () => {
//     //TO MAKE THE MODAL DISAPPEAR
//     dispatch({type:"CLOSE_MODAL"});
//   };

//   return (
//     <>
//       {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent} />}
//       <form onSubmit={submitHandler} className="form">
//         <div>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           ></input>
//         </div>
//         <button type="submit" className="btn">
//           Add Item
//         </button>
//       </form>
//       {state.people.map((person) => {
//         const { name, id } = person;
//         return (
//           //SETTING AN ACTION TO BE DISPATCHED AFTER CLICKING THE REMOVE BUTTON
//           <div key={id} className="item">
//             <h4>{name}</h4>
//             <button type="button" onClick={() => dispatch({type:'REMOVE_ITEM', payload:id})}>Remove</button>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// //LAST THING, THERE IS A LOT OF FUNCTIONALITY INSIDE A REDUCER SO YOU MAY WANNA PLACE IT IN A SEPARATE FILE AND THEN IMPORT IT

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
  isDisabled:true
};

const reducer = (state, action) => {
  //empty submission
  if (action.type === "EMPTY_ITEM") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Please enter a value",
    };
  } else if (action.type === "ADD_ITEM") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Item added",
      people: [
        ...state.people,
        { id: new Date().getTime().toString(), name: action.payload },
      ],
    };
  } else if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: `${action.payload.name} removed`,
    };
  } else if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  } else if (action.type === "REMOVE_ALL") {
    return {
      ...state,
      people: [],
      isModalOpen: true,
      modalContent: "Cleared All Items",
    };
  } else {
    throw new Error("No matching action");
  }
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const submitHandler = (e) => {
    e.preventDefault();
    if (name) {
      dispatch({ type: "ADD_ITEM", payload: name });
      setName("");
    } else {
      dispatch({ type: "EMPTY_ITEM" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form className="form">
        <div>
          <input
            type="text"
            value={name}
            placeholder="Enter a name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn" onClick={submitHandler}>
          Add Person
        </button>
      </form>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <button
              type="button"
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: { id, name } })
              }
            >
              Remove
            </button>
          </div>
        );
      })}
      <button
        type="button"
        className="btn"
        disabled={!state.people && true}
        onClick={() => dispatch({ type: "REMOVE_ALL" })}
      >
        Clear People
      </button>
    </>
  );
};

export default Index;
