import React from 'react';

const ProfileAccountItem = () => {
  return (
    <a
      id="profile-link"
      href="profile-main.html"
      className="account-item"
    >
      <div className="media">
        <div className="media-left">
          <div className="image">
            <img
              src="../via.placeholder.com/400x400.png"
              data-demo-src="assets/img/avatars/jenna.png"
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
