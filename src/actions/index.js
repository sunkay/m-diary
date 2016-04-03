import firebase from 'firebase';


const fbref_url = "https://m-diary.firebaseio.com/conditions";
const fbref = new firebase(fbref_url);

export const RECEIVE_CONDITIONS = 'RECEIVE_CONDITIONS';
export function receiveConditions(data){
  return {
    type: RECEIVE_CONDITIONS,
    payload: data,
    isFetching: false
  }
}

export const REQUEST_CONDITIONS = 'REQUEST_CONDITIONS';
export function requestConditions(){
  return {
    type: REQUEST_CONDITIONS,
    isFetching: true
  }
}


export function fetchConditionsFromFB(){
  return (dispatch) => {
    dispatch(requestConditions());
    fbref.on('value', snapshot => {
      const data = [];
      snapshot.forEach(item => {
        data.push({
          id: item.key(),
          fields: item.val()
        });
      });
      dispatch(receiveConditions(data));
    }, error => {
      console.log("The read failed: " + error.code);
    });
  }
}
