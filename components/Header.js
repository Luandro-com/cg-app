import React from 'react';
import FitText from 'react-fittext';
import Button from './Button';
import Rendered from './Rendered';
import { colors } from '../utils/config';

const wrapper = {
  padding: 0,
  background: colors.grey,
  height: '98vh',
};

const Header = ({ slug, title, text, image, headerColor, custom }) => {
  const customStyle = {
    backgroundColor: headerColor || colors.grey,
    backgroundImage: image ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image})` : '',
    backgroundSize: 'cover',
  };
  return (
    <header
      id={slug}
      style={{ ...wrapper, ...customStyle }}
    >
      <div className="container">
        <FitText compressor={2.7}>
          <h2 style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.5)', marginBottom: -20 }}>
            <Rendered data={text || 'Subtítulo'} />
          </h2>
        </FitText>
        <FitText compressor={4}>
          <h1 style={{ fontSize: '1.5em', fontWeight: 800, textTransform: 'uppercase', textShadow: '2px 2px 4px rgba(0,0,0,0.5)', padding: '10px 0 20px' }}>
            {title || 'Título'}
          </h1>
        </FitText>
        <div className="buttons-list">
          {custom && custom.botoes.map((item, key) => <div className="buttons" key={key}>
            <a href={item.link}>
              <Button
                round
                style={{
                  height: 40,
                  width: 100,
                }}
                dark
                background={colors.orange}
              >
                {item.titulo}
              </Button>
            </a>
          </div>)}
        </div>
      </div>
      <style jsx>{`
        .container {
          position: relative;
          top: 50%;
          color: ${colors.white};
          text-align: center;
        }
        .buttons {
          margin-right: 0;
          margin-top: 10px;
        }
        @media(min-width: 768px) {
          .container {
            max-width: 600px;
            margin: 0 auto;
            text-align: left;
          }
          .buttons-list {
            display: flex;
            flex-flow: row nowrap;
          }
          .buttons {
            margin-right: 50px;
            margin-top: 0;
          }
        }
        @media(min-width: 968px) {
          .container {
             max-width: 800px;
          }
        }
        @media(min-width: 1024px) {
          .container {
             max-width: 968px;
          }
        }
      `}</style>
    </header>
  );
};

Header.propTypes = {
  // url: React.PropTypes.objectOf(React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.func, React.PropTypes.string])),
  slug: React.PropTypes.string,
  title: React.PropTypes.string,
  text: React.PropTypes.string,
  image: React.PropTypes.string,
  headerColor: React.PropTypes.string,
  custom: React.PropTypes.objectOf(React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array])),
};

export default Header;
