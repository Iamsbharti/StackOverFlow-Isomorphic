import React from "react";
import Question from "./components/Question";
import QuestionDetails from "./components/QuestionDetails";
import { Link, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import TagsRelatedQuestions from "./components/TagsRelatedQuestions";
import Authentication from "./Auth/Authentication";
import NotificationViewer from "./components/NotificationViewer";

//Initiate authentication

const App = (history) => {
  const auth = new Authentication(history);
  return (
    <div>
      <Link to="/">
        <h3 className="jumbotron mt-4" style={{ color: "blue" }}>
          StackOverFlow Questions
        </h3>
      </Link>
      <div>
        <NotificationViewer />
      </div>
      <Route exact path="/" render={() => <Question auth={auth} />} />
      <Route
        exact
        path="/questions/:id"
        render={({ match }) => (
          <QuestionDetails question_id={match.params.id} />
        )}
      />
      <Route
        exact
        path="/tags/:tag"
        render={({ match }) => <TagsRelatedQuestions tag={match.params.tag} />}
      />
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  ...state,
});

export default connect(mapStateToProps)(App);
