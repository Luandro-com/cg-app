import 'isomorphic-fetch';
import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import Layout from '../components/Layout';
import apiUrl from '../utils/api';

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
}
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class Blog extends React.Component {
  static async getInitialProps({ query: { slug } }) {
    const res = await fetch(`${apiUrl}/posts/slug:${slug}`);
    const json = await res.json();
    return {
      content: json.content,
      author: json.author && json.author.nice_name,
      date: json.date,
      slug: json.slug,
    };
  }

  static propTypes = {
    content: React.PropTypes.string,
    author: React.PropTypes.string,
    date: React.PropTypes.string,
  }

  componentDidMount() {
  }

  render() {
    const { content, author, date, slug } = this.props;
    return (
      <Layout>
        <div>
          <Link href="/">
            <a> Back </a>
          </Link>
          <h1>Blog</h1>
          <h3>{ author }</h3>
          <h4>{ slug }</h4>
        </div>
      </Layout>
    );
  }
}

export default Blog;
