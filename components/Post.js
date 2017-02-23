import React from 'react';
import Navbar from './PostNavbar';
import Footer from './PostFooter';
import Content from './PostContent';

export default props => (
  <div id="blog">
    <Navbar archive />
    <div className="wrapper" >
      <Content {...props} />
      <Footer {...props} />
    </div>
    <style jsx>{`
      .wrapper {
        width: 100%;
        padding: 75px 0;
        margin: 0 auto;
        max-width: 90%;
      }
      @media(min-width: 968px) {
        .wrapper {
          max-width: 768px;
        }
      }
      @media(min-width: 1200px) {
        .wrapper {
          max-width: 968px;
        }
      }
    `}</style>
  </div>
);
