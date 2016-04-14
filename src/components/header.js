import React from 'react';
import { Link } from 'react-router';

export default () => {
  return(
    <nav>
      <div className="header nav-wrapper">
        <a href="#" className="left brand-logo">MDiary</a>
        <ul id="nav-mobile" className="right hide-on-small-and-down">
          <Link to="/cond/new" id="add-condition">Add Condition</Link>
        </ul>
      </div>
    </nav>
  );
}
