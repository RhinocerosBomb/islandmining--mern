import "../../assets/css/login.scss"
import './signUp.css';
import React, {Component} from 'react';
import SignUp from '../../SignUp'

export default class extends Component {
  render() {
    return (
      <div className='login-form'>
        <SignUp/>
      </div>
    )
  }
}