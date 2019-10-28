import './login.css';
import "../../assets/css/tailwind.css"
import "../../assets/css/login.css"
import im_logo_mail_sm from "../../assets/media/im_logo_mail_sm.png"
import {Link} from 'react-router-dom'
import React, {Component} from 'react';
import Session from '../../Session'

export default class extends Component {
  render() {
    return (
      <div>
        <div className="container mx-auto">
        </div>
        <div className="main w-full">
          <Link to='/'>
            <img src={im_logo_mail_sm} alt=""/>
          </Link>
          <h1 className="heading-primary py-8">
            Sign In
          </h1>
          <form action="/login" method="POST">
            <input className="mb-12 lg-ips" type="email" name="username" placeholder="email"/>
            <input className="mb-24 lg-ips" type="password" name="password" placeholder="password"/>
            <Link to='/dashboard'><button className="button float-right">Submit</button></Link>
          </form>
          <p className="inline-block">No account? <a style={{color: "#5D78FF"}} href="/register">Create one!</a></p>
          <a className="absolute text-white" style={{right: 0, bottom: "-5rem"}} href="/">Return to the main site</a>
        </div>
        {/*<Session/>*/}
      </div>
    )
  }
}