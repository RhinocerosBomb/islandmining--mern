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
import {asyncValidate} from './async_validate'
import {Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText} from '@material-ui/core';

const {signUp, closeSuccessMessage} = actions;
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
  signUp = ({email, password}) => {
    this.props.signUp(email, password)
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
            <form onSubmit={handleSubmit(this.signUp.bind(this))} className="form-signup">
              <FormGroup>
                <Field name="email" type="text"  label="Email" component={renderField}/>
              </FormGroup>
              <FormGroup>
                <Field name="password" type="password" label="Password" component={renderField}/>
              </FormGroup>
              <FormGroup>
                <Button  variant="contained" color="primary" type="submit" disabled={pristine || submitting}>
                  Sign Up
                </Button>
              </FormGroup>
            </form>
          </Grid>
        </Grid>
        <Dialog
          open={this.props.success}
          onClose={this.handleClose.bind(this)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Sign Up Successfully"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              You have sign up successfully. An email has been sent to your mailbox. Please confirm your registration by following the guide in the email
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose.bind(this)} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  success: state.signUpReducer.success
});

export default connect(
  mapStateToProps, {signUp, closeSuccessMessage}
)(reduxForm({
  form: 'signUp',
  fields: ['email', 'password'],
  validate,
  asyncValidate,
})(Index));