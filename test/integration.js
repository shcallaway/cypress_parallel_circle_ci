const req = require("request-promise");
const assert = require("assert");

const port = process.env.PORT || 80;

console.log("Running integration tests...");

req(`http://proxy:${port}/`, {
  resolveWithFullResponse: true,
  simple: false
})
  .then(res => {
    assert.equal(res.statusCode, 200);
    console.log("PASS!");
  })
  .catch(() => {
    console.log("FAIL!");
  });
