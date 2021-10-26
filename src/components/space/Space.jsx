import React from 'react';
import PropTypes from 'prop-types';

const Space = ({ direction, space }) => {
  if (direction === 'vertical')
    return <span style={{ display: 'flex', width: `${space}rem` }} />;
  return <span style={{ display: 'flex', height: `${space}rem` }} />;
};

Space.defaultProps = {
  direction: 'horizontal',
};

Space.propTypes = {
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  space: PropTypes.number.isRequired,
};

export default Space;
