import React from 'react';
import PropTypes from 'prop-types';
import useAnimatedSvg from '../hooks/useAnimatedSvg';

const AnimatedSvgCard = ({
  title, staticImage, animatedImage, animationTime,
}) => {
  const [url, animate] = useAnimatedSvg(staticImage, animatedImage, animationTime);

  return (
    <div className="animated-svg-card" onClick={animate}>
      <h2>{title}</h2>
      <img src={url} alt="" />
    </div>
  );
};

AnimatedSvgCard.propTypes = {
  title: PropTypes.string.isRequired,
  staticImage: PropTypes.string.isRequired,
  animatedImage: PropTypes.string.isRequired,
  animationTime: PropTypes.number.isRequired,
};

export default AnimatedSvgCard;
