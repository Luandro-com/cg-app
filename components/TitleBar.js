import React from 'react';
import { colors } from '../utils/config';
import VisibilitySensor from 'react-visibility-sensor';

class TitleBar extends React.Component {
  state = {
    isVisible: false,
  }
  render() {
    const { destaque } = this.props;
    const { isVisible } = this.state;
    const onChange = (visibility) => {
      this.setState({
        isVisible: visibility,
      });
    };
    const animation = isVisible ? 0 : '-500px';
    const backgroundC = destaque ? colors.secondary : colors.orange;
    return (
      <VisibilitySensor onChange={onChange} scrollDelay={50}>
        <div>
          <div
            className="bars long"
            style={{
              background: backgroundC,
              transform: `translateX(${animation})`,
            }}
          />
          <div
            className="bars short"
            style={{
              background: backgroundC,
              transform: `translateX(${animation})`,
            }}
          />
          <style jsx>{`
            .bars {
              position: relative;
              left: -20%;
              z-index: -1;
              transition: all 0.5s ease-in-out;
            }
            .long {
              top: -55px;
              width: 110%;
              height: 40px;
              margin-bottom: -40px;
            }
            .short {
              top: -13px;
              width: 80%;
              height: 3px;
              margin-bottom: -3px;
            }
            @media (min-width: 1024px) {
              .bars {
                left: -30%;
              }
            }
          `}</style>
        </div>
      </VisibilitySensor>
    );
  }
}

TitleBar.propTypes = {
  destaque: React.PropTypes.bool,
};

export default TitleBar;
