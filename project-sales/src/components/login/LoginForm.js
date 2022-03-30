import React, { Component } from 'react'
import { faFacebook,faGithub,faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';



export default class LoginForm extends Component {
  render() {
    return (
      <div>
          <form className='loginform mb-5 pb-5'>
                    {/* Email input */}
                    <div className="form-outline mb-4">
                        <input type="email" id="email" className="form-control" />
                        <label className="form-label" htmlFor='email'>Email address</label>
                    </div>

                    {/* Password input */}
                    <div className="form-outline mb-4">
                        <input type="password" id="password" className="form-control" />
                        <label className="form-label" htmlFor="password">Password</label>
                    </div>

                    {/* 2 column grid layout for inline styling */}
                    <div className="row mb-4">
                        <div className="col d-flex justify-content-center">
                            {/*  Checkbox */}
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="checkbox"
                                    
                                />
                                <label className="form-check-label" htmlFor="checkbox"> Remember me </label>
                            </div>
                        </div>

                        <div className="col">
                            {/* Simple link */}
                            <Link to="/login/forgetpassword">Forgot password?</Link>
                        </div>
                    </div>

                    {/* Submit button */}
                    <button type="button" className="btn btn-primary btn-block mb-4 col-12">Sign in{this.props.user}</button>

                    {/* Register buttons */}
                    <div className="text-center">
                        <p>Not a member?
                            <Link to="/createaccount">Register</Link>
                        </p>
                        <p>or sign up with:</p>
                        <button type="button" className="btn btn-link btn-floating mx-1">
                            <FontAwesomeIcon icon={faFacebook}/>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                            <FontAwesomeIcon icon={faGoogle}/>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                            <FontAwesomeIcon icon={faTwitter}/>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                            <FontAwesomeIcon icon={faGithub}/>
                        </button>
                    </div>
                </form><br/>
      </div>
    )
  }
}
