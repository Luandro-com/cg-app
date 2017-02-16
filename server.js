const express = require('express');
const path = require('path');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(_ => {
    const server = express();

    // serve service worker
    server.get('/sw.js', (req, res) => res.sendFile(path.resolve('./.next/sw.js')));

    server.get('/blog/', (req, res) => {
      console.log('IN BLOG!!!!!!')
      app.render(req, res, '/blog', req.query)
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(3001, err => {
      if (err) throw error;

      console.log('> App running on port 3001');
    });
  });
