import actions from '../actions/LoginActions';

const initState = {
  currentUser: null
};

export default function appReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESSFULLY:
      return { ...state, currentUser: action.payload };
    case actions.REMOVE_CURRENT_USER:
      return { ...state, currentUser: null };
    default:
      return state;
  }
}
