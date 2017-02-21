import React from 'react';
import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';


Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
}
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const PostItem = ({ title, featured_image, slug }) => (
  <div type="button" onClick={() => Router.push(`/blog?slug=${slug}`, `/blog/${slug}`)}>
    <a>
      <div className="demo-card-wide mdl-card mdl-shadow--2dp">
        <div
          className="mdl-card__title"
          style={{ background: `url(${featured_image}) center / cover` }}
        >
          <h2 className="mdl-card__title-text">{ title }</h2>
        </div>
        <div className="mdl-card__supporting-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris sagittis pellentesque lacus eleifend lacinia...
              </div>
        <div className="mdl-card__actions mdl-card--border">
        </div>
        <div className="mdl-card__menu">
          <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
            <i className="material-icons">share</i>
          </button>
        </div>
      </div>
      <style jsx>{`
            .demo-card-wide.mdl-card {
              width: 512px;
            }
            .demo-card-wide > .mdl-card__title {
              color: #fff;
              height: 176px;
            }
            .demo-card-wide > .mdl-card__menu {
              color: #fff;
            }
          `}</style>
    </a>
  </div>
);

export default PostItem;
