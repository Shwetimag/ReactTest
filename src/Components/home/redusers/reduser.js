import * as types from "../../../utilActions/actionTypes";

const initialState = {
  UserName: "",
  message:''
};

export default function HomeReducer(state = initialState, action) {
  switch (action.type) {
    case types.USER_NAME:
      return {
        UserName: action.payload
      };
    case types.USER_DATA:
      debugger;
      return {
        masterData:action.payload
      }
    case types.GET_USER_DATA:
      debugger;
      return{
        userdata:action.payload
      }
    case types.USER_ADDED_SUCCESSFULLY:
      return{
        message:action.payload
      }
    default:
      return initialState;
  }
}
