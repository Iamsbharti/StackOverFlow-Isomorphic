import { questions } from "./questions";

describe("Testing Reducers", () => {
  it("should not change state on unrecognized actions", () => {
    const state = ["react", "nodejs"];
    const newState = questions(state, { type: "UNRECOGNIZED_ACTION" });

    expect(state).toEqual(newState);
  });
  it("should add new question", () => {
    const state = [{ question_id: 12 }, { question_id: 23 }];
    const newQuestion = { question_id: 68 };
    const newState = questions(state, {
      type: `FETCHED_QUESTION`,
      newQuestion,
    });
    //expect(newState).toContain(newQuestion);
    expect(newState).toHaveLength(3);
  });
});
