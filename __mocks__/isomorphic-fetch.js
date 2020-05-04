let __value = 42;
console.log("mock fetch func");
const isomorphicFetch = jest.fn(() => __value);
isomorphicFetch.__setValue = (v) => (__value = v);
export default isomorphicFetch;
