import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchConditions } from '../actions/index';

class ConditionsList extends Component
{
  //componentWillMount(){
  //  this.props.fetchConditions();
  //}

  render(){
    const list = this.props.conditions.map(cond => {
      return <li key={cond.title}>
        {cond.title}
      </li>
    })

    return(
      <ul className="conditions-list">
        {list}
      </ul>
    );
  }

};

function mapStateToProps(state){
  return {
    conditions: state.conditions.all
  }
}

export default connect(mapStateToProps, {fetchConditions})(ConditionsList);
