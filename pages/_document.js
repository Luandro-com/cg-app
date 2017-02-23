import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import FontFaceObserver from 'fontfaceobserver';
import { fontFamily, colors } from '../utils/config';

export default class MyDocument extends Document {
  state = {
    currentFont: 'sans-serif',
  }
  render() {
    const font = new FontFaceObserver(fontFamily);
    font.load().then(() => {
      console.log('Font has loaded.');
      this.setState({
        currentFont: fontFamily,
      });
    }).catch(() => {
      console.log('Font failed to load.');
    });
    return (
      <html lang="pt" style={{ fontFamily: `${this.state.currentFont}, sans-serif`, margin: '0' }}>
        <Head>
          <meta charSet="utf-8" />
          <title>Consultoria CG</title>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta property="og:locale" content="pt_BR" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link rel="alternate" type="application/rss+xml" title="Feed de comentários para CG Consultoria »" href="http://admin.consultoriacg.com.br/comments/feed/" />
          <link rel="dns-prefetch" href="//s.w.org" />
          <link rel="alternate" type="application/rss+xml" title="Feed para CG Consultoria »" href="http://admin.consultoriacg.com.br/feed/" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,800" rel="stylesheet" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link rel="icon" sizes="16x16 32x32 64x64" href="/static/favicon.ico" />
          <link rel="icon" type="image/png" sizes="196x196" href="/static/favicon-192.png" />
          <link rel="icon" type="image/png" sizes="160x160" href="/static/favicon-160.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-96.png" />
          <link rel="icon" type="image/png" sizes="64x64" href="/static/favicon-64.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16.png" />
          <link rel="apple-touch-icon" href="/static/favicon-57.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/static/favicon-114.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/static/favicon-72.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/static/favicon-144.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/static/favicon-60.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/static/favicon-120.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/static/favicon-76.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/static/favicon-152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon-180.png" />
          <meta name="msapplication-TileColor" content="#FFFFFF" />
          <meta name="msapplication-TileImage" content="/static/favicon-144.png" />
          <meta name="msapplication-config" content="/static/browserconfig.xml" />
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" rel="stylesheet" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx global>{`
          html, body, #root {
            font-family: ${fontFamily}, sans-serif;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            background: ${colors.white};
            color: ${colors.black};
          }

          .active {
            color: ${colors.orange}
          }

          .more-link {display: none}

          button:focus {
            shadow-box: none;
          }

          .timedOut {
            color: ${colors.grey};
          }

          .loaded {
            font-family: ${fontFamily}, sans-serif;
          }

          a {
            position: relative;
            text-decoration: none;
            color: ${colors.black};
            cursor: pointer;
          }
          a:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -2px;
            left: 0;
            background-color: ${colors.orange};
            visibility: hidden;
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            -webkit-transition: all 0.3s ease-in-out 0s;
            transition: all 0.3s ease-in-out 0s;
          }
          a:hover:before {
            visibility: visible;
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
          }
          h1 {
            font-size: 1.2em;
          }
          h2 {
            text-transform: uppercase;
            font-weight: 600;
          }
          #blog h3, #blog h2 {
            font-size: 1em;
          }
          #blog blockquote > * {
            padding-left: 30px;
          }
          button {
            background: none;
            border: none;
          }
          #blog blockquote {
            margin: 50px auto;
            text-align: left;
            border-left: 4px solid ${colors.orange}
          }
          #blog blockquote h3 {
            font-size: 1em;
          }
          img {
            max-width: 100%;
            width: auto;
            height: auto;
          }
          .alignleft {
            text-align: left;
          }
          @media (min-width: 640px) {
            h1 {
              font-size: 2.4em;
            }
            h2 {
              font-size: 1.6em;
            }
            h3 {
              font-size: 1.6em;
              padding-left: initial !important;
            }
            blockquote h3 {
              font-size: 1.4em;
            }
          }
          @media (min-width: 1024px) {
            #blog p {
              font-size: 1.2em;
            }
          }
        `}</style>
      </html>
    );
  }
}
