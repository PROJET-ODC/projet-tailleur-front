const ProfileAccountItem = ({ tokenObject }) => {
  return (
    <a id="profile-link" href="profile-main.html" className="account-item">
      <div className="media">
        <div className="media-left">
          <div className="image">
            <img
              src={tokenObject?.picture || "https://placehold.co/50"}
              alt=""
            />
          </div>
        </div>
        <div className="media-content">
          <h3>Jenna Davis</h3>
          <small>Main account</small>
        </div>
        <div className="media-right">
          <i data-feather="check"></i>
        </div>
      </div>
    </a>
  );
};

export default ProfileAccountItem;
