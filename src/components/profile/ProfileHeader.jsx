const ProfileHeader = ({ avatar }) => {
    return (
      <div className="cover-bg">
        <img
          className="cover-image"
          src="../via.placeholder.com/1600x460.png"
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
          <span>Edit cover image</span>
        </div>
      </div>
    );
  };
  
  export default ProfileHeader;
  