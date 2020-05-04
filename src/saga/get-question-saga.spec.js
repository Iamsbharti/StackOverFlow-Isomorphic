import { handleFetchQuestion } from "./get-question-saga";
import fetch from "isomorphic-fetch";
describe("Test Get Question Saga", () => {
  beforeAll(() => {
    fetch.__setValue({ question_id: 42 });
  });
  it("should fetch question based in id", async () => {
    const gen = handleFetchQuestion({ question_id: 42 });
    const { value } = await gen.next();
    expect(value).toEqual({ question_id: 42 });
    expect(fetch).toHaveBeenCalledWith(`/api/questions/42`);
  });
});
