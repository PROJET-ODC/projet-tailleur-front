import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileAccountItem from './ProfileAccountItem';
import LogoutButton from './LogoutButton';

const ProfileDropdown = () => {
  return (
    <div className="nav-drop is-account-dropdown">
      <div className="inner">
        <ProfileHeader />
        <div className="nav-drop-body account-items">
          <ProfileAccountItem />
          <hr className="account-divider" />
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
