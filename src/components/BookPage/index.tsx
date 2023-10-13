import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const BookPage: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const pageAnimation = useSpring({
    transform: isAnimating ? 'translate3d(0, -100%, 0)' : 'translate3d(0, 0, 0)',
  });

  useEffect(() => {
    if (scrollY > 200) {
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
    }
  }, [scrollY]);

  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      <animated.div style={pageAnimation}>
        <div style={{ height: '100vh', backgroundColor: 'lightblue' }}>
          Page 1
        </div>
        <div style={{ height: '100vh', backgroundColor: 'lightcoral' }}>
          Page 2
        </div>
        {/* Add more content for additional pages */}
      </animated.div>
    </div>
  );
};

export default BookPage;
