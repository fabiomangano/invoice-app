import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../button/Button';

const AddButton = ({ children, onClick }) => (
  <Button variant="primary" onClick={onClick}>
    {children}
  </Button>
);

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default AddButton;
