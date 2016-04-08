import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ConditionItem extends Component {

  render(){
    return(
      <li className="condition-item list-group-item">
        <h4 className="list-group-item-heading">{this.props.title}</h4>
        <p className="list-group-item-text">{this.props.desc}</p>

        <div className="btn-group" role="group">
          <Link to={`/cond/edit/${this.props.id}`} className="btn btn-secondary">Edit</Link>
        </div>

        <div className="btn-group" role="group">
          <button
            onClick={this.props.onDeleteClick.bind(null,this.props.id)}
            className="btn btn-danger">
            Delete
          </button>
        </div>
      </li>
    );
  }
}
