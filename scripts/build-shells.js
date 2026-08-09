/*
 * Writes one real HTML file per route into build/, so GitHub Pages has
 * something to serve on a cold hit to /science, /team or /contact.
 *
 * Each file is build/index.html with that route's title, description,
 * canonical and og: tags substituted in. The JS bundle is unchanged — React
 * Router takes over from there — but a crawler that only reads <head>
 * (LinkedIn, Slack, X) now gets per-page metadata instead of the homepage's.
 *
 * Runs automatically after `npm run build` via the postbuild script.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import routeMeta from '../src/routeMeta.js';

const SITE = 'https://phenokinetics.com';
const BUILD = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'build');

const escapeAttr = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

// Each rule must match exactly once in the built HTML. Anything else means the
// template drifted from this script, and silently shipping the homepage's
// metadata on every route is precisely the bug this file exists to prevent.
const substitute = (html, route, meta) => {
  // Trailing slash: each route is served as a directory index, and GitHub
  // Pages 301s /science to /science/. Canonical and og:url name the form that
  // answers 200 directly, so nothing points through a redirect.
  const url = route === '/' ? `${SITE}/` : `${SITE}${route}/`;
  const title = escapeAttr(meta.title);
  const description = escapeAttr(meta.description);

  const rules = [
    [/<title data-shell>[^<]*<\/title>/g, `<title data-shell>${title}</title>`],
    [
      /<meta data-shell name="description" content="[^"]*"/g,
      `<meta data-shell name="description" content="${description}"`,
    ],
    [/<link rel="canonical" href="[^"]*"/g, `<link rel="canonical" href="${url}"`],
    [/<meta property="og:url" content="[^"]*"/g, `<meta property="og:url" content="${url}"`],
    [/<meta property="og:title" content="[^"]*"/g, `<meta property="og:title" content="${title}"`],
    [
      /<meta property="og:description" content="[^"]*"/g,
      `<meta property="og:description" content="${description}"`,
    ],
  ];

  return rules.reduce((acc, [pattern, replacement]) => {
    const hits = acc.match(pattern);
    if (!hits || hits.length !== 1) {
      throw new Error(
        `build-shells: expected exactly 1 match for ${pattern} in the built HTML, ` +
          `found ${hits ? hits.length : 0}. public/index.html and scripts/build-shells.js ` +
          `are out of sync.`
      );
    }
    return acc.replace(pattern, replacement);
  }, html);
};

const template = fs.readFileSync(path.join(BUILD, 'index.html'), 'utf8');

Object.entries(routeMeta).forEach(([route, meta]) => {
  const html = substitute(template, route, meta);
  const file =
    route === '/'
      ? path.join(BUILD, 'index.html')
      : path.join(BUILD, route.slice(1), 'index.html');

  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  console.log(`build-shells: ${path.relative(BUILD, file)}  ${meta.title}`);
});

// GitHub Pages serves 404.html for any path without a file. Point it at the
// app so an unknown URL still renders the site's NotFound page rather than
// GitHub's default error page.
fs.copyFileSync(path.join(BUILD, 'index.html'), path.join(BUILD, '404.html'));
console.log('build-shells: 404.html');
