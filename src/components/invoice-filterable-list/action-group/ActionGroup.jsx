import React from 'react';
import PropTypes from 'prop-types';
import './ActionGroup.style.scss';

const ActionGroup = ({ children }) => (
  <div className="filterble-list__action-group">{children}</div>
);

ActionGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ActionGroup;
