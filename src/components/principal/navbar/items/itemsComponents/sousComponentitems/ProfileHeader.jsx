
const ProfileHeader = () => {
  return (
    <div className="nav-drop-header">
      <span className="username">Jenna Davis</span>
      <label className="theme-toggle">
        <input type="checkbox" />
        <span className="toggler">
          <span className="dark">
            <i data-feather="moon"></i>
          </span>
          <span className="light">
            <i data-feather="sun"></i>
          </span>
        </span>
      </label>
    </div>
  );
};

export default ProfileHeader;
