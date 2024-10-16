import { Link } from "react-router-dom";

const ProfileAccountItem = ({ tokenObject }) => {
  return (
    <Link id="profile-link" to="/profile" className="account-item">
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
          <h3>{tokenObject?.identifiant}</h3>
          <small>Main account</small>
        </div>
        <div className="media-right">
          <i data-feather="check"></i>
        </div>
      </div>
    </Link>
  );
};

export default ProfileAccountItem;
