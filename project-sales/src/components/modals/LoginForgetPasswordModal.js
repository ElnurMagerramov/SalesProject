import React from 'react'
import ReactDOM from 'react-dom';

const LoginForgetPasswordModal = (props) => {

  return (
    ReactDOM.createPortal(
      <div className='ui dimmer show modals visible active'>
        <form className='ui raised very padded text container segment'>
          
          <div className="form-outline">
            <label className="form-label" htmlFor='forgetPassword'>Write your email adress:</label><br />
            <input required id="forgetPassword" type="email" placeholder='example@gmail.com' className="form-control" /><br />
            <button className='btn btn-primary'>Send message</button>
          </div>
        </form>
      </div>, document.getElementById('modal')
    )
  )
}

export default LoginForgetPasswordModal;