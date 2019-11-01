const actions = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESSFULLY: 'LOGIN_SUCCESSFULLY',
  REMOVE_CURRENT_USER: 'REMOVE_CURRENT_USER',
  login: (username, password) => {
    return  {
      type: actions.LOGIN,
      payload: {username, password}
    }
  },
}

export default actions
