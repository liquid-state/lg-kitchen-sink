import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, className, ...props }) => (
  <div className={`gesture-card ${className}`} {...props}>
    {title}
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Card;
