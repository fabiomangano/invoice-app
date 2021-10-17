import React from 'react';
import PropTypes from 'prop-types';
import placeholderAvatar from '../../assets/image-avatar.jpg';
import './Avatar.style.scss';

const Avatar = ({ src, alt }) => <img className="avatar" src={src} alt={alt} />;

Avatar.defaultProps = {
  src: placeholderAvatar,
};

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

export default Avatar;
