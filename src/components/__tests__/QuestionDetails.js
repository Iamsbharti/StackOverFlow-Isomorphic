describe("The QuestionList Component", () => {
  beforeEach(() => {
    console.log("Runs before each test");
  });
  beforeAll(() => {
    console.log("runs before all tests");
  });
  afterAll(() => {
    console.log("after all tests");
  });
  afterEach(() => {
    console.log("after each test");
  });
  it.skip("should render list of questions", () => {
    expect(40 + 2).toBe(42);
  });
  it("should be a meaning of life", () => {
    expect(40 + 2).toEqual(42);
  });
});
