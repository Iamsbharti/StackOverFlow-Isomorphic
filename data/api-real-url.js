export const questions = `https://api.stackexchange.com/2.0/questions?site=stackoverflow`;
export const question = (id) =>
  `https://api.stackexchange.com/2.0/questions/${id}?site=stackoverflow&filter=withbody`;
export const tags = (tag) =>
  `https://api.stackexchange.com/2.0/tags/${tag}/faq?site=stackoverflow`;

export const answers = (question_id) =>
  `https://api.stackexchange.com/2.0/questions/${question_id}/answers?site=stackoverflow`;
