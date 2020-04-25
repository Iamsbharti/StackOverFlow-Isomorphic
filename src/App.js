import React from "react";
import { connect } from "react-redux";
const App = ({ test }) => (
  <div>
    <h3>StackOver Flow : {test}</h3>
  </div>
);
const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps)(App);
