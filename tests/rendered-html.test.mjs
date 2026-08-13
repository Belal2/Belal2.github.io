import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://belal2.github.io/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the complete full-stack portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Belal Abdalhuk — Full-Stack Product &amp; Platform Engineer<\/title>/i);
  assert.match(html, /Complex software/);
  assert.match(html, /Systems that carry/);
  assert.match(html, /operating system for agricultural chemical businesses/i);
  assert.match(html, /Backend depth/);
  assert.match(html, /Belal-Abdalhuk-Resume\.pdf/);
  assert.match(html, /https:\/\/github\.com\/Belal2/);
  assert.doesNotMatch(html, /github\.com\/Belal2\/agrichem/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});
