const AvatarComponent = () => {
  return (
      <div className="recipient-block">
          <div className="avatar-container">
              {/* <img className="user-avatar" src="../via.placeholder.com/300x300.png" data-demo-src="assets/img/avatars/dan.jpg" alt="Dan Walker" /> */}
          </div>
          <div className="username">
              <span>Dan Walker</span>
              <span><i data-feather="star"></i> <span>| Online</span></span>
          </div>
      </div>
  );
};

export default AvatarComponent;
