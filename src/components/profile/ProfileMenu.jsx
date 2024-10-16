import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have this import

const ProfileMenu = ({ role }) => {
  return (
    <div className="profile-menu is-hidden-mobile">
      <div className="menu-start">
        <a href="profile-about.html" className="button has-min-width">About</a>
        {role === 'tailleur' && (
          <a href="follow.html" className="button has-min-width">Follow</a>
        )}
      </div>
      <div className="menu-end">
        <Link to="/followers" className="button has-min-width">
          Followers
        </Link>
        <a href="profile-photos.html" className="button has-min-width">Photos</a>
      </div>
    </div>
  );
};

export default ProfileMenu;
