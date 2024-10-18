import MessageList from "./itemsComponents/sousComponentitems/MessageList";

const EnvelopeIcon = () => {
  return (
    <div className="navbar-item is-icon drop-trigger">
      <a className="icon-link is-active" href="#">
        <i data-feather="mail"></i>
        <span className="indicator"></span>
      </a>

      <div className="nav-drop">
        <div className="inner">
          <div className="nav-drop-header">
            <span>Messages</span>
            <a href="messages-inbox.htm">Inbox</a>
          </div>

          {/* Liste des messages */}
          <MessageList />

          <div className="nav-drop-footer">
            <a href="#">Clear All</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvelopeIcon;
