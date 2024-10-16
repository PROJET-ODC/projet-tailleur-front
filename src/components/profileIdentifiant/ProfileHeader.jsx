const ProfileHeader = ({ avatar }) => {
  return (
    <div className="cover-bg">
      <img
        style={{ width: "100%", height: "auto" }}
        className="cover-image-4"
        src="https://timelinecovers.pro/facebook-cover/download/new-york-times-square-facebook-cover.jpg"
        alt=""
      />
      <div className="avatar">
        <img
          id="user-avatar"
          className="avatar-image"
          src={avatar} // Utilisation de l'avatar passé en prop
          alt=""
        />
        <div className="avatar-button">
          <i data-feather="plus"></i>
        </div>
      </div>
      <div className="cover-overlay"></div>
      <div className="cover-edit modal-trigger">
        <i className="mdi mdi-camera"></i>
      </div>
    </div>
  );
};

export default ProfileHeader;
