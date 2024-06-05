// SvgBorder.js
import React from 'react';

const SvgBorder = ({ children, className }) => {
    const classNameSet = className;
    return (
    <div className="relative p-4">
      <div className="absolute inset-0">
        <svg className={classNameSet} width="100%" height="100%">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="#0e0c15"
            stroke="#5EF6FF"
            strokeWidth="3"
          />
        </svg>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
};

export default SvgBorder;
