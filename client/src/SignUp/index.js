import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './actions';
import { reduxForm, Field } from 'redux-form';
import { validate } from './validate';
// import {asyncValidate} from './async_validate'
import { Link } from 'react-router-dom';
import im_logo_mail_sm from '../assets/media/im_logo_mail_sm.png';

const { signUp, closeSuccessMessage } = actions;
const renderField = field => {
  return (
    <div>
      <input {...field.input} {...field} />
      {field.meta.touched && field.meta.error && (
        <span className="error">{field.meta.error}</span>
      )}
    </div>
  );
};

class Index extends Component {
  signUp = ({ username, password }) => {
    console.log(this.props);
    this.props.signUp(username, password);
  };

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div>
        <div className="container mx-auto"></div>
        <div className="main w-full">
          <Link to="/">
            <img src={im_logo_mail_sm} alt="" width={197} />
          </Link>
          <h1 className="heading-primary">Create Account</h1>
          <form
            onSubmit={handleSubmit(this.signUp.bind(this))}
            className="form-signup"
          >
            <Field
              className="lg-ips"
              type="text"
              name="username"
              placeholder="email"
              component={renderField}
            />
            <div className="mb-12" />
            <Field
              className="lg-ips"
              type="password"
              name="password"
              placeholder="password"
              component={renderField}
            />
            <div className="term-container">
              <div className="term-condition">
                <input type="checkbox" />
                <span className="cb-label">
                  I agree to the Island Mining Terms of Service and Privacy
                  Policy.
                </span>
              </div>
              <div className="term-condition">
                <input type="checkbox" />
                <span className="cb-label">
                  I would like to receive updates on Island Mining and the
                  Mining Coin token sale.
                </span>
              </div>
            </div>
            <button
              className="button"
              variant="contained"
              color="button"
              type="submit"
              disabled={pristine || submitting}
            >
              Register
            </button>
          </form>
          <Link
            to="/"
            className="absolute text-white"
            style={{ right: 0, bottom: '-35px' }}
          >
            Return to the main site{' '}
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  success: state.signUpReducer.success
});

export default connect(
  mapStateToProps,
  { signUp, closeSuccessMessage }
)(
  reduxForm({
    form: 'signUp',
    fields: ['username', 'password'],
    validate
  })(Index)
);
