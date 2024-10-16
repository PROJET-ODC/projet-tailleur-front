// DropdownMenu.js
import React from "react";

const DropdownMenu = ({ isOpen, toggleDropdown, post }) => {
  return (
    <div className={`dropdown-menu ${isOpen ? "is-active" : ""}`} role="menu">
      <div className="dropdown-content">
        <a href="#" className="dropdown-item">
          <div className="media">
            <i data-feather="bookmark"></i>
            <div className="media-content">
              <h3>Bookmark</h3>
              <small>Add this post to your bookmarks.</small>
            </div>
          </div>
        </a>
        <a className="dropdown-item">
          <div className="media">
            <i data-feather="bell"></i>
            <div className="media-content">
              <h3>Notify me</h3>
              <small>Send me the updates.</small>
            </div>
          </div>
        </a>
        <hr className="dropdown-divider" />
        <a href="#" className="dropdown-item">
          <div className="media">
            <i data-feather="flag"></i>
            <div className="media-content">
              <h3>Flag</h3>
              <small>In case of inappropriate content.</small>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default DropdownMenu;
