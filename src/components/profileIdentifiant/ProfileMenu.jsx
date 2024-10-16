// ProfileMenu.jsx
import React from 'react';

const ProfileMenu = () => {
  return (
    <div class="profile-menu is-hidden-mobile">
    <div class="menu-start">
        <a href="profile-about.html" class="button has-min-width">About</a>
    </div>
    <div class="menu-end">
        <a id="profile-friends-link" href="profile-friends.html"
            class="button has-min-width">Friends</a>
        <a href="profile-photos.html" class="button has-min-width">Photos</a>
    </div>
</div>
  );
};

export default ProfileMenu;
