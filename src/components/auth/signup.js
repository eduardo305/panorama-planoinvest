import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {

  handleFormSubmit(formProps) {
    this.props.signupUser(formProps);
  }

  render() {
    const { handleSubmit, fields: { email, password, passwordConfirm} } = this.props;

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
          { password.touched && email.error && <div className="error">{ password.error }</div> }
        </fieldset>

        <fieldset className="form-group">
          <label>Confirm Password:</label>
          <input className="form-control" { ...passwordConfirm } type="password" />
          { passwordConfirm.touched && email.error && <div className="error">{ passwordConfirm.error }</div> }
        </fieldset>

        <button action="submit" className="btn btn-primary">Sign up!</button>
      </form>
    );
  }
}

function mapStateToPropos(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm']
}, mapStateToPropos, actions)(Signup);
