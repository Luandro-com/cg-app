import React from 'react';
import { colors } from '../utils/config';
import Button from './Button';


const Action = ({ slug, title, custom: { botao_titulo, botao_link } }) => (
  <section className="wrapper" id={slug}>
    <div className="container">
      <h2>{title}</h2>
      <a href={botao_link} target="_blank"><Button big round>{botao_titulo}</Button></a>
    </div>
    <style jsx>{`
      .wrapper {
        width: 100%;
        padding: 35px 0;
        margin: 0 auto;
        background: ${colors.orange};
        color: ${colors.white};
      }
      .container {
        max-width: 968px;
        margin: 0 auto;
        text-align: center;
      }
      @media (min-width: 768px) {
        .wrapper {
          display: flex;
          flex-flow: row wrap;
        }
      }
    `}</style>
  </section>
);

Action.defaultProps = {
  custom: {
    botao_titulo: '',
    botao_link: '',
  },
};

Action.propTypes = {
  custom: React.PropTypes.objectOf(React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array, React.PropTypes.string])),
  title: React.PropTypes.string,
  slug: React.PropTypes.string,
};

export default Action;
