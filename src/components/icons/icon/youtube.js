import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Youtube = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
    <rect x="3" y="5" width="18" height="14" rx="4" />
    <path d="M10 9l5 3l-5 3z" />
    </svg>
  );
});

Youtube.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Youtube.displayName = 'Youtube';

export default Youtube;