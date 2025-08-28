const { normalizeURL, getURLsFromHTML } = require("./crawl.js");
const { test, expect } = require("@jest/globals");

test("normalizeURL", () => {
  const input = "https://blog.boot.dev/path/";
  const actual = normalizeURL(input);
  const expected = "blog.boot.dev/path";

  expect(actual).toEqual(expected);
});

// trailing slash
test("normalizeURL trailing slash", () => {
  const input = "https://blog.boot.dev/path/";
  const actual = normalizeURL(input);
  const expected = "blog.boot.dev/path";

  expect(actual).toEqual(expected);
});

// capitals
test("normalizeURL capitals", () => {
  const input = "https://BLOG.boot.dev/path/";
  const actual = normalizeURL(input);
  const expected = "blog.boot.dev/path";

  expect(actual).toEqual(expected);
});

// http protocol
test("normalizeURL http", () => {
  const input = "http://blog.boot.dev/path/";
  const actual = normalizeURL(input);
  const expected = "blog.boot.dev/path";

  expect(actual).toEqual(expected);
});

//geturls fromhtml
test("getURLsFromHTML", () => {
  const inputHTMLBody = `
    <html>
        <body>
            <a href="https://blog.boot.dev">Boot.dev Blog</a>
        </body>
    </html>
    `;
  const inputBaseURL = "https://blog.boot.dev";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = ["https://blog.boot.dev/"];

  expect(actual).toEqual(expected);
});
