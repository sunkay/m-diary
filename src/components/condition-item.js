import React from 'react';

export default (props) => {
  return(
    <tr>
      <th>{props.title}</th>
      <th>{props.desc}</th>
    </tr>
  );
}
