import 'isomorphic-fetch';
import React from 'react';
import Router from 'next/router';
import Link from 'next/link';
import NProgress from 'nprogress';
import Loader from '../components/Loader';
import BlogItem from '../components/BlogItem';
import Navbar from '../components/PostNavbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { footerContactUrl, blogDataUrl, colors } from '../utils/config';
import { pageView } from '../utils/analytics';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class Archive extends React.Component {
  static async getInitialProps({ query }) {
    let data;
    let contactFooterData;
    let page = 1;
    if (Object.keys(query).length !== 0 && query) {
      page = parseInt(query, 10);
    }
    if (query.page) {
      page = parseInt(query.page, 10);
    }
    if (query.p) {
      page = parseInt(query.p, 10);
    }
    try {
      data = await fetch(blogDataUrl(page, '0:6'))
        .then(res => res.json());
      contactFooterData = await fetch(footerContactUrl)
        .then(res => res.json());
    } catch (err) {
      console.log(err);
      data = {};
      contactFooterData = {};
    }
    return {
      page,
      data,
      contactFooterData,
    };
  }

  state = {
    toFetch: '6:12',
    blogData: false,
    failed: 0,
    finished: false,
  }

  componentDidMount() {
    pageView();
    this.setState({
      blogData: this.props.data,
    });
    this.getBlogData();
  }

  getBlogData() {
    const { page } = this.props;
    const { failed, toFetch, blogData, finished } = this.state; 
    fetch(blogDataUrl(page, toFetch))
    .then(res => res.json())
    .then(data => {
        if (data.length > 0 && !finished) {
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
    const { contactFooterData, url, page } = this.props;
    const { blogData, finished } = this.state;
    const pageContent = (slug) => {
      const rawData = contactFooterData;
      if (rawData.length > 1) {
        return rawData.filter(item => item.slug === slug)[0];
      }
    };
    return (
      <div className="wrapper">
        <Navbar />
        <div className="main">
          <h1>Arquivo do blog</h1>
          <div className="container">
            {blogData.length > 3 && blogData.map((item, key) => <div
              key={key}
              className="item-wrapper"
            >
              <BlogItem {...item} />
            </div>)}
            <br />
          </div>
          <div className="pagination">
            {page - 1 > 0 && <Link to={`/arquivo?p=${page - 1}`} as={`/arquivo/${page - 1}`}><a>Anterior</a></Link>}
            <Link to={`/arquivo?p=${page + 1}`} as={`/arquivo/${page + 1}`}><a>Próxima</a></Link>
          </div>
          <div className="loader">{!finished && <Loader />}</div>
        </div>
        <Contact {...pageContent('contato')} />
        <Footer {...pageContent('rodape')} />
        <style jsx>{`
          .wrapper {
            text-align: center;
          }
          .main {
            padding: 80px 0;
          }
          .container {
            max-width: 80%;
            margin: 50px auto;
          }
          .loader {
            padding-top: 30px;
          }
          .item-wrapper {
            padding: 40px 0;
          }
          .pagination {
            width: 100%;
            display: flex;
            justify-content: space-around;
            text-transform: uppercase;
            color: ${colors.orange};
          }
          @media (min-width: 640px) {
            .container {
              display: flex;
              flex-flow: row wrap;
              justify-content: space-between;
            }
            .item-wrapper {
              width: 48%;
            }
          }
          @media(min-width: 768px) {
            .item-wrapper {
              width: 30%;
            }
          }
          @media(min-width: 1024px) {
            .container {
              max-width: 968px;
              margin: 70px auto;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Archive;
