const test = require("node:test");
const assert = require("node:assert");
const message = require("./app");

test("health check works", () => {
  assert.strictEqual(message("/health"), "Healthy");
});
