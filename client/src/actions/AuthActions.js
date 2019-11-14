import { LOGIN, REGISTER  } from "../constants/ActionConstants";
  
export const login = (usename, password) => ({
  type: LOGIN,
  payload: {usename, password}
});