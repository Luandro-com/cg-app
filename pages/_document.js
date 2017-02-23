import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import onfontready from 'onfontready';
import { fontFamily, colors } from '../utils/config';

export default class MyDocument extends Document {
  render() {
    // Load fonts
    if (typeof (window) !== 'undefined') {
      onfontready(fontFamily, () => {
        console.log('Font loaded');
        document.documentElement.className += ' loaded';
      }, {
        timeoutAfter: 2500,
        onTimeout: () => {
          document.documentElement.className += ' timedOut';
        },
      });
    }
    return (
      <html>
        <Head>
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,800" rel="stylesheet" />
          {/* TODO: LOAD ONLY ON HOME */}
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
            padding-left: 0 !important;
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
