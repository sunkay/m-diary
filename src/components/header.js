import React from 'react';
import { Link } from 'react-router';

export default () => {
  return(
    <div className="header">
      This is the header component
      <Link to="/cond/new" id="add-condition">Add Condition</Link>
    </div>
  );
}
