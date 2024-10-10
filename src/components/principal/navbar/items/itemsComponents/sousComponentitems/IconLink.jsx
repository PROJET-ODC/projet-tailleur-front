import React from 'react';

const IconList = ({ href, children, className }) => {
  return (
    <a className={`icon-link ${className}`} href={href}>
      {children}
    </a>
  );
};

export default IconList;
