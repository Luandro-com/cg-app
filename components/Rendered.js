import React from 'react';

const createMarkup = (data) => {
  return { __html: data };
};

const Rendered = ({ data, style }) => (
  <div style={style} dangerouslySetInnerHTML={createMarkup(data)} />
);

Rendered.propTypes = {
  style: React.PropTypes.object,
  data: React.PropTypes.string.isRequired,
};

export default Rendered;
