import React from 'react';
import {Link} from 'react-router';
import ConditionItem from './condition-item';

export default () => {
  return(
    <div>
      List of conditions...
      <Link to="/cond/new">New Condition</Link>

      <table className="table table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <ConditionItem title="Headache" desc="chronic head pain"/>
        </tbody>
      </table>
    </div>
  );
}
