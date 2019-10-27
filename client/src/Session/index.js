import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from './actions'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import { reduxForm, Field } from 'redux-form';
import {validate} from './validate'
import {Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText} from '@material-ui/core';

const {login} = actions;
const renderField = (field) => {
  return (
    <div style={{marginBottom: '20px'}}>
      <TextField
        {...field.input}
        {...field}
        fullWidth
      />
      {field.meta.touched && field.meta.error && <span className="error">{field.meta.error}</span>}
    </div>
  )
}

const rand = () => {
  return Math.round(Math.random() * 20) - 10;
}

const getModalStyle = ()=> {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


class Index extends Component {
  login = ({email, password}) => {
    this.props.login(email, password)
  }

  handleClose(){
    this.props.closeSuccessMessage()
    this.props.reset()
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <div className='pd-30'>
        <Grid container>
          <Grid item sm={6}>
            <form onSubmit={handleSubmit(this.login.bind(this))} className="form-signup">
              <FormGroup>
                <Field name="email" type="text"  label="Email" component={renderField}/>
              </FormGroup>
              <FormGroup>
                <Field name="password" type="password" label="Password" component={renderField}/>
              </FormGroup>
              <FormGroup>
                <Button  variant="contained" color="primary" type="submit" disabled={pristine || submitting}>
                  Login
                </Button>
              </FormGroup>
            </form>
          </Grid>
        </Grid>
      </div>
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
  fields: ['email', 'password'],
  validate,
})(Index));