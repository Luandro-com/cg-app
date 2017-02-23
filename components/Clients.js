import React from 'react';
import Pic from './ClientPic';
import Quote from './ClientQuote';

const wrapper = {
  maxWidth: 968,
  padding: '80px 0 200px',
  margin: '0 auto',
  textAlign: 'center',
};

class Clients extends React.Component {
  state = {
    active: 0,
    timer: 0,
  }

  componentDidMount() {
    this.startTimer();
  }

  startTimer = () => {
    const { timer, active } = this.state;
    const { custom: { clientes } } = this.props;
    const getAvailableKeys = () => {
      const keys = [];
      clientes.map((item, key) => {
        if (item.texto.length > 3) {
          keys.push(key);
        }
      });
      return keys;
    };
    const availableKeys = getAvailableKeys();
    setTimeout(() => {
      this.setState({
        timer: timer + 1,
      }, () => {
        if (timer !== 0 && timer % 5 === 0) {
          if (availableKeys[timer / 5]) {
            this.setState({
              active: availableKeys[timer / 5],
            });
          } else {
            this.setState({
              active: availableKeys[0],
            });
          }
        }
        this.startTimer();
      });
    }, 1000);
  }

  handleClick = (key, item) => {
    if (item.texto.length > 3) {
      this.setState({
        active: key,
      });
    }
  }

  render() {
    const { active } = this.state;
    const { slug, title, custom: { clientes } } = this.props;
    const isActive = key => key === active;
    return (
      <section
        id={slug}
        style={wrapper}
      >
        <h2>{title}</h2>
        <div
          style={{
            paddingTop: 60,
            display: 'flex',
            flexFlow: 'row wrap',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          {clientes.map((item, key) => <Pic action={() => this.handleClick(key, item)} key={key} isActive={isActive(key)} {...item} />)}
        </div>
        <hr />
        {clientes.map((item, key) => {
          if (item.texto.length > 3) {
            return <Quote key={key} isActive={isActive(key)} {...item} />;
          }
        })}
      </section>
    );
  }
}

Clients.defaultProps = {
  custom: {
    clientes: [],
  },
};

Clients.propTypes = {
  slug: React.PropTypes.string,
  title: React.PropTypes.string,
  custom: React.PropTypes.objectOf(React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array])),
};

export default Clients;
