import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { useSpring, animated, config } from 'react-spring';
import { useDrag } from 'react-use-gesture';

const clamp = (v, min, max) => (v < min ? min : (v > max ? max : v));

const scrollVelocity = 2.0;

const Scroll = ({ children }) => {
  const [initial, setInitial] = useState(0);

  const div = useRef(null);

  const [{ scroll }, set] = useSpring(() => ({
    scroll: 0,
    config: config.gentle,
  }));
  const bind = useDrag(({ last, movement: [x] }) => {
    const movement = (x * -1) * scrollVelocity;
    const max = div.current.scrollWidth - div.current.clientWidth;
    const v = clamp(movement + initial, 0, max);
    set({ scroll: v });
    if (last) {
      setInitial(v);
    }
  });

  return (
    <animated.div
      {...bind()}
      scrollLeft={scroll}
      className="scroll-container"
      ref={div}
    >
      {children}
    </animated.div>
  );
};

export default Scroll;
