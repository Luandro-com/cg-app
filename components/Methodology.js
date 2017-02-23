import React from 'react';
import { colors } from '../utils/config';
import Button from './Button';
import Rendered from './Rendered';

const itemHeight = 280;

const Methodology = ({ title, slug, custom }) => {
  const { metodologias } = custom;
  return (
    <section id={slug} className="wrapper">
      <h2>{title}</h2>
      <div className="container">
        {metodologias.map((item, key) => (
          <div
            style={{
              background: item.backgroundColor,
              backgroundColor: item.cor_de_fundo,
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${item.imagem_de_fundo})`,
            }}
            className="item"
            key={key}
          >
            <div className="title">
              <h3 style={{ fontWeight: '900', fontSize: '3em', lineHeight: 0.1 }}>{key + 1}.</h3>
              <h4>{item.titulo}</h4>
            </div>
            <div className="text">
              <img alt={item.botao_titulo} src={item.icone} height="50" style={{ width: 50, margin: '0 auto' }} />
              <Rendered
                data={item.texto || '<p>Carregando....</p>'}
                style={{
                  margin: '0 auto',
                  maxWidth: '95%',
                  fontSize: '0.9em',
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .wrapper {
          text-align: center;
          margin: 0 auto;
        }
        .container {
          margin: 0;
          background: ${colors.white};
          text-align: center;
        }
        .item {
          width: 100%;
          cursor: pointer;
          height: ${itemHeight}px;
          color: ${colors.white};
          background-size: cover;
        }
        .item:hover {
          background-image: none !important;
        }
        .title {
          transition: all 0.5s ease-in-out;
          display: flex;
          flex-flow: column;
          justify-content: space-around;
          text-align: center;
        }
        .text {
          margin-bottom: -${itemHeight}px;
          opacity: 0;
          transition: all 0.5s ease-in-out;
          transform: translateY(-${itemHeight}px);
          display: flex;
          flex-flow: column;
          justify-content: space-between;
          text-align: center;
        }
        .item:hover .title { opacity: 0; transform: translateY(-20px); }
        .item:hover .text { opacity: 1; transform: translateY(-100px); }
        @media(min-width: 768px) {
           .container {
              height: ${itemHeight}px;
              display: flex;
              flex-flow: row wrap;
           }
           .item {
            width: 33.3333%;
           }
         }
      `}</style>
    </section>
  );
};

Methodology.defaultProps = {
  custom: {
    title: 'Título',
    metodologias: [],
  },
};

Methodology.propTypes = {
  title: React.PropTypes.string,
  slug: React.PropTypes.string,
  custom: React.PropTypes.objectOf(React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array, React.PropTypes.bool, React.PropTypes.string])),
};

export default Methodology;
