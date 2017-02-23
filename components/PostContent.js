import React from 'react';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';
import ShareIcon from 'react-icons/lib/fa/share-alt';
import Rendered from './Rendered';
import Time from './Time';
import { colors, appUrl } from '../utils/config';

const FacebookIcon = generateShareIcon('facebook');
const { FacebookShareCount } = ShareCounts;
const { FacebookShareButton } = ShareButtons;
const iconSize = 56;

const PostContent = ({ title, image, content, date, author, canonicalUrl, seo }) => {
  return (
    <div style={{ margin: '50px auto' }}>
      <h1>{title}</h1>
      <div
        style={{
          width: '10%',
          borderTop: `3px solid ${colors.orange}`,
          margin: '-15px 0 10px',
        }}
      />
      <h4 style={{ fontWeight: 100, paddingBottom: 25 }}>
        Postado <span style={{ color: colors.orange }}><Time date={date} /></span> por <span style={{ color: colors.orange }}>{author}</span>
      </h4>
      <img src={image} className="image" />
      <Rendered data={content} className="content" />
      <div className="social">
        <FacebookShareButton
          url={canonicalUrl}
          title={title}
          description={seo && seo.metadesc}
          image={image}
        >
          <div className="share">
            <FacebookIcon size={iconSize} />
            <div className="share-icon">
              <ShareIcon size={iconSize - 20} color={colors.white} />
            </div>
            <div className="count">
              <FacebookShareCount url={canonicalUrl} />
            </div>
          </div>
        </FacebookShareButton>
      </div>
      <style jsx>{`
        .image {
          width: 100%;
          height: auto;
        }
        .content > * {
          max-width: 100%;
        }
        .social {
          margin: 40px auto 0;
          cursor: pointer;
        }
        .share {
          display: flex;
          flex-flow: column;
          align-items: center;
        }
        .share-icon {
          width: ${iconSize}px;
          display: none;
          background: #224389;
          margin: 0 auto;
          text-align: center;
          padding: 10px 0;
          transition: all ease-in-out 1s;
        }
        .share-icon:hover {
          transform: translate3d(2px,2px,5px);
        }
        .count {
          text-align: center;
          color: ${colors.white};
          background: #869ECC;
          width: ${iconSize}px;
          padding: 10px 0;
        }
        @media (min-width: 968px) {
          .social {
            position: fixed;
            top: 33%;
            left: 15px;
          }
          .share-icon {
            display: block;
          }
        }
        @media (min-width: 1024px) {
          .social {
            left: 5%;
          }
        }
      `}</style>
    </div>
  );
}

PostContent.defaultProps = {
  title: 'Carregando...',
  image: 'Carregando...',
  author: 'Carregando...',
  content: 'Carregando...',
  date: 'Carregando...',
};

PostContent.propTypes = {
  title: React.PropTypes.string,
  image: React.PropTypes.string,
  author: React.PropTypes.string,
  date: React.PropTypes.string,
  content: React.PropTypes.string,
};

export default PostContent;
