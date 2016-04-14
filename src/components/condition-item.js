import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ConditionItem extends Component {

  render(){
    return(
      <li className="condition-item collection-item">
        <h4 className="list-group-item-heading">{this.props.title}</h4>
        <p className="list-group-item-text">{this.props.desc}</p>

        <Link to={`/cond/edit/${this.props.id}`}
          className="btn-floating btn waves-effect waves-light green">
          <i className="material-icons">mode_edit</i>
        </Link>

        <a
          onClick={this.props.onDeleteClick.bind(null,this.props.id)}
          className="btn-floating btn waves-effect waves-light red">
          <i className="material-icons">delete</i>
        </a>
      </li>
    );
  }
}
