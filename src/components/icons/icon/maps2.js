import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Maps2 = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
    <line x1="18" y1="6" x2="18" y2="6.01" />
    <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />
    <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />
    <line x1="9" y1="4" x2="9" y2="17" />
    <line x1="15" y1="15" x2="15" y2="20" />
    </svg>
  );
});

Maps2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Maps2.displayName = 'Maps2';

export default Maps2;