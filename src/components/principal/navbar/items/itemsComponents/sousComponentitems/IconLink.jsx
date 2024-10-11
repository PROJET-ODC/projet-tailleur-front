const IconLink = ({ href, children, className }) => {
  return (
    <a className={`icon-link ${className}`} href={href}>
      {children}
    </a>
  );
};

export default IconLink;
