// const { createServer } = require('http')
const express = require('express');
const path = require('path');
const { parse } = require('url');
const next = require('next');
const pathMatch = require('path-match');
const LRUCache = require('lru-cache');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const route = pathMatch();
const match = route('/blog/:slug');
const port = dev ? 3000 : 0;

// Cache
// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100,
  maxAge: dev ? 1000 * 60 * 0.035 : 1000 * 60 * 2, // 2min
});

app.prepare()
  .then(_ => {
    const server = express();
    // serve service worker
    server.get('/sw.js', (req, res) => res.sendFile(path.resolve('./.next/sw.js')));
    server.get('/blog/:slug', (req, res) => {
      app.renderToHTML(req, res, '/blog', req.params.slug)
      .then((html) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
      })
      .catch((err) => {
        app.renderError(err);
      });
    });
    server.get('*', (req, res) => handle(req, res));
    server.listen(port, err => {
      if (err) throw error;
      console.log('> App running on port port');
    });
  });
// .then(() => {
//   createServer((req, res) => {
//     const { pathname } = parse(req.url);
//     const params = match(pathname);
//     if (params === false) {
//       handle(req, res);
//       return;
//     }
//     renderAndCache(req, res, '/blog', params);

//     /*
//     * NB: make sure to modify this to take into account anything that should trigger
//     * an immediate page change (e.g a locale stored in req.session)
//     */
//     function getCacheKey(req) {
//       return `${req.url}`;
//     }

//     function renderAndCache(req, res, pagePath, queryParams) {
//       const key = getCacheKey(req);

//       // If we have a page in the cache, let's serve it if not in DEV
//       if (ssrCache.has(key)) {
//         console.log(`CACHE HIT: ${key}`)
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.end(ssrCache.get(key));
//         return
//       }

//       // If not let's render the page into HTML
//       app.renderToHTML(req, res, pagePath, queryParams)
//         .then((html) => {
//           // Let's cache this page
//           console.log(`CACHE MISS: ${key}`)
//           ssrCache.set(key, html)
//           res.writeHead(200, {'Content-Type': 'text/html'});
//           res.end(html)
//         })
//         .catch((err) => {
//           app.renderError(err, req, res, pagePath, queryParams)
//         })
//     }
//   })
//   .listen(port, (err) => {
//     if (err) throw err
//     console.log(`> Ready on http://localhost:${port}`)
//   })
// })