import React from 'react';
import Loader from '../components/Loader';
// import Head from '../components/Head';
import BlogItem from '../components/BlogItem';
import Navbar from '../components/PostNavbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
// import init from '../utils/init';
import { footerContactUrl, blogDataUrl } from '../utils/config';

// init();

class Archive extends React.Component {
  static async getInitialProps({ query }) {
    let data;
    let contactFooterData;
    try {
      data = await fetch(blogDataUrl('0:6'))
        .then(res => res.json());
      contactFooterData = await fetch(footerContactUrl)
        .then(res => res.json());
    } catch (err) {
      console.log(err);
      data = {};
      contactFooterData = {};
    }
    return {
      data,
      contactFooterData,
    };
  }

  state = {
      toFetch: '7:12',
      blogData: false,
      failed: 0,
      finished: false,
  }

  componentDidMount() {
    this.setState({
      blogData: this.props.data,
    })
    this.getBlogData();
  }

  getBlogData() {
    const { failed, toFetch, blogData, finished } = this.state;    
    fetch(blogDataUrl(toFetch))
    .then(res => res.json())
    .then(data => {
        if (data.length > 0) {
            const newToFetch = toFetch.split(':').map(n => parseInt(n) + 6).join(':');
            this.setState({
                blogData: blogData.concat(data),
                toFetch: newToFetch,
            }, this.getBlogData());
        } else {
            this.setState({
                finished: true,
            });
        }
    })
    .catch((err) => {
      console.log('Error fetching latest blog posts!:', err);
      this.setState({
        failed: failed + 1,
      });
      if (typeof (window) !== 'undefined' && failed < 5) {
        window.setTimeout(() => this.getBlogData(), 5000);
      }
    });
  }

  render() {
    const { contactFooterData, url } = this.props;
    const { blogData, finished } = this.state;
    const pageContent = (slug) => {
      const rawData = contactFooterData || staleData;
      return rawData.filter(item => item.slug === slug)[0];
    };
    return (
      <div style={{ marginTop: 80, textAlign: 'center' }}>
        <Navbar />
        <h1>Arquivo do blog</h1>
        <div className="container">
            {blogData && blogData.map((item, key) => <div
              key={key}
              className="item-wrapper"
            >
              <BlogItem {...item} />
            </div>)}
            <br />
        </div>
        {!finished && <Loader />}
        <Contact {...pageContent('contato')} />
        <Footer {...pageContent('rodape')} />
        <style jsx>{`
          .container {
            max-width: 968px;
            margin: 50px auto;
          }
          .item-wrapper {
             width: 50%;
          }
          @media(min-width: 768px) {
            .container {
               display: flex;
              flex-flow: row wrap;
              justify-content: space-between;
            }
            .item-wrapper {
              width: 30%;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Archive;
