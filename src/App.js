import React from "react";
import Question from "./components/Question";
import QuestionDetails from "./components/QuestionDetails";
import { Link, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
const App = () => (
  <div>
    <h3 className="jumbotron mt-4" style={{ color: "blue" }}>
      <Link to="/">StackOverFlow Questions</Link>
    </h3>

    <Route exact path="/" render={() => <Question />} />
    <Route
      exact
      path="/questions/:id"
      render={({ match }) => <QuestionDetails question_id={match.params.id} />}
    />
  </div>
);
const mapStateToProps = (state, ownProps) => ({
  ...state,
});

export default connect(mapStateToProps)(App);
