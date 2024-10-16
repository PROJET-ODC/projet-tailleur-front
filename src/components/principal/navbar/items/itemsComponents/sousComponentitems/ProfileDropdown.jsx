import ProfileHeader from "./ProfileHeader";
import ProfileAccountItem from "./ProfileAccountItem";
import LogoutButton from "./LogoutButton";

const ProfileDropdown = ({ tokenObject }) => {
  return (
    <div className="nav-drop is-account-dropdown">
      <div className="inner">
        <ProfileHeader />
        <div className="nav-drop-body account-items">
          <ProfileAccountItem tokenObject={tokenObject} />
          <hr className="account-divider" />
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
