import axios from './axios';

export const URL = 'http://localhost:9000/';
export const DASHBOARD_PATH = 'dashboard';

export function dashboard(email, password) {
  return axios.get(URL + DASHBOARD_PATH);
}
