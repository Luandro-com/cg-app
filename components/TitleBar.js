import React from 'react';
import { colors } from '../utils/config';

const TitleBar = ({ destaque }) => (
  <div>
    <div className="bars long" style={{ background: destaque ? colors.secondary : colors.orange }} />
    <div className="bars short" style={{ background: destaque ? colors.secondary : colors.orange }} />
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
);

TitleBar.propTypes = {
  scroll: React.PropTypes.number,
  destaque: React.PropTypes.bool,
};

export default TitleBar;
