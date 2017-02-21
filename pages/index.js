import 'isomorphic-fetch';
import React from 'react';
import Layout from '../components/Layout';
import PostItem from '../components/PostItem';
import apiUrl from '../utils/api';

class Index extends React.Component {
  static async getInitialProps() {
    const res = await fetch(`${apiUrl}/posts`);
    const json = await res.json();
    return { posts: json.posts };
  }

  static propTypes = {
    posts: React.PropTypes.arrayOf(React.PropTypes.object),
  }

  render() {
    const { posts } = this.props;
    return (
      <Layout>
        <div>
          {posts && posts.map((post, key) => <PostItem key={key} {...post} />)}
          {!posts && <div className="mdl-spinner mdl-js-spinner is-active"></div>}
        </div>
      </Layout>
    );
  }
}

export default Index;
