const ProfilePost = () => {
    return (
      <div className="profile-post">
        <div className="card is-post">
          <div className="content-wrap">
            <div className="card-heading">
              <div className="user-block">
                <div className="image">
                  <img src="../via.placeholder.com/300x300.png" alt="" />
                </div>
                <div className="user-info">
                  <a href="#">Jenna Davis</a>
                  <span className="time">October 17 2018, 11:03am</span>
                </div>
              </div>
            </div>
  
            <div className="card-body">
              <div className="post-text">
                <p>
                  Today I visited this amazing little fashion store in Church street.
                  Everything is handmade, from skirts to bags. Their products really
                  have an outstanding quality. If you don't know them already, well
                  it's time to make your move!
                </p>
              </div>
              <div className="post-image">
                <a href="../via.placeholder.com/1600x900.png">
                  <img src="../via.placeholder.com/1600x900.png" alt="" />
                </a>
              </div>
            </div>
  
            <div className="card-footer">
              <div className="right">
                <a className="btn button is-solid accent-button raised">
                  <i className="foot mdi mdi-cart-plus" style={{ fontSize: '24px' }}></i>
                </a>
              </div>
              <div className="social-count">
                <div className="likes-count">
                  <i data-feather="heart"></i>
                  <span>32</span>
                </div>
                <div className="shares-count">
                  <i data-feather="link-2"></i>
                  <span>4</span>
                </div>
                <div className="comments-count">
                  <i data-feather="message-circle"></i>
                  <span>5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProfilePost;
  