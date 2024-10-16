import { Link } from "react-router-dom";
const IconLink = ({ href, children, className }) => {
  return (

    // <Link to="/messages" />
 
    <Link className={`icon-link ${className}`} to="/messages">
      {children}
  </Link>
  );
};

export default IconLink;
