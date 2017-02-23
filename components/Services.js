import React from 'react';
// import AnimatedBar from '../Layout/AnimatedBar';
import TitleBar from './TitleBar';
import Item from './ServicesItem';
import { colors } from '../utils/config';

const Services = ({ sectionTitle, slug, title, custom, scroll, customStyle }) => {
  const { categorias, destaque, imagem_fundo } = custom;
  return (
    <section id={slug} className={imagem_fundo ? 'wrapper image' : 'wrapper'} style={{ backgroundImage: imagem_fundo ? `url('${imagem_fundo}')` : 'none' }}>
      {sectionTitle && <h2 style={{ textAlign: 'center', margin: '0 auto', paddingTop: 80 }}>{sectionTitle}</h2>}
      <div className="container" style={customStyle}>
        <div className="inner">
          <div style={{ width: '100%', textAlign: 'left', padding: '20px 0 20px 20px', color: colors.white }}>
            <h2>{title}</h2>
            <TitleBar destaque={destaque} />
          </div>
          {(categorias.length > 0) && categorias.map((item, key) => <Item key={key} {...item} destaque={destaque} fundo={imagem_fundo} />)}
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          position: relative;
          background-size: cover;
          padding-bottom: 50px;
        }
        .wrapper:after {
          content: " ";
          display: none;
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background-color: rgba(241, 98, 58, 0.6);
        }
        .image:after {
          display: inline;
        }
        .container {
          padding: 10px 0;
          margin: 0 auto;
          textAlign: center;
          display: flex;
        }
        .inner {
          width: 80%;
          margin: 0 auto;
          z-index: 3;
        }
        @media(min-width: 768px) {
          .container {
            flex-flow: row wrap;
            align-items: center;
            justify-content: flex-start;
          }
          .inner {
            width: 86%;
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;
          }
        }
        @media(min-width: 1024px) {
          .container {
            max-width: 968px;
          }
          .inner {
            max-width: 968px;
          }
        }
      `}</style>
    </section>
  );
};

Services.defaultProps = {
  custom: {
    categorias: [],
    destaque: false,
  },
};

Services.propTypes = {
  sectionTitle: React.PropTypes.string,
  scroll: React.PropTypes.number,
  customStyle: React.PropTypes.objectOf(React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])),
  slug: React.PropTypes.string,
  title: React.PropTypes.string,
  custom: React.PropTypes.objectOf(React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array, React.PropTypes.bool, React.PropTypes.string])),
};

export default Services;
