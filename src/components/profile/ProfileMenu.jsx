import React from 'react';

const ProfileMenu = ({ role }) => {
  return (
    <div className="profile-menu is-hidden-mobile">
      <div className="menu-start">
        <a href="profile-about.html" className="button has-min-width">About</a>
        {/* Show Follow button if role is tailleur */}
        {role === 'tailleur' && (
          <a href="follow.html" className="button has-min-width">Follow</a>
        )}
      </div>
      <div className="menu-end">
        <a id="profile-friends-link" href="profile-friends.html" className="button has-min-width">Followers</a>
        <a href="profile-photos.html" className="button has-min-width">Photos</a>
      </div>
    </div>
  );
};

export default ProfileMenu;
