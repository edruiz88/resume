
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Right = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
    <polyline points="9 6 15 12 9 18" />
    </svg>
  );
});

Right.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Right.displayName = 'Right';

export default Right;