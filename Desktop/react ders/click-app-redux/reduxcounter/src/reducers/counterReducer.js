import { INCREASE_COUNT, DECREASE_COUNT } from '../actions/counterAction'
const initialState={
  count:0,
}
export default function countReducer(state=initialState,action){
  switch (action.type){
    case INCREASE_COUNT:
      return {count:state.count+action.payload.count};
      case DECREASE_COUNT:
        return {count:state.count-action.payload.count};
        default:
          return state;
    }
  }
