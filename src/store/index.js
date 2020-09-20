import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import HomeReducer from "../Components/home/redusers/reduser";

const combinedReducers = combineReducers({
  HomeReducer: HomeReducer
});

const store = createStore(
  combinedReducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
