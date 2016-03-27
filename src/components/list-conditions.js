import React, {Component} from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';

import {fetchConditions} from '../actions/index';
import ConditionItem from './condition-item';

export class ListConditions extends Component
{
  componentWillMount(){
    this.props.fetchConditions();
  }

  renderConditions(){
    return this.props.conditions.map((cond) => {
      return(
        <tbody>
          <ConditionItem title={cond.title} desc={cond.desc} />
        </tbody>
      );
    });
  }

  render(){
    if(!this.props.conditions){
      return (
        <div>
          Loading...
        </div>
      );
    }

    return(
      <div className="list-conditions">
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
          { this.renderConditions() }
        </table>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    conditions: state.conditions.all
  }
}

export default connect(mapStateToProps, {fetchConditions} )(ListConditions);
