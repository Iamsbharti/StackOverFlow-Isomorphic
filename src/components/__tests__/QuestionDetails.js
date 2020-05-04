import { mapStateToProps } from "../QuestionDetails";
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
});
