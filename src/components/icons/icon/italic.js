import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Italic = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
    <line x1="11" y1="5" x2="17" y2="5" />
    <line x1="7" y1="19" x2="13" y2="19" />
    <line x1="14" y1="5" x2="10" y2="19" />
    </svg>
  );
});

Italic.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Italic.displayName = 'Italic';

export default Italic;