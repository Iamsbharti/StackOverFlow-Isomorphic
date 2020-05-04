import delay from "redux-saga";
it("Async Test 1", (done) => {
  setTimeout(done, 100);
});
it("Async Test 2", () => {
  return new Promise((resolve) => setTimeout(resolve, 1200));
});
it("Async Test 3", async () => await delay(1209));
