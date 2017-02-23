import React from 'react';
import Rendered from './Rendered';
import { colors } from '../utils/config';

const Values = ({ slug, custom }) => {
  const { info } = custom;
  return (
    <section id={slug} className="wrapper">
      {info.map((item, key) => {
        const { icone, titulo, texto } = item;
        return (
          <div className="item-wrapper" key={key}>
            <div className="info-container">
              <img src={icone} alt={titulo} style={{ height: 55 }} />
              <h3>{titulo}</h3>
            </div>
            <div className="item-description">
              <Rendered data={texto || '<p>Carregando...</p>'} />
            </div>
          </div>
        );
      })}
      <style jsx>{`
        .wrapper {
          padding: 50px 0 230px;
          margin: 0 auto;            
        }
        .item-wrapper {
          text-align: center;
          width: 200px;
          height: 400px;
          margin: 0 auto;
        }
        .item-wrapper:hover > div:nth-child(2) { opacity: 1; transform: translateY(-40px); }
        .item-wrapper:hover > div:nth-child(1) { border: 0; transform: translateY(-20px); }
        .info-container {
          border: 2.5px solid ${colors.orange};
          padding: 20px;
          border-radius: 50%;
          transition: all 0.5s ease-in-out;
        }
        .item-description {
          margin: 0 auto;
          padding-top: 20px;
          transition: all 0.5s ease-in-out;
        }
        @media(min-width: 640px) {
          .wrapper {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;
          }
          .item-wrapper {
            max-width: 33%;
            width: 200px;
            height: 200px;
          }
          .item-description {
            opacity: 0;
          }
        }
        @media(min-width: 1024px) {
          .wrapper {
            max-width: 80%;
          }
        };
      `}</style>
    </section>
  );
};

Values.defaultProps = {
  custom: {
    info: [],
  },
};

Values.propTypes = {
  slug: React.PropTypes.string,
  custom: React.PropTypes.objectOf(React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array])),
};

export default Values;
