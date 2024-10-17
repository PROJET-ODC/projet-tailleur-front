// ProfileMenu.jsx
import { Link } from "react-router-dom";

const ProfileMenu = () => {
  return (
    <div className="profile-menu is-hidden-mobile">
      <div className="menu-start">
        <a href="profile-about.html" className="button has-min-width">
          About
        </a>
      </div>
      <div className="menu-end !flex !flex-row !gap-4">
        <Link
          id="profile-friends-link"
          to=""
          className="button has-min-width"
        >
          Friends
        </Link>
        <Link to="/" className="button has-min-width">
          Follow
        </Link>
      </div>
    </div>
  );
};

export default ProfileMenu;
