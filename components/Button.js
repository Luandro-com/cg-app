import React from 'react';
import { colors } from '../utils/config';

const Button = ({ children, styles, height, width, padding, margin, small, big, large, round, borderColor, color, background, uppercase, dark, onClick }) => {
  const customWrapper = {
    fontSize: big ? '1.3em' : 'inherit',
    fontWeight: big ? 600 : 'inherit',
    height: height || 'auto',
    width: width || 'inherit',
    margin: margin || '0 auto',
    padding: padding || big ? '15px 30px' : '5px 15px',
    borderRadius: round ? '25px' : 'inherit',
    border: borderColor ? `1px solid ${borderColor}` : '1px solid transparent',
    textTransform: uppercase ? 'uppercase' : 'inherit',
    background: dark ? background || colors.black : background || colors.white,
    color: dark ? color || colors.white : color || colors.black,
  };
  const getClasses = () => {
    if (dark) {
      return 'wrapper dark';
    }
    return 'wrapper';
  }
  return (
    <button
      style={{ ...customWrapper, ...styles }}
      className={getClasses()}
      onClick={() => onClick()}
    >
      {children}
      <style jsx>{`
        .wrapper {
          box-shadow: 0;
          transition: all 0.2s ease-in-out;
          cursor: pointer;
        }
        .wrapper:hover {
          background: ${colors.black};
          color: ${colors.white};
        }
        .dark:hover {
          background: ${colors.white};
          color: ${colors.black};
        }
      `}</style>
    </button>
  );
};

Button.propTypes = {
  onClick: React.PropTypes.func,
  children: React.PropTypes.node,
  height: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  width: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  padding: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  small: React.PropTypes.bool,
  big: React.PropTypes.bool,
  large: React.PropTypes.bool,
  round: React.PropTypes.bool,
  borderColor: React.PropTypes.string,
  color: React.PropTypes.string,
  background: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.func]),
  uppercase: React.PropTypes.bool,
  dark: React.PropTypes.bool,
};

export default Button;
