import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { history } from '../store'
import { Link } from 'react-router-dom'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import signIn from '../actions/users/sign-in'
import Title from '../components/Title'

const dialogStyle = {
  width: '400px',
  margin: '50px auto',
  padding: '2rem',
}

const buttonStyle = {
  float: 'right',
  marginLeft: '2rem',
}

export class SignIn extends PureComponent {
  constructor(){
    super()
    this.state = {}
  }

  submitForm(event) {
    event.preventDefault()
    if (this.validateAll()) {
      const user = {
        email: this.refs.email.value,
        password: this.refs.password.value
      }
      this.props.signIn(user)
    }
  }

  signUp() {
    history.push('/sign-up')
  }

  validateAll() {
    return this.validateEmail() &&
      this.validatePassword()
  }

  validateEmail(){
    const { email } = this.refs

    if (email.value.match(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+$/)) {
      this.setState({
        emailError: null
      })
      return true
    }

    if (email.value === '') {
      this.setState({
        emailError: 'Please provide your email address'
      })
      return false
    }

    this.setState({
      emailError: 'Please provide a valid email address'
    })
    return false
  }

  validatePassword(){
    const { password } = this.refs

    if (password.value.length < 6) {
      this.setState({
        passwordError: 'Password is too short'
      })
      return false
    }

    if (password.value.match(/[a-zA-Z]+/) && password.value.match(/[0-9]+/)) {
      this.setState({
        passwordError: null
      })
      return true
    }

    this.setState({
      passwordError: 'Password should contain both letters and numbers'
    })
    return false
  }

  render() {
    return (
      <Paper style={ dialogStyle }>
        <Title content="Sign In" />

        <form onSubmit={this.submitForm.bind(this)}>

         <div className="input">
           <TextField ref="email" type="email" hintText="Email address" onChange={this.validateEmail.bind(this)} />
           {this.state.emailError ? <p className="formError">{ this.state.emailError}</p> : null }
         </div>

         <div className="input">
           <TextField ref="password" type="password" hintText="Password" onChange={this.validatePassword.bind(this)} />
           {this.state.passwordError ? <p className="formError">{ this.state.passwordError}</p> : null }
         </div>
         <Link to="/sign-up">
          <Button
            color="primary"
            onClick={ this.signUp }
            label="Sign up" >
          </Button>
          </Link>

         <Button raised color="primary"
            style={ buttonStyle }
            onClick={ this.submitForm.bind(this) }
            label="Sign In"
            primary={true} />
        </form>
      </Paper>
    )
  }
}

export default connect(null, { signIn })(SignIn)
