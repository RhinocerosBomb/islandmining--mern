import './login.css';
import "../../assets/css/tailwind.css"
import "../../assets/css/login.scss"
import im_logo_mail_sm from "../../assets/media/im_logo_mail_sm.png"
import {Link} from 'react-router-dom'
import React, {Component} from 'react';
import Session from '../../Session'
import {Field} from "redux-form";

const renderField = (field) => {
  return (
    <div>
      <input
        {...field.input}
        {...field}
      />
      {field.meta.touched && field.meta.error && <span className="error">{field.meta.error}</span>}
    </div>
  )
}
export default class extends Component {
  render() {
    return (
      <div className='login-form'>
        <div className="container mx-auto">
        </div>
        <div className="main w-full">
          <Link to='/'>
            <img src={im_logo_mail_sm} alt=""  width={197}/>
          </Link>
          <h1 className="heading-primary">
            Sign In
          </h1>
          <Session/>
          <Link className="absolute text-white" style={{right: 0, bottom: "-35px"}} to="/">Return to the main site</Link>
        </div>
      </div>
    )
  }
}