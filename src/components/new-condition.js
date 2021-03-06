import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import {Link} from 'react-router';
import { newCondition, fetchCondition, resetCondition, editCondition } from '../actions/conditions';


export class ConditionNew extends Component{
  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount(){
    if(this.props.params.id){
      this.props.fetchCondition(this.props.params.id);
    }
  }

  componentWillUnmount(){
    this.props.resetCondition();
  }

  onSubmit(formProps){
    if(this.props.params.id)
    this.props.editCondition(this.props.params.id, formProps);
    else
    this.props.newCondition(formProps);

    this.context.router.push('/');
  }

  render(){
    const { fields: { title, description }, handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>{this.props.params.id? 'Edit' : 'Create'} a condition</h3>

        <div className={`${title.touched && title.invalid ? 'has-danger' : '' }`}>

          <label htmlFor="title" >Title</label>
          <input type="text" className="validate" {...title}/>
          {
            title.touched && title.error &&
            <div><span className="red-text text-darken-2">{title.error}</span></div>
          }
        </div>

        <div className={`${description.touched && description.invalid ? 'has-danger' : '' }`}>
          <label htmlFor="Description">Description</label>
          <input type="text" className="validate" {...description}/>
          {
            description.touched && description.error &&
            <div><span className="red-text text-darken-2">{description.error}</span></div>
          }
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values)
{
  const errors = {};

  if(!values.title){
    errors.title = 'Required';
  }

  if(!values.description){
    errors.description = 'Required';
  }

  return errors;
}

export default reduxForm(
  {
    form: 'ConditionNew',
    fields: ['title', 'description'],
    validate
  },
  state => ({ // mapStateToProps
    initialValues: state.conditions.condition, // will pull state into form's initialValues
  }),
  {newCondition, fetchCondition, resetCondition, editCondition}
)(ConditionNew);
