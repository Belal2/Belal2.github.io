import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const outputRoot = new URL("../gh-pages-dist/", import.meta.url);
const clientRoot = new URL("../dist/client/", import.meta.url);
const workerUrl = new URL("../dist/server/index.js", import.meta.url);
const siteOrigin = process.env.GITHUB_PAGES_ORIGIN ?? "https://belal2.github.io";

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });
await cp(clientRoot, outputRoot, { recursive: true });

const cacheKey = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
workerUrl.searchParams.set("pages-build", cacheKey);
const { default: worker } = await import(workerUrl.href);

const response = await worker.fetch(
  new Request(`${siteOrigin}/`, { headers: { accept: "text/html" } }),
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

if (!response.ok) {
  throw new Error(`Static render failed with HTTP ${response.status}`);
}

const rawHtml = await response.text();
const html = rawHtml.replace(/https?:\/\/localhost(?::\d+)?/g, siteOrigin);
if (!html.includes("Belal Abdalhuk") || !html.includes("Senior Full-Stack Software Engineer")) {
  throw new Error("Static render did not contain the expected portfolio content");
}

await writeFile(new URL("index.html", outputRoot), html, "utf8");
await writeFile(new URL("404.html", outputRoot), html, "utf8");
await writeFile(new URL(".nojekyll", outputRoot), "", "utf8");

await Promise.all([
  rm(new URL(".vite/", outputRoot), { recursive: true, force: true }),
  rm(new URL(".assetsignore", outputRoot), { force: true }),
  rm(new URL("vinext-client-entry-manifest.json", outputRoot), { force: true }),
  rm(new URL("_headers", outputRoot), { force: true }),
]);

console.log(`GitHub Pages output created at ${dirname(fileURLToPath(new URL("index.html", outputRoot)))}`);
