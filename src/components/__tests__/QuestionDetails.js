import { mapStateToProps } from "../QuestionDetails";
import QuestionDetails from "../QuestionDetails";
import renderer from "react-test-renderer";
import React from "react";
import getStore from "../../getStore";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

//create history for connected router and pass it to store
const history = createHistory();

describe("The QuestionList Component", () => {
  describe("the container element", () => {
    describe("mapstatetoprops", () => {
      it("should map the state to props correctly", () => {
        const sampleQuestion = {
          question_id: 42,
          body: "Resutanrant the end of the galaxy",
        };
        const appState = {
          questions: [sampleQuestion],
        };
        const ownProps = {
          question_id: 42,
        };
        const componentState = mapStateToProps(appState, ownProps);
        console.log(componentState);
        expect(componentState).toEqual(sampleQuestion);
      });
    });
  });
  describe("The display element", () => {
    it("should not regress", () => {
      const sampleQuestion = {
        question_id: 42,
        body: "Resutanrant the end of the galaxy",
      };
      const appState = {
        questions: [sampleQuestion],
      };
      const ownProps = {
        question_id: 42,
      };
      const componentState = mapStateToProps(appState, ownProps);
      const store = getStore(componentState);
      const tree = renderer
        .create(
          <Provider store={store}>
            <ConnectedRouter history={history}>
              <QuestionDetails
                title="Answer to life"
                body="42"
                answer_count="1"
                is_answered="true"
                answer_id="46234"
                tags={["react", "life"]}
                {...componentState}
              />
            </ConnectedRouter>
          </Provider>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
