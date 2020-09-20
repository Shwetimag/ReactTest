import * as types from "../../../utilActions/actionTypes";
import axios from 'axios';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export function fetchName(data) {
 
  return function(dispatch) {
    dispatch(createActioncreaters(types.USER_NAME, data));
  };
}

export function getMasterData(data) {
 debugger;
 return function(dispatch){
  return axios.post(`http://52.25.96.244:7044/api/agency/MasterData/MasterDataByName?masterDataNames=`+ data)
  .then(res => {
    const persons = res.data.data;
    
      dispatch(createActioncreaters(types.USER_DATA, persons));
   
  })
  .catch(err => {throw err;});
}
}
 
export function GetUserById(data) {
  debugger;
  return function(dispatch){
   return axios.get(`http://52.25.96.244:7044/api/agency/Staffs/GetStaffById?id=`+ data)
   .then(res => {
     debugger;
     const persons = res.data.data;
     
       dispatch(createActioncreaters(types.GET_USER_DATA, persons));
    
   })
   .catch(err => {throw err;});
 }
}

export function CreateUpdateUser(data) {
  debugger;
  return function(dispatch){
   return axios.post(`http://52.25.96.244:7044/api/agency/staffs/CreateUpdateStaff`, data)
   .then(res => {
     debugger;
     if(res.data.statusCode == 200){
      dispatch(createActioncreaters(types.USER_ADDED_SUCCESSFULLY, res.data.message));

     }

    
   })
   .catch(err => {throw err;});
 }
}
export function createActioncreaters(type, payload) {
  return {
    type: type,
    payload: payload
  };
}
