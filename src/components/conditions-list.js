import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import ConditionItem from './condition-item';

export class ConditionsList extends Component
{
  componentDidMount(){
    this.props.fetchConditionsFromFB();
  }

  deleteHandler(id){
    //console.log("In conditionList deleteHandler", id);
    this.props.deleteCondition(id);
  }

  render(){
    if(!this.props.conditions || this.props.isFetching){
      return(
        <div>loading...</div>
      );
    }

    const list = this.props.conditions.map(cond => {
      return <ConditionItem
        key={cond.id}
        id={cond.id}
        title={cond.fields.title}
        onDeleteClick={this.deleteHandler.bind(this)}
        desc={cond.fields.description}/>
    }, this);

    return(
      <ul className="conditions-list list-group">
        {list}
      </ul>
    );
  }

};

function mapStateToProps(state){
  return {
    conditions: state.conditions.all,
    isFetching: state.conditions.isFetching
  }
}

export default connect(mapStateToProps, actions)(ConditionsList);
