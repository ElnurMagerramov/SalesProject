import React from 'react'
import { Link } from 'react-router-dom';
import "./login.css"

const LoginCreateAccount = ({history, ...props}) => {

  const onSave=()=>{
    //helelik sadece bu

    history.push("/login")
  }
  return (

    <section className="h-100 h-custom gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card card-registration card-registration-2" style={{ borderRadius: "15px" }}>
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="p-5">
                      <h3 className="fw-normal mb-5" style={{ color: "#4835d4" }}>General Infomation</h3>

                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">

                          <div className="form-outline">
                            <label className="form-label" htmlFor="firstName">First name</label>
                            <input required type="text" id="firstName" className="form-control form-control-lg"/>
                          </div>

                        </div>
                        <div className="col-md-6 mb-4 pb-2">

                          <div className="form-outline">
                            <label className="form-label" htmlFor="lastName">Last name</label>
                            <input type="text" id="lastName" className="form-control form-control-lg" />

                          </div>

                        </div>
                      </div>

                      <div className="mb-4 pb-2">
                        <div className="form-outline">
                          <p className="mb-0 me-4">Gender </p>

                          <div className="form-check form-check-inline mb-0 me-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="femaleGender"
                              value="option1"
                            />
                            <label className="form-check-label" htmlFor="femaleGender">Female</label>
                          </div>

                          <div className="form-check form-check-inline mb-0 me-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="maleGender"
                              value="option2"
                            />
                            <label className="form-check-label" htmlFor="maleGender">Male</label>
                          </div>

                          <div className="form-check form-check-inline mb-0">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="otherGender"
                              value="option3"
                            />
                            <label className="form-check-label" htmlFor="otherGender">Other</label>
                          </div>

                        </div>
                      </div>

                      <div className="mb-4 pb-2">
                        <div className="form-outline form-white">
                          <label className="form-label" htmlFor="street">Street + Nr</label>
                          <input type="text" id="street" className="form-control form-control-lg" />
                        </div>
                      </div>

                      

                      <div className="row">
                        <div className="col-md-5 mb-4 pb-2">

                          <div className="form-outline form-white">
                            <label className="form-label" htmlFor="zipcode">Zip Code</label>
                            <input type="text" id="zipcode" className="form-control form-control-lg" />
                            
                          </div>

                        </div>
                        <div className="col-md-7 mb-4 pb-2">

                          <div className="form-outline form-white">
                            <label className="form-label" htmlFor="city">City</label>
                            <input type="text" id="city" className="form-control form-control-lg" />
                          </div>

                        </div>
                      </div>

                      <div className="mb-4 pb-2">
                        <div className="form-outline form-white">
                          <label className="form-label" htmlFor="country">Country</label>
                          <input type="text" id="country" className="form-control form-control-lg" />
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="col-lg-6 bg-indigo text-white">
                    <div className="p-5">
                      <h3 className="fw-normal mb-5">Contact Details</h3>

                      

                      <div className="row">
                        <div className="col-md-3 mb-4 pb-2">

                          <div className="form-outline form-white">
                            <label className="form-label" htmlFor="code">Code +</label>
                            <input type="number" id="code" className="form-control form-control-lg" />
                          </div>

                        </div>
                        <div className="col-md-9 mb-4 pb-2">

                          <div className="form-outline form-white">
                            <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                            <input type="number" id="phoneNumber" className="form-control form-control-lg" />
                            
                          </div>

                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="form-outline form-white">
                          <label className="form-label" htmlFor="email">Your Email</label>
                          <input type="email" id="email" className="form-control form-control-lg" />
                        </div>
                      </div>
                      <div className="mb-4 pb-2">
                        <div className="form-outline form-white">
                          <label className="form-label" htmlFor="password">Password</label>
                          <input type="password" id="password" className="form-control form-control-lg" />
                          
                        </div>
                      </div>
                      <div className="form-check d-flex justify-content-start mb-4 pb-3">
                        <input
                          className="form-check-input me-3"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                        />
                        <label className="form-check-label text-white" htmlFor="form2Example3">
                          I do accept the <Link to="/createaccount/termandconditions" className="text-white"><u>Terms and Conditions</u></Link> of website.
                        </label>
                      </div>

                      <button onClick={onSave} type="button" className="btn btn-light btn-lg" data-mdb-ripple-color="dark">Register</button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    

  )
}

// ReactDOM.render(
//   <LoginForgetPassword />,
//   
// )
export default LoginCreateAccount;