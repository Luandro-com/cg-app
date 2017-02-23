import React from 'react';
import { colors } from '../utils/config';

const inputStyle = {
  boxSizing: 'border-box',
  padding: '8px 2%',
  background: 'transparent',
  color: colors.white,
  fontSize: '0.8em',
  fontWeight: 100,
  boxShadow: 0,
};

const Input = ({ type, dark, background, width, label, onChange, value }) => {
  const customStyle = {
    width: width || '100%',
    background: dark ? '#272526' : background || colors.white,
    color: dark ? colors.white : colors.black,
    border: dark ? '1px solid #272526' : `1px solid ${colors.dark}`,
  };

  if (type === 'textarea') {
    return (<textarea
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{ ...inputStyle, ...customStyle }}
    />);
  }

  return (<input
    value={value}
    type={type || 'text'}
    onChange={e => onChange(e.target.value)}
    style={{ ...inputStyle, ...customStyle }}
  />);
};

Input.propTypes = {
  type: React.PropTypes.string,
  onChange: React.PropTypes.func,
  dark: React.PropTypes.bool,
  background: React.PropTypes.string,
  label: React.PropTypes.string,
  width: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
};

export default Input;
