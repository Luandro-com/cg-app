import React from 'react';
import Rendered from './Rendered';
import { colors } from '../utils/config';

const itemHeight = 160;

class Team extends React.Component {
  state = {
    active: null,
  }

  handleClick = (key) => {
    this.setState({
      active: key,
    });
  }

  render() {
    const { slug, title, text, custom } = this.props;
    const { active } = this.state;
    return (
      <section id={slug} className="wrapper">
        <h2>{title}</h2>
        <h3 style={{ fontSize: '1.2em', fontWeight: '300', paddingBottom: 50 }}>
          <Rendered data={text} />
        </h3>
        <div className="list-wrapper">
          {custom && custom.membros.map((item, key) => <div key={key} className="item-wrapper">
            <img
              height={itemHeight}
              src={item.foto}
              alt={item.nome}
            />
            <h4 style={{ textTransform: 'uppercase', paddingBottom: 30 }}>{item.nome}</h4>
            <h5 style={{ marginTop: -20, textTransform: 'uppercase' }}>{item.cargo}</h5>
            <div className="line" />
            <div
              style={{
                background: colors.orange,
                paddingTop: 15,
                paddingBottom: 15,
                transition: '400ms all ease-out',
                transform: (active === key) ? 'translateY(29px)' : 'translateY(-35px)',
                display: (active === key) ? 'block' : 'none',
              }}
            >
              <p style={{ width: '85%', margin: '0 auto', color: colors.white, fontSize: '0.8em' }}>{item.texto}</p>
            </div>
            <div
              onClick={() => ((active === key) ? this.handleClick(null) : this.handleClick(key))}
              style={{
                cursor: 'pointer',
                zIndex: 9,
                margin: '0 auto',
                position: 'relative',
                bottom: -15,
                borderRadius: '50%',
                width: 40,
                height: 40,
                background: colors.orange,
              }}
            >
              <div className="plus vert" />
              <div
                className="plus"
                style={{
                  transform: (active === key) ? 'rotate(90deg)' : 'rotate(0deg)',
                  top: 5,
                  left: 18,
                  bottom: 5,
                  width: 5,
                }}
              />
            </div>
          </div>)}
        </div>
        <style jsx>{`
          .wrapper {
            margin: 0;
            text-align: center;
            padding: 80px 0;
          }
          .list-wrapper {
            padding: 50px 0 70px;
          }
          .item-wrapper {
            padding-bottom: 80px;
            transition: all 0.5s ease-in-out;
          }
          .item-wrapper img {
            max-height: 180px;
          }
          .line {
            width: 100%;
            border-top: 2px solid ${colors.orange};
            margin-bottom: -35px;
          }
          .plus {
            position: absolute;
            borderRadius: 3px;
            background: ${colors.white};
            transform: rotate(0deg);
            transition: 400ms all ease-out;
          }
          .vert {
            top: 18px;
            left: 5px;
            right: 5px;
            height: 5px;
          }
          @media(min-width: 640px) {
            .list-wrapper {
              padding: 0;
              display: flex;
              flex-flow: row wrap;
              justify-content: space-around;
            }
            .item-wrapper {
              width: 45%;
            }
            .line {
              width: 95%;
            }
          }
          @media(min-width: 768px) {
            .wrapper {
              margin: 0 auto;
              maxWidth: 80%;
              padding: 0;
            }
            .item-wrapper {
              width: 32%;
            }
          }
        `}</style>
      </section>
    );
  }
}

Team.defaultProps = {
  membros: [],
};

Team.propTypes = {
  slug: React.PropTypes.string,
  title: React.PropTypes.string,
  text: React.PropTypes.string,
  custom: React.PropTypes.objectOf(React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array])),
};

export default Team;
