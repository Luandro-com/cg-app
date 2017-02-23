import React from 'react';
import { colors } from '../utils/config';

const Client = ({ texto, nome, imagem, action, isActive }) => (
  <div
    onClick={action}
    style={{
      cursor: texto.length > 3 ? 'pointer' : 'inherit',
    }}
  >
    <div
      style={{
        zIndex: -1,
        border: isActive ? (`2px solid ${colors.orange}`) : (texto.length > 3 ? '2px solid rgba(0,0,0,0.1)' : '2px solid transparent'),
        background: isActive ? colors.orange : 'none',
        // borderRadius: '50%',
        transition: 'all 0.3s ease-in-out',
        width: 102,
        height: 102,
        marginBottom: -102,
      }}
    />
    <img
      src={imagem}
      alt={nome}
      style={{
        opacity: (isActive || texto.length < 3) ? 1 : 0.5,
        width: 100,
        height: 100,
      }}
    />
  </div>
);

Client.propTypes = {
  imagem: React.PropTypes.string,
  nome: React.PropTypes.string,
  isActive: React.PropTypes.bool,
  action: React.PropTypes.func,
  texto: React.PropTypes.string,
};

export default Client;
