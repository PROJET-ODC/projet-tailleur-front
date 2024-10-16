import ProfileImage from './itemsComponents/sousComponentitems/ProfileImage';
import ProfileDropdown from './itemsComponents/sousComponentitems/ProfileDropdown';
import { useEffect, useState } from 'react';
import decodedToken from '../../../../utils/decryptJWT';

const ProfileIcon = () => {
  const [tokenObject, setTokenObject] = useState("");

  useEffect(() => {
    // Retrieve the token from localStorage
    const authToken = localStorage.getItem("token");
    if (authToken) {
      setTokenObject( (prevState) => decodedToken(authToken));
    } else {
      console.error("No token found");
    }
  }, []);
  return (
    <div
      id="account-dropdown"
      className="navbar-item is-account drop-trigger has-caret"
    >
      <ProfileImage tokenObject={tokenObject}/>
      <ProfileDropdown tokenObject={tokenObject}/>
    </div>
  );
};

export default ProfileIcon;
