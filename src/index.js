import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./Router";
import axios from 'axios';
axios.defaults.baseURL = 'https://reqres.in/api';
axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyTmFtZSI6ImJyaWdodGNhcmVhZG1pbiIsIlVzZXJJRCI6IjIiLCJTdGFmZklEIjoiMSIsIk9yZ2FuaXphdGlvbklEIjoiMiIsIlJvbGVJRCI6IjUiLCJMb2NhdGlvbiI6IjEiLCJzdWIiOiJicmlnaHRjYXJlYWRtaW4iLCJqdGkiOiJlNzAzZmU1ZS01ZjE1LTQwMWEtYWVkNS0yNTlmNjBlNzQ3MWEiLCJIZWFsdGhDYXJlIjoiSUFtQXV0aG9yaXplZCIsIm5iZiI6MTYwMDIzOTM1NywiZXhwIjoxNjAxNTM1MzU3LCJpc3MiOiJTdXBlckF3ZXNvbWVUb2tlblNlcnZlciIsImF1ZCI6Imh0dHBzOi8vd3d3LnN0YWdpbmd3aW4uY29tOjQzMzE2LyJ9.jSVftU7ksN5r4BLqDDqtHFqUmgW5To9pOuDM32TLA8w';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
