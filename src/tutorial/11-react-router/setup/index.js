import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";
// pages
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";
// navbar
import Navbar from "./Navbar";

// https://stackoverflow.com/questions/49162311/react-difference-between-route-exact-path-and-route-path

// Instead of going back to the server and requesting information about the pages where the user navigates, we set up routing on the client side without refreshing the page, so basically you can switch url's without refreshing the entire page. React does not have internal routing and the most popular routing library in react is ReactRouter which is an external library and not a part of react

//So basically we wrap whatever index.js is returning within 'Router', you wrap a rule component within Router

{
  /* We would like to tell the user that he is on the wrong page if he navigates to a url for which there's no component or 'Route' defined, so we render the 'error' component in such cases and the path of the route in this case is going to be path='*' where '*' represents 'all', so error component will be rendered for all paths that don't match the already defined paths and also for those routes that match the pre-defined route-paths and here is where the switch component comes in handy

If you place all your paths within the 'switch' component then only the component for the first matching path will be rendered, so that way, if you go the home page only the home component will be rendered and so on
*/
}

const ReactRouterSetup = () => {
  return (
    <Router>
      {/* The way to set the imported components as pages is using the 'Route' and then adding the 'path' to the route, for each and every route whatever components you have set will be displayed
       */}

       {/* Adding links to the page, place it inside the Router but outside the switch, so your navbar will be added to every page*/}
       <Navbar/>
      <Switch>
        <Route exact path="/">
          {/* Here '/' represents the domain of your application, 'localhost' in this case 
        Within the Route you are going to display whatever component you want
      */}
          <Home />
        </Route>
        <Route exact path="/about">
          {/* If you navigate to '/about' you'll observe that both <Home/> as well as the <About/> components have been rendered, this is because, in react, if a path matches, all components within all the matching paths will be rendered, in order to fix that you'll need to add a prop called 'exact', so now only the component within the exact matching path will be rendered */}
          <About />
        </Route>
        <Route exact path="/people">
          <People />
        </Route>

{/* Here we are trying to render the details of a specific person 
    Here we pass in the component to a prop called children and that component will be rendered everytime you try to access the specified path and to access the 'id'
    param we use useParam() which basically returns an object containing all the request params 
  */}
        <Route path="/person/:id" children={<Person />}></Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
    </Router>
  );
};

//useParams helps us to access the request params

export default ReactRouterSetup;
