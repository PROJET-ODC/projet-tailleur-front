import { useContext } from "react";
import { AuthContext } from "../../../../../../context/AuthContext";

const LogoutButton = () => {
  const { updateAuthStatus } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    updateAuthStatus();
  };

  return (
    <a className="account-item" onClick={handleLogout}>
      <div className="media">
        <div className="icon-wrap">
          <i data-feather="power"></i>
        </div>
        <div className="media-content">
          <h3>Log out</h3>
          <small>Log out from your account.</small>
        </div>
      </div>
    </a>
  );
};

export default LogoutButton;
