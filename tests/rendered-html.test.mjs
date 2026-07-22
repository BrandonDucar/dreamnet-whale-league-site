import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the public product site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Whale Intelligence League \| DreamNet<\/title>/i);
  assert.match(html, /<h1>Whale Intelligence League<\/h1>/i);
  assert.match(html, /Join the paper league/i);
  assert.match(html, /DOW JONES/i);
  assert.match(html, /Paper-only/i);
  assert.match(html, /No funds connected/i);
  assert.match(html, /SHA-256 receipts/i);
  assert.match(html, /https:\/\/dreamnet-whale-league\.pages\.dev/i);
  assert.doesNotMatch(html, /risk-free|guaranteed return|official partner|fake trader/i);
});

test("keeps product and launch-site boundaries explicit", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /one disclosed teaching agent/i);
  assert.match(page, /zero funds moved/i);
  assert.match(page, /does not prove/i);
  assert.match(layout, /league-preview\.png/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await access(new URL("../public/league-preview.png", import.meta.url));
  await access(new URL("../public/receipt-preview.png", import.meta.url));
  await assert.rejects(access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)));
});
