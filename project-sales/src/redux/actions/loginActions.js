import * as actionTypes from "./actionTypes";
// import axios from 'axios'
// export function loginToSite(users){
//     return{
//         type:actionTypes.LOGIN_TO_SITE,
//         payload:users
//     }
// }
// export function addUser(userName){
//     return{
//         type:actionTypes.ADD_USER,
//         payload:userName
//     }
// }
export function getUsersSuccess(users){
    return {type: actionTypes.GET_USERS_SUCCESS, payload: users}
}
export function getUsers() {
    return function(dispatch) {
      let url = "http://localhost:3000/users";
      return fetch(url)
        .then(response => response.json())
        .then(result => dispatch(getUsersSuccess(result)));
    };
  }
  
// export const getUsers=async()=>{
   
//     return (dispatch) => {
// 		axios.get('"http://localhost:3000/users"')
// 			.then(({ data }) => {
// 				dispatch(loginToSite(data))
// 			})
// 	}
// }
