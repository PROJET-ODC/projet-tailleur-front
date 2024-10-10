import React from 'react';
import ProfileImage from '/home/aissata/projet-tailleur-front/src/components/principal/navbar/items/itemsComponents/sousComponentitems/ProfileImage.jsx';
import ProfileDropdown from '/home/aissata/projet-tailleur-front/src/components/principal/navbar/items/itemsComponents/sousComponentitems/ProfileDropdown.jsx';

const ProfileIcon = () => {
  return (
    <div
      id="account-dropdown"
      className="navbar-item is-account drop-trigger has-caret"
    >
      <ProfileImage />
      <ProfileDropdown />
    </div>
  );
};

export default ProfileIcon;
