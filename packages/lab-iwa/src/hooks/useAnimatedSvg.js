import { useState, useEffect } from 'react';

const useAnimatedSvg = (staticImage, animatedImage, time) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [{ loadedS, loadedA }, setImages] = useState({});
  useEffect(() => {
    (async () => {
      const s = await fetch(staticImage).then(r => r.blob()).then(b => URL.createObjectURL(b));
      const a = await fetch(animatedImage).then(r => r.blob()).then(b => URL.createObjectURL(b));
      setImages({ loadedS: s, loadedA: a });
    })();
    return () => {
      URL.revokeObjectURL(loadedS);
      URL.revokeObjectURL(loadedA);
    };
  }, [staticImage, animatedImage]);

  const animate = () => {
    if (isAnimating) {
      return;
    }
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), time);
  };

  return [isAnimating ? loadedA : loadedS, animate];
};

export default useAnimatedSvg;
