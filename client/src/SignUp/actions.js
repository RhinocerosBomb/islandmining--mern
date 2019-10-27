const actions = {
  SIGN_UP: 'SIGN_UP',
  RESET_SIGN_UP_FORM: 'RESET_SIGN_UP_FORM',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',

  signUp: (email, password) => {
    return  {
      type: actions.SIGN_UP,
      payload: {email, password}
    }
  },
  closeSuccessMessage: () => {
    return  {
      type: actions.RESET_SIGN_UP_FORM,
    }
  },
}

export default actions
