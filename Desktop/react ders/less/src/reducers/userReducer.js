import { UPDATE_USER ,GET_USER_ERROR} from '../actions/userAction';

/*export default function userReducer(state='', action) {
    switch (action.type) {
      case UPDATE_USER:
        return action.payload.user;  
      default:
        return state;
    }  
  }*/
  
export default function userReducer(state='', {type,payload}) {
    switch (type) {
      case UPDATE_USER:
        return payload.user;  
        case GET_USER_ERROR:
          return payload.user; 
      default:
        return state;
    }  
  }