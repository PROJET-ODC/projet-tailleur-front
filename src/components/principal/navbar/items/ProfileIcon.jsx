import ProfileImage from './itemsComponents/sousComponentitems/ProfileImage';
import ProfileDropdown from './itemsComponents/sousComponentitems/ProfileDropdown';

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
