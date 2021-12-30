import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const OutDent = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
    <line x1="20" y1="6" x2="13" y2="6" />
    <line x1="20" y1="12" x2="11" y2="12" />
    <line x1="20" y1="18" x2="13" y2="18" />
    <path d="M8 8l-4 4l4 4" />
    </svg>
  );
});

OutDent.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

OutDent.displayName = 'OutDent';

export default OutDent;