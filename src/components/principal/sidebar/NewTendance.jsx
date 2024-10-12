function NewTendance() {
  return (
    <div>
      <div
        className="card is-new-job-card has-background-image"
        data-background="assets/img/illustrations/cards/job-bg.svg"
      >
        <div className="card-heading">
          <i data-feather="briefcase"></i>
          <div className="dropdown is-spaced is-right dropdown-trigger is-light">
            <div>
              <div className="button">
                <i data-feather="more-vertical"></i>
              </div>
            </div>
            <div className="dropdown-menu" role="menu">
              <div className="dropdown-content">
                <a href="#" className="dropdown-item">
                  <div className="media">
                    <i data-feather="clock"></i>
                    <div className="media-content">
                      <h3>Remind me</h3>
                      <small>Remind me of this later today.</small>
                    </div>
                  </div>
                </a>
                <a className="dropdown-item">
                  <div className="media">
                    <i data-feather="message-circle"></i>
                    <div className="media-content">
                      <h3>Message</h3>
                      <small>Send an automatic congratz message.</small>
                    </div>
                  </div>
                </a>
                <hr className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <div className="media">
                    <i data-feather="trash-2"></i>
                    <div className="media-content">
                      <h3>Remove</h3>
                      <small>Removes this widget from your feed.</small>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div>
            <div className="job-avatar">
              <img
                src="../via.placeholder.com/300x300.png"
                data-demo-src="assets/img/avatars/nelly.png"
                alt=""
              />
            </div>
            <div className="job-content">
              <h4>Nelly has a new job!</h4>
              <p>Send her message congratulating her for getting this job.</p>
              <button type="button" className="button light-button">
                Write Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewTendance;
