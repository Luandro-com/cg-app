import React from 'react';
import { colors } from '../utils/config';

const Item = ({ titulo, imagem, descricao, destaque, fundo }) => (
  <div className="wrapper">
    <div className="image-container">
      <img
        src={imagem}
        alt={titulo}
        style={{
          margin: '25px 0',
          height: 80,
          transition: 'all 0.5s ease-in-out',
        }}
      />
    </div>
    <h3
      style={{
        color: fundo ? colors.white : colors.black,
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: '1em',
        transition: 'all 0.5s ease-in-out',
      }}
    >{titulo}</h3>
    <div
      className="line"
      style={{
        borderBottom: `2px solid ${destaque ? colors.secondary : colors.orange}`,
      }}
    />
    <p className="text" style={{ color: destaque ? colors.white : colors.black }}>
      {descricao}
    </p>
    <style jsx>{`
      .wrapper {
        padding: 50px 0;
        margin-bottom: 55px;
      }
      .image-container:hover ~ .text { opacity: 1; transform: translateY(-40px); }
      .image-container:hover > img { border: 0; transform: translateY(-20px); }
      .image-container:hover + h3 { transform: translateY(-40px); }
      .image-container:hover { border: 2px solid transparent; }
      .image-container:hover ~ .line { width: 0; }
      .image-container {
        cursor: pointer;
        text-align: center;
        margin: 0 auto;
        height: 130px;
        width: 130px;
        border-radius: 50%;
        border: 2px solid ${colors.grey};
        transition: all 0.2s ease-in-out;
      }
      .line {
        width: 48%;
        margin: -7px auto 0;
        transition: all 0.2s ease-in-out;
      }
      .text {
        text-align: center;
      }
      @media(min-width: 768px) {
        .wrapper {
          width: 28%;
        }
        .text {
          height: 320px;
          margin-bottom: -320px;
          pointer-events: none;
          opacity: 0;
          transition: all 0.5s ease-in-out;
        }
      }
    `}</style>
  </div>
);

Item.propTypes = {
  titulo: React.PropTypes.string,
  imagem: React.PropTypes.string,
  descricao: React.PropTypes.string,
  destaque: React.PropTypes.bool,
  fundo: React.PropTypes.string,
};

export default Item;
