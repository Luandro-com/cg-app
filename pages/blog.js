import 'isomorphic-fetch';
import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Head from 'next/head';
import { animateScroll } from 'react-scroll';
import NProgress from 'nprogress';
import Layout from '../components/Layout';
import Post from '../components/Post';
import { appUrl, fullBlogUrl, footerContactUrl, searchUrl, postInfoUrl } from '../utils/config';

Router.onRouteChangeStart = (url) => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class Blog extends React.Component {
  static async getInitialProps({ query }) {
    let slug;
    if (query.slug) {
      slug = query.slug;
    } else if (query.p) {
      slug = query.p;
    } else {
      slug = query;
    }

    let content;
    let contactFooterData;
    content = await fetch(fullBlogUrl(slug))
      .then(res => {
        return res.json();
      })
      .catch(err => {
        console.log('Err on CONTENT: ', err);
        return false;
      });
    contactFooterData = await fetch(footerContactUrl)
      .then(res => res.json())
      .catch(err => {
        console.log('FOOOTER ERROR', err);
        return false;
      });
    return {
      content,
      contactFooterData,
    };
  }

  componentDidMount() {
    animateScroll.scrollToTop();
    const { previousPost, nextPost } = this.props.content[0];
    if (previousPost && nextPost) {
      if (previousPost !== null) {
        fetch(postInfoUrl(previousPost))
          .then(res => res.json())
          .then((data) => {
            this.setState({
              prevPostData: data,
            });
          })
          .catch(err => console.log(err));
      }
      if (nextPost !== null) {
        fetch(postInfoUrl(nextPost))
          .then(res => res.json())
          .then((data) => {
            this.setState({
              nextPostData: data,
            });
          })
          .catch(err => console.log(err));
      }
    }
  }

  render() {
    const { content, contactFooterData, url } = this.props;
    const { seo } = content[0];
    const layoutData = slug => {
      if (contactFooterData) {
        return contactFooterData.filter(item => item.slug === slug)[0];
      }
      return false;
    };
    let usedTitle = 'Consultoria CG';
    let usedDesc = 'Resultados';
    let usedImg = '';
    if (seo) {
      const checkLength = string => string.length > 3;
      usedTitle = checkLength(seo['opengraph-title']) ? seo['opengraph-title'] : content[0].title;
      usedDesc = checkLength(seo['opengraph-description']) ? seo['opengraph-description'] : seo.metadesc;
      usedImg = checkLength(seo['opengraph-image']) ? seo['opengraph-image'] : content[0].image;
    }

    return (
      <Layout
        footerData={layoutData('rodape')}
        contactData={layoutData('contato')}
      >
        <Head>
          <title>{usedTitle}</title>
          <meta name="description" content={usedDesc} />
          <meta property="og:title" content={usedTitle} />
          <meta property="og:description" content={usedDesc} />
          <meta property="og:image" content={usedImg} />
          <meta property="article:section" content={'article'} />
        </Head>
        <Post
          {...url}
          {...content[0]}
          {...this.state}
        />
      </Layout>
    );
  }
}

export default Blog;
