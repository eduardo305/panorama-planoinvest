import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import _ from 'lodash';
import * as actions from '../../actions';

class Signup extends Component {

  handleFormSubmit(formProps) {
    if (_.isEmpty(this.props.errors)) {
      this.props.signupUser(formProps);
    }
  }

  renderAlert(){
    if (this.props.errorMessage) {
      return (
        <div className ="alert alert-danger">
          <strong>Oops!</strong> { this.props.errorMessage }
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, submitting, fields: { email, password, passwordConfirm} } = this.props;

    return (
      <form onSubmit = { handleSubmit(this.handleFormSubmit.bind(this)) }>
        <fieldset className="form-group">
          <label>Email:</label>
          <input className="form-control" { ...email } />
          { email.touched && email.error && <div className="error">{ email.error }</div> }
        </fieldset>

        <fieldset className="form-group">
          <label>Password:</label>
          <input className="form-control" { ...password } type="password" />
          { password.touched && password.error && <div className="error">{ password.error }</div> }
        </fieldset>

        <fieldset className="form-group">
          <label>Confirm Password:</label>
          <input className="form-control" { ...passwordConfirm } type="password" />
          { passwordConfirm.touched && passwordConfirm.error && <div className="error">{ passwordConfirm.error }</div> }
        </fieldset>

        { this.renderAlert() }
        <button type="submit" disabled={ submitting } className="btn btn-primary">
          { submitting ? <i/> : <i/>} Sign up!
        </button>
      </form>
    );
  }
}

function validate(formProps) {
  const errors = [];

  if (!formProps.email) {
    errors.email = 'Please enter an e-mail';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formProps.email)) {
    errors.email = 'Please enter a valid e-mail address';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.passwordConfirm = 'Passwords must match';
  }

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

Signup.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps, actions)(Signup);
