import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DB = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
    <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>
    <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
    <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
    </svg>
  );
});

DB.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DB.displayName = 'DB';

export default DB;