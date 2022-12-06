import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          {/* Instead of going for a traditional link like we have been doing in HTML, we need to use a 'Link' component from 'react-router-dom' and then add a prop called 'to' where you specify the path where you want to navigate and make sure that the path matches with the paths that you set up in your index.js */}
          <Link to="/" className="btn">Home</Link>
        </li>
        <li>
          <Link to="/about" className="btn">About</Link>
        </li>
        <li>
          <Link to="/people" className="btn">People</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
