import React from 'react';
import { Link } from 'react-router';

export default () => {
  return(
    <div>
      <nav>
        <div className="header nav-wrapper">
          <a href="#" className="left brand-logo">MDiary</a>
          <ul id="nav-mobile" className="right hide-on-small-and-down">
            <Link to="/cond/new" id="add-condition">Add Condition</Link>
          </ul>
        </div>
      </nav>
      <div className="fixed-action-btn">
        <Link className="btn-floating btn red"
              to="/cond/new" id="add-condition">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
}
