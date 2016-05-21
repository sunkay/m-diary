import axios from 'axios';
import { hashHistory } from 'react-router';
import Config from '../config';

export const LOGIN = "LOGIN";
export const AUTH_USER = "AUTH_USER";
export function login({email, password}, url){
  return function(dispatch){
    // sign in with the auth server
    return axios.post(`${Config.auth.url}/signin`, {email, password})
      .then(response => {
        // store the token in localstorage
        localStorage.setItem('token', response.data.token);

        // Update state to indicate authenticated user
        dispatch({type: AUTH_USER});

        // redirect to the right url
        console.log('redirecting to... ', url);
        hashHistory.push(url);
      })
      .catch((response) => {
        dispatch(authError('The email address or password you entered is incorrect.'));
      });

  }
}

export const SIGNUP_USER = "SIGNUP_USER";
export function signupUser({email, password}){
  return function(dispatch){
    // call authAPI to signup a user
    return axios.post(`${Config.auth.url}/signup`, {email, password})
      .then(response => {
        // store the token in localstorage
        //console.log("signed up: ", response.data.token);
        localStorage.setItem('token', response.data.token);

        // Update state to indicate authenticated user
        dispatch({type: AUTH_USER});

        // redirect to '/'
        console.log('redirecting to... ', '/');
        hashHistory.push('/');
      })
      .catch((response) => {
        dispatch(authError(`Error signing up the user: ${response.data.error}`));
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
