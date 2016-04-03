import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchConditions } from '../actions/index';
import ConditionItem from './condition-item';

export class ConditionsList extends Component
{
  componentDidMount(){
    this.props.fetchConditions();
  }

  render(){
    if(!this.props.conditions){
      return(
        <div>loading...</div>
      );
    }

    const list = this.props.conditions.map(cond => {
      return <ConditionItem title={cond.title} desc={cond.desc}/>
    });

    return(
      <ul className="conditions-list list-group">
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
