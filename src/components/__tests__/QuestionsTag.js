import React from "react";
import renderer from "react-test-renderer";
import QuestionsTag from "../QuestionsTag";
import getStore from "../../getStore";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

//create history for connected router and pass it to store
const history = createHistory();
describe("Test QuestionTag component using snapshot-test", () => {
  it("should render correctly and not regress the QuestionTag Component", () => {
    const questionTagTree = renderer.create(
      <Provider store={getStore()}>
        <ConnectedRouter history={history}>
          <QuestionsTag tags={["react", "html"]} />
        </ConnectedRouter>
      </Provider>
    );
    expect(questionTagTree.toJSON()).toMatchSnapshot();
  });
});
