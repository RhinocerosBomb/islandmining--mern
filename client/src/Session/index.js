import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from './actions'
import { reduxForm, Field } from 'redux-form';
import {validate} from './validate'

const {login} = actions;
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

class Index extends Component {
  login = ({username, password}) => {
    this.props.login(username, password)
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <form onSubmit={handleSubmit(this.login.bind(this))} className="form-signup">
        <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end'}}>
          <div className='left-form'>
            <Field className="lg-ips mb-12" type="text" name="username" placeholder="email" component={renderField}/>
            <Field className="lg-ips" type="password" name="password" placeholder="password" component={renderField}/>
            <p style={{marginTop: '30px'}}><a style={{color: "#5D78FF"}} href="/register">Forgot password?</a></p>
            <p>No account? <a style={{color: "#5D78FF"}} href="/register">Create one!</a></p>
          </div>
          <div className='right-form'>
            <button className="button">Sign In</button>
          </div>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  success: state.sessionReducer.success
});

export default connect(
  mapStateToProps, {login}
)(reduxForm({
  form: 'login',
  fields: ['username', 'password'],
  validate,
})(Index));