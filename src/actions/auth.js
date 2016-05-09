import axios from 'axios';
import { hashHistory } from 'react-router';
import Config from '../config';

export const LOGIN = "LOGIN";
export const AUTH_USER = "AUTH_USER";
export function login({email, password}, url){
  return function(dispatch){
    // sign in with the auth server
    axios.post(`${Config.auth.url}/signin`, {email, password})
      .then(response => {
        // store the token in localstorage
        localStorage.setItem('token', response.data.token);

        // Update state to indicate authenticated user
        dispatch({type: AUTH_USER});

        // redirect to the right url
        console.log('redirecting to... ', url);
        hashHistory.push(url);
      })
      .catch(() => {
        console.log("Error signing in... ");
        dispatch(authError('The email address or password you entered is incorrect.'));
      });

  }
}

export const UNAUTH_USER = "UNAUTH_USER";
export function logout(){
  localStorage.removeItem('token');
  return{
    type: UNAUTH_USER,
  }
}

export const AUTH_ERROR = "AUTH_ERROR";
export function authError(error){
  return{
    type: AUTH_ERROR,
    payload: error
  }
}
