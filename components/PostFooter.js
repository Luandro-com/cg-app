import React from 'react';
import Link from 'next/link';
import ChevRight from 'react-icons/lib/md/chevron-right';
import ChevLeft from 'react-icons/lib/md/chevron-left';
import { colors } from '../utils/config';
import Time from './Time';

const PostFooter = ({ nextPostData, prevPostData }) => (
  <div className="wrapper">
    <div className="box">
      <Link
        href={`/blog?slug=${prevPostData.slug}`}
        as={`/blog/${prevPostData.slug}`}
      >
        <a className="inner-html">
          <ChevLeft size={45} color={colors.orange} />
          <h3>{prevPostData.title.rendered}</h3>
        </a>
      </Link>
    </div>
    <div className="box right">
      <Link
        href={`/blog?slug=${nextPostData.slug}`}
        as={`/blog/${nextPostData.slug}`}
      >
        <a className="inner-html">
          <h3>{nextPostData.title.rendered}</h3>
          <ChevRight size={45} />
        </a>
      </Link>
    </div>
    <style jsx>{`
      .wrapper {
        borderTop: 1px solid grey;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
        text-align: center;
      }
      .box {
        width: 80%;
        padding: 0 0 0 20px;
      }
      .inner-html {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-around;
        color: ${colors.orange};
        text-decoration: none;
      }
      .inner-html h3 {
        font-size: 1em;
        width: 80%;
      }
      @media(min-width: 640px) {
        .wrapper {
          display: flex;
          text-align: left;
        }
        .box {
          width: 40%;
        }
        .right {
          border-left: 0.5px solid;
          text-align: right;
          padding: 0 20px 0 0;
        }
      }
    `}</style>
  </div>
);

PostFooter.defaultProps = {
  prevPostData: {
    title: { rendered: 'Carregando...' },
    date: new Date(),
    slug: '#',
  },
  nextPostData: {
    title: { rendered: 'Carregando...' },
    date: new Date(),
    slug: '#',
  },
};

// PostFooter.propTypes = {
//   prevPostData: React.PropTypes.objectOf(React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.object, React.PropTypes.date])),
//   nextPostData: React.PropTypes.objectOf(React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.object, React.PropTypes.date])),
// };

export default PostFooter;
