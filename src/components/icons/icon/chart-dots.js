import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ChartDots = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
    <path d="M3 3v18h18" />
    <circle cx="9" cy="9" r="2" />
    <circle cx="19" cy="7" r="2" />
    <circle cx="14" cy="15" r="2" />
    <line x1="10.16" y1="10.62" x2="12.5" y2="13.5" />
    <path d="M15.088 13.328l2.837 -4.586" />
    </svg>
  );
});

ChartDots.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChartDots.displayName = 'ChartDots';

export default ChartDots;