import im_logo_mail_sm from '../../assets/media/im_logo_mail_sm.png';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions/LoginActions';
import '../../assets/css/tailwind.css';
import '../../assets/css/login.scss';
const { login } = actions;

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = ({ username, password }) => {
    props.login(username, password);
  };

  return (
    <div className="login-form">
      <div className="container mx-auto"></div>
      <div className="main w-full">
        <Link to="/">
          <img src={im_logo_mail_sm} alt="" width={197} />
        </Link>
        <h1 className="heading-primary">Sign In</h1>
        <form onSubmit={login} className="form-signup">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end'
            }}
          >
            <div className="left-form">
              <input
                className="lg-ips mb-12"
                type="text"
                name="username"
                placeholder="email"
              />
              <input
                className="lg-ips"
                type="password"
                name="password"
                placeholder="password"
              />
              {
                <p style={{ marginTop: '30px' }}>
                  <a style={{ color: '#5D78FF' }} href="/register">
                    Forgot password?
                  </a>
                </p>
              }
              <p>
                No account?{' '}
                <a style={{ color: '#5D78FF' }} href="/register">
                  Create one!
                </a>
              </p>
            </div>
            <div className="right-form">
              <button className="button">Sign In</button>
            </div>
          </div>
        </form>
        <Link
          className="absolute text-white"
          style={{ right: 0, bottom: '-35px' }}
          to="/"
        >
          Return to the main site
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  success: state.sessionReducer.success
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
