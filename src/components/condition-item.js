import React from 'react';

export default (props) => {
  return(
    <tr className="condition-item">
      <th>{props.title}</th>
      <th>{props.desc}</th>
    </tr>
  );
}
