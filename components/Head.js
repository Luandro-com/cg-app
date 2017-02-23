import React from 'react';
import { Head } from 'next/document';
import { appUrl } from '../utils/config';

const checkLength = key => {
  if (key && key.length > 3) {
    return true;
  }
  return false;
};

const CustomHead = ({ title, description, slug, seo, category, styleSheets, locale, url, image }) => {
  let mainDesc = description;
  if (checkLength(seo['opengraph-description'])) {
    mainDesc = seo['opengraph-description'];
  } else if (checkLength(seo['twitter-description'])) {
    mainDesc = seo['twitter-description'];
  } else if (checkLength(seo.metadesc)) {
    mainDesc = seo.metadesc;
  }
  let mainTitle = title;
  if (checkLength(seo['opengraph-title'])) {
    mainTitle = seo['opengraph-title'];
  } else if (checkLength(seo['twitter-title'])) {
    mainTitle = seo['twitter-title'];
  }
  let mainImage = image;
  if (checkLength(seo['opengraph-image'])) {
    mainImage = seo['opengraph-image'];
  } else if (seo['twitter-image']) {
    mainImage = seo['twitter-image'];
  }
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>{mainTitle}</title>
      <meta name="description" content={mainDesc} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {url.pathname !== '/' && <link rel='canonical' href={`${appUrl}/blog/${slug}`} />}
      {url.pathname === '/' && <link rel='canonical' href={appUrl} />}
      {category && <meta property="article:section" content={category} />}
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:url" content={ url.pathname === '/' ? appUrl : `${appUrl}/blog/${slug}`} />
      <meta property="og:type" content={category} />
      <meta property="og:title" content={mainTitle} />
      <meta property="og:description" content={mainDesc} />
      <meta property="og:image" content={mainImage} />
      {/*<meta property="twitter:description" content={mainDesc} />
      <meta property="twitter:title" content={mainTitle} />
      <meta property="twitter:image" content={mainImage} />*/}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="alternate" type="application/rss+xml" title="Feed de comentários para CG Consultoria »" href="http://admin.consultoriacg.com.br/comments/feed/" />
      <link rel="dns-prefetch" href="//s.w.org" />
      <link rel="alternate" type="application/rss+xml" title="Feed para CG Consultoria »" href="http://admin.consultoriacg.com.br/feed/" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,800" rel="stylesheet" />
      {styleSheets && styleSheets.map((item, key) => <link rel="stylesheet" key={key} type="text/css" href={item} />)}
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
    </Head>
  );
};

CustomHead.defaultProps = {
  title: 'Consultoria CG',
  description: '',
  locale: 'pt_BR',
  category: 'article',
  seo: {},
  url: '',
  image: '',
};

CustomHead.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  slug: React.PropTypes.string,
  seo: React.PropTypes.object,
  category: React.PropTypes.string,
  styleSheets: React.PropTypes.array,
  locale: React.PropTypes.string,
};

export default CustomHead;
