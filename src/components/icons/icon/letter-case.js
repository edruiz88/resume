import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const LetterCase = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
    <circle cx="17.5" cy="15.5" r="3.5" />
    <path d="M3 19v-10.5a3.5 3.5 0 0 1 7 0v10.5" />
    <path d="M3 13h7" />
    <path d="M21 12v7" />
    </svg>
  );
});

LetterCase.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LetterCase.displayName = 'LetterCase';

export default LetterCase;