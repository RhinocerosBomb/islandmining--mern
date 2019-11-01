import {fetchApi} from "../helpers/api";

export const validate = (values) => {
  const errors = {};
  if (!values) {
    return errors;
  }

  // validate email
  if (!values.email) {
    errors.email = 'Email is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  // validate password
  if (!values.password) {
    errors.password = 'Password is required'
  } else {
    const pwd = values.password.toString();
    if(pwd.length < 8) {
      errors.password = 'Password must consist of a minimum of 8 characters, with at least one special character and one uppercase letter.'
    }
  }
  return errors;
};
