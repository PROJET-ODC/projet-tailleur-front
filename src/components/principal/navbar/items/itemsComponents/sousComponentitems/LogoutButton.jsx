import React from 'react';

const LogoutButton = () => {
  return (
    <a className="account-item">
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
