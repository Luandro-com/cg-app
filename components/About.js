import React from 'react';
import Rendered from './Rendered';
import TitleBar from './TitleBar';
import { colors } from '../utils/config';

const ImageSize = 320;

const About = ({ title, text, image, scroll, slug }) => (
  <section id={slug} className="wrapper">
    <div className="info">
      <h2 style={{ color: colors.white }}>{title || 'Sobre'}</h2>
      <TitleBar />
      <Rendered data={text || '<p>Carregando...</p>'} />
    </div>
    {image && <img src={image} alt={title} className="image" />}
    {!image && <div
      style={{
        width: ImageSize,
        height: ImageSize,
        borderRadius: '50%',
        background: 'grey',
      }}
    >
    </div>}
    <style jsx>{`
      .wrapper {
        padding: 80px 0;
        margin: 0 auto;
        text-align: center;
      }
      .image {
        width: ${ImageSize}px;
        height: auto;
      }
      @media(min-width: 768px) {
        .wrapper {
          text-align: left;
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: space-around;
          maxWidth: 80%;
        }
        .info {
          width: 50%;
        }
      }
      @media(min-width: 1024px) {
        .wrapper {
          max-width: 968px;
        }
      }
    `}</style>
  </section>
);

About.propTypes = {
  slug: React.PropTypes.string,
  title: React.PropTypes.string,
  scroll: React.PropTypes.number,
  text: React.PropTypes.string,
  image: React.PropTypes.string,
};

export default About;
