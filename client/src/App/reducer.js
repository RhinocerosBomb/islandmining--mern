const initState = {
  user: {}
};

export default function appReducer(state = initState, action) {
  switch (action.type) {
    case 'TEST':
    default:
      return state;
  }
}
