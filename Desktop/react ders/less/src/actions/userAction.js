//Step-1 Define Action Type
export const UPDATE_USER = "UPDATE_USER"; 
//Step-2 Define Action Creator
//Step-3 Define Action(return)
export function updateUser(newUser) {
  return {
    type: UPDATE_USER,
    payload: { user: newUser },
  };
}

