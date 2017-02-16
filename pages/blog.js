import React from 'react';
import Head from 'next/head';

import Todo from '../components/Todo';
// Grab our HOC Provider
import { Provider } from '../utils';

class Blog extends React.Component {
   static async getInitialProps (props) {
     console.log(props)
    // eslint-disable-next-line no-undef
    const res = await fetch('https://api.github.com/repos/developit/preact')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }

  componentDidMount () {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <Head>
          <meta name='viewport' content='width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui' />
          <meta name='theme-color' content='#673ab7' />
          <link rel='manifest' href='static/manifest.json' />
          <title>Todo App</title>
        </Head>
        <Todo />
      </div> 
    );
  }
}

export default Provider(Blog);
