import './app.css';
import '../assets/css/tailwind.css';
import React, { useReducer } from 'react';
import PublicRoutes from '../router';
import { Provider } from 'react-redux';
import { isLoggedIn } from '../helpers/api';

function App({ history }) {
  return (
    <div className="site-content">
      <PublicRoutes history={history} isLoggedIn={isLoggedIn()} />
    </div>
  );
}

export default App;
