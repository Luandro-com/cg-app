import React from 'react';
import { Link } from 'react-scroll';
import { colors } from '../utils/config';
import Popup from './Popup';

class Navbar extends React.Component {
  state = {
    open: false,
  }

  handleOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    const { menuItems, height, fixed } = this.props;
    const customWrapper = {
      position: fixed ? 'fixed' : 'static',
      height: height || 56,
    };
    const renderedMenuitems = menuItems.map((item) => {
      const url = item.url.substring(1);
      return (
        <Link
          key={item.title}
          to={url}
          activeClass="active"
          spy
          smooth
          offset={-50}
          duration={200}
          className="link"
        >
          <span>{item.title}</span>
        </Link>
      );
    }
    );
    return (
      <nav className="wrapper" style={customWrapper}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexFlow: 'row nowrap',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <a href="#header">
              <img
                src={'/static/imgs/logo.png'}
                alt="logo"
                className="image-b"
              />
              <img
                src={'/static/logo.svg'}
                alt="logo"
                className="image-s"
              />
            </a>
          </div>
          <div className="menu-items">
            {renderedMenuitems}
          </div>
          <Popup
            openState={open}
            close={this.handleClose}
            open={this.handleOpen}
            items={renderedMenuitems || []}
          />
        </div>
        <style jsx>{`
          .wrapper {
            margin: 0 auto;
            width: 100%;
            background: ${colors.white};
            top: 0;
            z-index: 99;
            color: ${colors.black};
            box-shadow: 2px 2px 8px rgba(0,0,0,0.5);
          }
          .container {
            height: 100%;
            width: 100%;
            margin: 0 auto;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: space-around;
          }
          .link {
            padding: 12px 0;
          }
          .image-b {
            width: 200px;
            display: block;
          }
          .image-s {
            height: 30px;
            width: 30px;
            display: none;
          }
          .menu-items {
            width: 80%;
            display: none;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: space-around;
          }
          @media(min-width: 640px) {
            .link {
              padding: 0;
            }
            .image {
              width: 240px;
            }
          }
          @media(min-width: 768px) {
            .wrapper {
              font-size: 0.8em;
            }
            .container {
              max-width: 80%;
            }
            .menu-items {
              display: flex;
            }
            .image-b {
              display: none;
            }
            .image-s {
              display: block;
            }
          }
          @media(min-width: 1024px) {
            .container {
              max-width: 968px;
            }
          }
        `}</style>
      </nav>
    );
  }
}

Navbar.defaultProps = {
  menuItems: [
    {
      title: 'About',
      url: '#about',
    },
    {
      title: 'Mission',
      url: '#mission',
    },
  ],
};

Navbar.propTypes = {
  menuItems: React.PropTypes.arrayOf(React.PropTypes.object),
  fixed: React.PropTypes.bool,
  height: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  logoImg: React.PropTypes.string,
};

export default Navbar;
