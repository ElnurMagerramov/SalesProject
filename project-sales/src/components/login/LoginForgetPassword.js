import React, { Component } from 'react'
import LoginForgetPasswordModal from '../modals/LoginForgetPasswordModal'
import Login from './Login'

export default class LoginForgetPassword extends Component {
  render() {
    return (
      <div>
        <Login/>
        <LoginForgetPasswordModal/>
      </div>
    )
  }
}
