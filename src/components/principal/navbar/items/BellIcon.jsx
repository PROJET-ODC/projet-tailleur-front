import NotificationList from "./itemsComponents/sousComponentitems/NotificationList";

const BellIcon = () => {
  return (
    <div className="navbar-item is-icon drop-trigger">
      <a className="icon-link" href="javascript:void(0);">
        <i data-feather="bell"></i>
        <span className="indicator"></span>
      </a>

      <div className="nav-drop">
        <div className="inner">
          <div className="nav-drop-header">
            <span>Notifications</span>
            <a href="#">
              <i data-feather="bell"></i>
            </a>
          </div>

          {/* Liste des notifications */}
          <NotificationList />

          <div className="nav-drop-footer">
            <a href="#">View All</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BellIcon;
