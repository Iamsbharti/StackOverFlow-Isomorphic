export const questions = `https://api.stackexchange.com/2.0/questions?site=stackoverflow`;
export const question = (id) =>
  `https://api.stackexchange.com/2.0/questions/${id}?site=stackoverflow&filter=withbody`;
//https://api.stackexchange.com/2.0/tags/data-structure/faq?site=stackoverflow
export const tags = (tag) =>
  `https://api.stackexchange.com/2.0/tags/${tag}/faq?site=stackoverflow`;
