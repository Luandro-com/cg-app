import React from 'react';
import { animateScroll } from 'react-scroll';
import Facebook from 'react-icons/lib/ti/social-facebook-circular';
import Twitter from 'react-icons/lib/ti/social-twitter-circular';
import Google from 'react-icons/lib/ti/social-google-plus-circular';
import Instagram from 'react-icons/lib/ti/social-instagram-circular';
import Linkedin from 'react-icons/lib/ti/social-linkedin-circular';
import ArrowUp from 'react-icons/lib/ti/arrow-up-thick';
import { colors } from '../utils/config';

const socialStyle = {
  width: 36,
  height: 36,
  color: colors.white,
  cursor: 'pointer',
};

const Footer = ({ slug, custom: { copyright, url, redes } }) => (
  <footer className="wrapper" id={slug}>
    <div className="container">
      <div style={{ fontWeight: 100, fontSize: '0.8em' }}>
        <button onClick={() => animateScroll.scrollToTop()}><ArrowUp style={socialStyle} /></button>
        <span style={{ color: colors.white, fontSize: '1em', paddingRight: 10 }}>
          {copyright}
        </span>
        <a style={{ color: colors.orange }} href={url}>
          {url}
        </a>
      </div>
      <div className="icons">
        {redes.map((item, key) => {
          switch (item.rede) {
            case 'facebook':
              return <a key={key} href={item.link} target="_blank"><Facebook style={socialStyle} /></a>;
            case 'twitter':
              return <a key={key} href={item.link} target="_blank"><Twitter style={socialStyle} /></a>;
            case 'google':
              return <a key={key} href={item.link} target="_blank"><Google style={socialStyle} /></a>;
            case 'instagram':
              return <a key={key} href={item.link} target="_blank"><Instagram style={socialStyle} /></a>;
            case 'linkedin':
              return <a key={key} href={item.link} target="_blank"><Linkedin style={socialStyle} /></a>;
            default:
              return '';
          }
        })}
      </div>
    </div>
    <style jsx>{`
      .wrapper {
        background: #252424;
        width: 100%;
        height: auto;
      }
      .container {
        width: 90%;
        height: 100%;
        margin: 0 auto;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
      }
      .icons {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: flex-end;
        padding-right: 50px,
      }
      @media (min-width: 640px) {
        .wrapper {
          height: 56px;
        }
        .container {
          display: flex;
        }
        .icons {
          flex-flow: row nowrap;
        }
      }
      
    `}</style>
  </footer>
);

Footer.defaultProps = {
  custom: {
    copyright: '',
    url: '',
    redes: [],
  },
};

Footer.propTypes = {
  slug: React.PropTypes.string,
  custom: React.PropTypes.objectOf(React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array, React.PropTypes.string])),
};

export default Footer;
