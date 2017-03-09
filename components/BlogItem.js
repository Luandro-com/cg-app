import React from 'react';
import Rendered from './Rendered';
import Time from './Time';
import { colors } from '../utils/config';
import Router from 'next/router';

const Item = ({ title, image, text, date, author, slug }) => (
  <div onClick={() => Router.push(`/blog?slug=${slug}`, `/blog/${slug}`)} style={{ cursor: 'pointer' }}>
    <article className="wrapper">
      {image && <img className="header" src={image} alt={title} />}
      <div className="content">
        <h2 style={{ fontSize: '1.5em' }}>{title}</h2>
        <Rendered data={text} />
        <date style={{ fontSize: '0.6em', color: 'rgba(0, 193, 163, 1)' }}><Time date={date} /></date>
        <footer style={{ fontSize: '0.8em' }}>{author}</footer>
      </div>
    </article>
    <style jsx>{`
      .wrapper {
        width: 95%;
        height: 580px;
        background: ${colors.white};
        color: ${colors.black};
        text-align: left;
        font-size: 0.8em;
      }
      .header {
        width: 100%;
      }
      .content {
        max-width: 90%;
        margin: 0 auto;
      }
    `}</style>
  </div>
);

Item.propTypes = {
  title: React.PropTypes.string,
  slug: React.PropTypes.string,
  text: React.PropTypes.string,
  date: React.PropTypes.string,
  image: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
  author: React.PropTypes.string,
};

export default Item;
