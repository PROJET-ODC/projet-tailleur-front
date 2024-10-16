const DropdownMenu = () => {
  return (
      <div className="dropdown-menu" role="menu">
          <div className="dropdown-content">
              <a href="#" className="dropdown-item">
                  <div className="media">
                      <i data-feather="message-square"></i>
                      <div className="media-content">
                          <h3>Details</h3>
                          <small>View this conversation's details.</small>
                      </div>
                  </div>
              </a>
              <a className="dropdown-item">
                  <div className="media">
                      <i data-feather="settings"></i>
                      <div className="media-content">
                          <h3>Preferences</h3>
                          <small>Define your preferences.</small>
                      </div>
                  </div>
              </a>
              <hr className="dropdown-divider" />
              <a className="dropdown-item">
                  <div className="media">
                      <i data-feather="bell"></i>
                      <div className="media-content">
                          <h3>Notifications</h3>
                          <small>Set notifications settings.</small>
                      </div>
                  </div>
              </a>
              <a className="dropdown-item">
                  <div className="media">
                      <i data-feather="bell-off"></i>
                      <div className="media-content">
                          <h3>Silence</h3>
                          <small>Disable notifications.</small>
                      </div>
                  </div>
              </a>
              <hr className="dropdown-divider" />
              <a className="dropdown-item">
                  <div className="media">
                      <i data-feather="box"></i>
                      <div className="media-content">
                          <h3>Archive</h3>
                          <small>Archive this conversation.</small>
                      </div>
                  </div>
              </a>
              <a className="dropdown-item">
                  <div className="media">
                      <i data-feather="trash-2"></i>
                      <div className="media-content">
                          <h3>Delete</h3>
                          <small>Delete this conversation.</small>
                      </div>
                  </div>
              </a>
          </div>
      </div>
  );
};

export default DropdownMenu;
