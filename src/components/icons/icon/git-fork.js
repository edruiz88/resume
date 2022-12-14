import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const GitFork = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
        <circle cx="12" cy="18" r="2" />
        <circle cx="7" cy="6" r="2" />
        <circle cx="17" cy="6" r="2" />
        <path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2" />
        <line x1="12" y1="12" x2="12" y2="16" />
    </svg>
  );
});

GitFork.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GitFork.displayName = 'GitFork';

export default GitFork;