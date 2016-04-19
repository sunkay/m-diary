import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent){

  class Authentication extends Component{
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount(){
      console.log("In Login: ",this.props.location.pathname);

      if(!this.props.authenticated)
        this.context.router.push('/login?redurl='+this.props.location.pathname);
    }

    render(){
      return <ComposedComponent {...this.props}/>
    }
  }

  function mapStateToProps(state){
    return {
      authenticated: state.auth.authenticated
    }
  }
  return connect(mapStateToProps)(Authentication);
}
