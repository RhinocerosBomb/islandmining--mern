import actions from '../actions/SignUpActions';

const initState = {
  success: false
};

export default function appReducer(state = initState, action) {
  switch (action.type) {
    case actions.SIGN_UP_SUCCESS:
      return { ...state, success: true };
    case actions.RESET_SIGN_UP_FORM:
      return { ...state, success: false };
    default:
      return state;
  }
}
