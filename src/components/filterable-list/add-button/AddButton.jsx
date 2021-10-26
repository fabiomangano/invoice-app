import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../button/Button';

const AddButton = ({ children, add }) => (
  <Button variant="primary" onClick={add}>
    {children}
  </Button>
);

AddButton.propTypes = {
  add: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default AddButton;
