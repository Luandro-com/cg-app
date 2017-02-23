import 'isomorphic-fetch';
import React from 'react';
import MobileDetect from 'mobile-detect';
import Router from 'next/router';
import Head from 'next/head';
import { scrollSpy } from 'react-scroll';
import NProgress from 'nprogress';
import { componentsDataUrl, menuDataUrl, blogDataUrl } from '../utils/config';
import { getData, saveData } from '../utils/localStorage';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import About from '../components/About';
import Team from '../components/Team';
import Values from '../components/Values';
import Methodology from '../components/Methodology';
import Services from '../components/Services';
import Clients from '../components/Clients';
import BlogList from '../components/BlogList';
import Action from '../components/Action';

Router.onRouteChangeStart = (url) => {
  NProgress.start();
}
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class Index extends React.Component {
  static async getInitialProps({ req }) {
    let components;
    let menu;
    try {
      components = await fetch(componentsDataUrl)
        .then(res => res.json())
        .catch(() => false);
      menu = await fetch(menuDataUrl)
        .then(res => res.json())
        .catch(() => false);
    } catch (err) {
      console.log('Error fetching page data', err);
      components = false;
      menu = false;
    }
    return req
      ? {
        userAgent: req.headers['user-agent'],
        isServer: true,
        components,
        menu,
      }
      : {
        userAgent: navigator.userAgent,
        isServer: false,
        components,
        menu,
      };
  }

  static propTypes = {
    userAgent: React.PropTypes.string.isRequired,
    isServer: React.PropTypes.bool.isRequired,
    components: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.array]),
    menu: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.object]),
  }

  state = {
    components: this.props.components,
    menu: this.props.menu,
    blogData: [],
    toFetch: '0:3',
    finished: false,
    failed: 0,
  }

  componentDidMount() {
    const { components, menu } = this.props;
    if (components && menu) {
      saveData('components', components);
      saveData('menu', menu);
    } else {
      this.setState({
        components: getData('components'),
        menu: getData('menu'),
      });
    }
    this.getBlogData();
    scrollSpy.update();
  }

  getBlogData() {
    const { failed, toFetch, blogData, finished } = this.state;
    const newToFetch = toFetch.split(':').map(n => parseInt(n, 10) + 3).join(':');
    fetch(blogDataUrl(toFetch))
    .then(res => res.json())
    .then((data) => {
      if (data.length > 0) {
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
    const { components, menu, blogData, scroll, finished } = this.state;
    const { url, userAgent, isServer } = this.props;
    const content = slug => {
      if (components) {
        return components.filter(item => item.slug === slug)[0];
      }
      return false;
    };
    const isMobile = new MobileDetect(userAgent).phone() !== null;
    const { seo } = content('home');
    return (
      <Layout
        footerData={content('rodape')}
        contactData={content('contato')}
      >
        <Head>
          <title>{seo['opengraph-title']}</title>
          <meta name="description" content={seo['opengraph-description']} />
          <meta property="og:title" content={seo['opengraph-title']} />
          <meta property="og:description" content={seo['opengraph-description']} />
          <meta property="og:image" content={seo['opengraph-image']} />
        </Head>
        <div>
          <Navbar
            menuItems={menu.items}
            fixed
          />
          <Header {...content('cabecalho')} />
          <About {...content('quem-somos')} scroll={scroll} url={url} />
          <Team {...content('time')} url={url} />
          <Values {...content('valores')} url={url} />
          <Methodology {...content('metodologia')} url={url} />
          <Services {...content('para-empresas')} scroll={scroll} customStyle={{ paddingTop: 100 }} url={url} sectionTitle={'Serviços'} />
          <Services {...content('para-pessoas')} scroll={scroll} url={url} />
          <Services {...content('cursos-e-treinamento')} scroll={scroll} url={url} />
          <Clients {...content('nossos-clientes')} url={url} />
          <BlogList blogLatest={blogData} finished={finished} {...content('blog')} url={url} isMobile={isMobile} />
          <Action {...content('acao')} />
        </div>
      </Layout>
    );
  }
}

export default Index;
