import React from 'react';
import FaQuoteLeft from 'react-icons/lib/fa/quote-left';
import FaQuoteRight from 'react-icons/lib/fa/quote-right';
import { colors } from '../utils/config';

const wrapper = {
  maxWidth: 768,
  height: 300,
  margin: '60px auto -360px',
  textAlign: 'center',
};

const Quote = ({ nome, empresa, texto, isActive }) => {
  const customWrapper = {
    display: isActive ? 'inline-block' : 'none',
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'translateX(0px)' : 'translateX(-80px)',
    transition: 'all 0.3s ease-in-out',
  }
  return (
    <section style={{...wrapper, ...customWrapper}}>
      <h3>{nome}</h3>
      <h4>{empresa}</h4>
      <p>
        <FaQuoteLeft color={colors.orange} size={50} className="quote first"  />
        {texto}
        <FaQuoteRight color={colors.orange} size={50} className="quote" />
      </p>
      <style jsx>{`
        .quote {
            position: relative;
            float: right;
            opacity: 0.8;
            zIndex: -1;
            top: 5px;
            left: -10px;
            right: -10px;
        }
        .first {
          float: left;
          top: -20px;
        }
      `}</style>
    </section>
  );
};

// Quote.propTypes = {
//   nome: React.PropTypes.string,
//   empresa: React.PropTypes.string,
//   texto: React.PropTypes.string,
//   isActive: React.PropTypes.bool,
// };

// Quote.defaultProps = {
//   quote: {
//     name: 'Carregando...',
//     company: '...',
//     quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
//   },
// };

export default Quote;
