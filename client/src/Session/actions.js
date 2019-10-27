const actions = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESSFULLY: 'LOGIN_SUCCESSFULLY',
  REMOVE_CURRENT_USER: 'REMOVE_CURRENT_USER',
  login: (email, password) => {
    return  {
      type: actions.LOGIN,
      payload: {email, password}
    }
  },
}

export default actions
