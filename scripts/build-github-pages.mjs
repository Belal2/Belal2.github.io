import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { basename, dirname } from "node:path";
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
const stylesheetPaths = [...rawHtml.matchAll(/href=["'](\/_next\/static\/css\/[^"']+\.css)["']/g)]
  .map((match) => match[1]);

await mkdir(new URL("assets/", outputRoot), { recursive: true });
await cp(
  new URL("_next/static/_vinext_fonts/", clientRoot),
  new URL("assets/fonts/", outputRoot),
  { recursive: true },
);

for (const stylesheetPath of new Set(stylesheetPaths)) {
  const stylesheet = await readFile(new URL(stylesheetPath.slice(1), clientRoot), "utf8");
  await writeFile(
    new URL(`assets/${basename(stylesheetPath)}`, outputRoot),
    stylesheet.replaceAll("/_next/static/_vinext_fonts/", "/assets/fonts/"),
    "utf8",
  );
}

let html = rawHtml
  .replace(/https?:\/\/localhost(?::\d+)?/g, siteOrigin)
  // The portfolio has no client-side state. Removing the server-runtime scripts
  // keeps the generated HTML fully static and prevents RSC requests on Pages.
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<link\b(?=[^>]*\brel=["']modulepreload["'])[^>]*>/gi, "")
  .replaceAll("/_next/static/_vinext_fonts/", "/assets/fonts/");

for (const stylesheetPath of new Set(stylesheetPaths)) {
  html = html.replaceAll(stylesheetPath, `/assets/${basename(stylesheetPath)}`);
}

if (!html.includes("Belal Abdalhuk") || !html.includes("Full-Stack Product &amp; Platform Engineer")) {
  throw new Error("Static render did not contain the expected portfolio content");
}
if (html.includes("/_next/")) {
  throw new Error("Static render still references framework-only asset paths");
}

await writeFile(new URL("index.html", outputRoot), html, "utf8");
await writeFile(new URL("404.html", outputRoot), html, "utf8");
await writeFile(new URL(".nojekyll", outputRoot), "", "utf8");

await Promise.all([
  rm(new URL(".vite/", outputRoot), { recursive: true, force: true }),
  rm(new URL(".assetsignore", outputRoot), { force: true }),
  rm(new URL("vinext-client-entry-manifest.json", outputRoot), { force: true }),
  rm(new URL("_headers", outputRoot), { force: true }),
  rm(new URL("_next/", outputRoot), { recursive: true, force: true }),
]);

console.log(`GitHub Pages output created at ${dirname(fileURLToPath(new URL("index.html", outputRoot)))}`);
