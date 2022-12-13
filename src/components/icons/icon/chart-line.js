import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ChartLine = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <line x1="4" y1="19" x2="20" y2="19" />
      <polyline points="4 15 8 9 12 11 16 6 20 10" />
    </svg>
  );
});

ChartLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChartLine.displayName = 'ChartLine';

export default ChartLine;