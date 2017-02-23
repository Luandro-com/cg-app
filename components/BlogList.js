import React from 'react';
import Carousel from 'react-slick';
import Loader from './Loader';
import Arrow from './BlogArrow';
import Item from './BlogItem';
import { colors } from '../utils/config';

const BlogList = ({ slug, title, blogLatest, finished, isMobile }) => {
  const settings = {
    nextArrow: <Arrow />,
    prevArrow: <Arrow prev />,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: isMobile ? 1 : 3,
    autoplay: true,
  };
  return (
    <section className="wrapper" id={slug}>
      <div>
        <h2>{title}</h2>
        <div className="container">
          {blogLatest.length > 0 && <Carousel {...settings}>
            {blogLatest.map((item, key) => <div key={key}><Item {...item} /></div>)}
          </Carousel>}
          {!finished && <Loader />}
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          padding: 40px 0 80px;
          margin: 0;
          background: rgba(246, 246, 246, 1);
          text-align: center;
        }
        .container {
          color: ${colors.white};
          padding-top: 30px;
          max-width: 968px;
          margin: 0 auto;
        }
      `}</style>
    </section>
  );
};

BlogList.defaultProps = {
  blogLatest: [],
};

BlogList.propTypes = {
  slug: React.PropTypes.string,
  title: React.PropTypes.string,
  blogLatest: React.PropTypes.oneOfType([React.PropTypes.array, React.PropTypes.bool]),
};

export default BlogList;
