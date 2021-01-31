import axios from "axios";

//Step-1 Define Action Type
export const UPDATE_USER = "UPDATE_USER"; 
export const GET_USER_ERROR = "GET_USER_ERROR"; 
//Step-2 Define Action Creator
//Step-3 Define Action(return)
export function updateUser(newUser) {
  return {
    type: UPDATE_USER,
    payload: { user: newUser },
  };
}

export function showError() {
  return {
    type: GET_USER_ERROR,
    payload: { error: "Error Text..." },
  };
}
export function getUsers(){
  return dispatch=>{
    axios.get('http://jsonplaceholder.typicode.com/users/1')
    .then(response=>response.data)
    .then(response=>dispatch(updateUser(response.name)))
    .catch(error=>dispatch(showError()))
  }
}
