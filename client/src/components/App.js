import './app.css';
import '../assets/css/tailwind.css';
import React, { useReducer } from 'react';
import PublicRoutes from '../router';
import { Provider } from 'react-redux';
import { store, history } from '../store';
import { isLoggedIn } from '../helpers/api';

function App() {
  return (
    <Provider store={store}>
      <div className="site-content">
        <PublicRoutes history={history} isLoggedIn={isLoggedIn()} />
      </div>
    </Provider>
  );
}

export default App;
