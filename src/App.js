import React from "react";
import PropTypes from "prop-types";
import Sidebar from "./Components/common/sideBar/sidebar";
function App() {
  return (
    <div>
      <Sidebar />
      {/* {this.props.children} */}
    </div>
  );
}
App.propTypes = {
  children: PropTypes.any
};

export default App;
