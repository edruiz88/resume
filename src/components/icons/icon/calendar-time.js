import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CalendarTime = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
    <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
    <circle cx="18" cy="18" r="4" />
    <path d="M15 3v4" />
    <path d="M7 3v4" />
    <path d="M3 11h16" />
    <path d="M18 16.496v1.504l1 1" />
    </svg>
  );
});

CalendarTime.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CalendarTime.displayName = 'CalendarTime';

export default CalendarTime;