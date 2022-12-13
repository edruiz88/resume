import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CircleX = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
    <circle cx="12" cy="12" r="9" />
    <path d="M10 10l4 4m0 -4l-4 4" />
    </svg>
  );
});

CircleX.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CircleX.displayName = 'CircleX';

export default CircleX;