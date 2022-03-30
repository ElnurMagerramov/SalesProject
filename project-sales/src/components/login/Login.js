import React, { Component } from 'react'
import './login.css'
import LoginForm from './LoginForm'
import LoginHeader from './LoginHeader'
// import { connect } from "react-redux";
// import { bindActionCreators } from 'redux';
// import * as loginActions from '../../redux/actions/loginActions'
class Login extends Component {
    render() {
        
        return (
            <div className='container login'>
                <LoginHeader/>
                <br/>
                <LoginForm/>
                
            </div>
        )
    }
}
// export function getUserEmail(users, userEmail) {
//     let user = users.find(user => user.userEmail == userEmail) || null;
//     return user;
//   }

// function mapStateToProps(state,ownProps) {
//     const userEmail=ownProps.match.params.userEmail;
// 	return {
// 		users: state.users.find(user => user.userEmail === userEmail)}
//     // const user=userEmail && state.loginReducer.length>0
//     // ?getUserEmail(state.loginReducer,userEmail):{}
//     // return{
//     //     user,
//     //     users: state.loginReducer
//     // }
// }
// function mapDispatchToProps(dispatch) {
//     return {
//         actions: {
//             getUsers: bindActionCreators(
//                 loginActions.getUsers,
//                 dispatch
//             )
//         }
//     }
// }
// const mapStateToProps = (state) => {
// 	return {
// 		users: state.users
// 	}
// };

export default Login;