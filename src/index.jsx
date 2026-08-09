import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// scripts/build-shells.js bakes a per-route <title> and description into each
// HTML file so crawlers that never run JS still see them. Remove those tags
// once React takes over, otherwise they'd sit ahead of the ones PageMeta
// renders and client-side navigation could never change the title.
document
  .querySelectorAll('head [data-shell]')
  .forEach((el) => el.remove());

// The site used a HashRouter until routes moved to real paths, so bookmarks
// and inbound links of the form /#/science are still out there. Rewrite them
// before React mounts, otherwise they'd silently render the homepage. The
// leading slash in the pattern keeps plain #anchor links from matching.
const legacyHashRoute = window.location.hash.match(/^#(\/.*)$/);
if (legacyHashRoute) {
  window.history.replaceState(null, '', legacyHashRoute[1]);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
