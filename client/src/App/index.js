import './app.css';
import "../assets/css/tailwind.css"
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {store, history} from '../redux/store';
import PublicRoutes from '../router';
import {isLoggedIn} from '../helpers/api'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='site-content'>
          <PublicRoutes history={history} isLoggedIn={isLoggedIn()}/>
        </div>
      </Provider>
    );
  }
}
export default App;
