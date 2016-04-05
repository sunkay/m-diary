import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import {Link} from 'react-router';
import { newCondition } from '../actions/index';


export class ConditionNew extends Component{
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(formProps){
    this.props.newCondition(formProps);
    this.context.router.push('/');
  }

  render(){
    const { fields: { title, description }, handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a new condition</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : '' }`}>
          <label>Title</label>
          <input type="text" placeholder="title" className="form-control" {...title}/>
          {title.touched && title.error && <div>{title.error}</div>}
        </div>

        <div className={`form-group ${description.touched && description.invalid ? 'has-danger' : '' }`}>
          <label>Description</label>
          <input type="text" placeholder="description" className="form-control" {...description}/>
          {description.touched && description.error && <div>{description.error}</div>}
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

export default reduxForm({
  form: 'ConditionNew',
  fields: ['title', 'description'],
  validate
}, null, {newCondition} )(ConditionNew);
