import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Mouse = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
    <rect x="6" y="3" width="12" height="18" rx="4" />
    <line x1="12" y1="7" x2="12" y2="11" />
    </svg>
  );
});

Mouse.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Mouse.displayName = 'Mouse';

export default Mouse;