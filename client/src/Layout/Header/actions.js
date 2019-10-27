const actions = {
  LOGOUT: 'LOGOUT',
  FETCH_CURRENT_USER: 'FETCH_CURRENT_USER',
  logout: () => {
    return  {
      type: actions.LOGOUT
    }
  },
  fetchCurrentUser: () => {
    return  {
      type: actions.FETCH_CURRENT_USER
    }
  },

}

export default actions
