import React from 'react';
import './scrolldown.css';

const ScrollDown = ({ xPosition, yPosition, position }) => {
  return (
    <div
      className="container"
      style={{
        position: position,
        width: '24px',
        height: '24px',
        top: yPosition,
        left: xPosition,
      }}
    >
      <div className="chevron"></div>
      <div className="chevron"></div>
      <div className="chevron"></div>
      <span className="text font-playFairSc text-sm font-thin">
        Scroll down
      </span>
    </div>
  );
};

export default ScrollDown;
