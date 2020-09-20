import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Home from "./Components/home/Home";
import Inbox from "./Components/Inbox/inbox";
import Sidebar from "./Components/common/sideBar/sidebar";
import history from "./store/history";
export default function Routes() {
  return (
    <Router history={history}>
      <Sidebar>
        <Route exact path="/" component={Home} />
        <Route path="/inbox" component={Inbox} />
      </Sidebar>
    </Router>
  );
}
