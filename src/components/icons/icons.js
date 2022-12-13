import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Icons = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  
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
    <circle cx="12" cy="13" r="7" />
    <polyline points="12 10 12 13 14 13" />
    <line x1="7" y1="4" x2="4.25" y2="6" />
    <line x1="17" y1="4" x2="19.75" y2="6" />
    </svg>
  );
});

Alarm.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Alarm.displayName = 'Alarm';

export default Alarm;