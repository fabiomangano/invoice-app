import React from 'react';
import PropTypes from 'prop-types';
import placeholderAvatar from '../../assets/image-avatar.jpg';
import './Avatar.style.scss';

const Avatar = ({ src, size, alt }) => (
  <img className="avatar" src={src} alt={alt} size={size} />
);

Avatar.defaultProps = {
  size: 'medium',
  src: placeholderAvatar,
};

Avatar.propTypes = {
  src: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  alt: PropTypes.string.isRequired,
};

export default Avatar;
