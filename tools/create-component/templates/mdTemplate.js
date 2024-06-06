module.exports = function ({ uppercase, type }) {
  return `---
name: ${uppercase}
category: ${type}s
---

@TODO: Descriptive text goes here.
`;
};
