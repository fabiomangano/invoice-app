import React from 'react';
import PropTypes from 'prop-types';
import './Header.style.scss';

const Header = ({ children }) => (
  <div className="filterable-list__header">{children}</div>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
