import React from 'react';

export default (props) => {
  return(
    <li className="condition-item list-group-item">
      <h4 className="list-group-item-heading">{props.title}</h4>
      <p className="list-group-item-text">{props.desc}</p>
    </li>
  );
}
