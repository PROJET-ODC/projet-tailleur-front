import { Outlet } from "react-router-dom";
import Navbar from "../components/principal/navbar/Navbar";
import LeftSideBar from "../components/principal/sidebar/LeftSideBar";
import RightSideBar from "../components/principal/sidebar/RightSideBar";
import PostInput from "../components/principal/section/PostInput";

const MainLayout = () => {
  return (
    <>
      <div
        id="main-navbar"
        className="navbar navbar-v1 is-inline-flex is-transparent no-shadow is-hidden-mobile"
      >
        <div className="container is-fluid">
          <div className="navbar-brand">
            <a href="index.html" className="navbar-item">
              <img
                className="logo light-image"
                src="assets/img/vector/logo/friendkit-bold.svg"
                width="112"
                height="28"
                alt=""
              />
              <img
                className="logo dark-image"
                src="assets/img/vector/logo/friendkit-white.svg"
                width="112"
                height="28"
                alt=""
              />
            </a>
          </div>

          <Navbar />
        </div>
      </div>

      <nav
        className="navbar mobile-navbar is-hidden-desktop"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="index.html">
            <img
              className="light-image"
              src="assets/img/vector/logo/friendkit-bold.svg"
              alt=""
            />
            <img
              className="dark-image"
              src="assets/img/vector/logo/friendkit-white.svg"
              alt=""
            />
          </a>

          <div className="navbar-item is-icon drop-trigger">
            <a className="icon-link is-friends" href="javascript:void(0);">
              <i data-feather="heart"></i>
              <span className="indicator"></span>
            </a>

            <div className="nav-drop">
              <div className="inner">
                <div className="nav-drop-header">
                  <span>Friend requests</span>
                  <a href="#">
                    <i data-feather="search"></i>
                  </a>
                </div>
                <div className="nav-drop-body is-friend-requests">
                  <div className="media">
                    <figure className="media-left">
                      <p className="image">
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/bobby.jpg"
                          alt=""
                        />
                      </p>
                    </figure>
                    <div className="media-content">
                      <a href="#">Bobby Brown</a>
                      <span>Najeel verwick is a common friend</span>
                    </div>
                    <div className="media-right">
                      <button className="button icon-button is-solid grey-button raised">
                        <i data-feather="user-plus"></i>
                      </button>
                      <button className="button icon-button is-solid grey-button raised">
                        <i data-feather="user-minus"></i>
                      </button>
                    </div>
                  </div>

                  <div className="media">
                    <figure className="media-left">
                      <p className="image">
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/dan.jpg"
                          alt=""
                        />
                      </p>
                    </figure>
                    <div className="media-content">
                      <a href="#">Dan Walker</a>
                      <span>You have 4 common friends</span>
                    </div>
                    <div className="media-right">
                      <button className="button icon-button is-solid grey-button raised">
                        <i data-feather="user-plus"></i>
                      </button>
                      <button className="button icon-button is-solid grey-button raised">
                        <i data-feather="user-minus"></i>
                      </button>
                    </div>
                  </div>

                  <div className="media">
                    <figure className="media-left">
                      <p className="image">
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/nelly.png"
                          alt=""
                        />
                      </p>
                    </figure>
                    <div className="media-content">
                      <span>
                        You are now friends with <a href="#">Nelly Schwartz</a>.
                        Check her <a href="#">profile</a>.
                      </span>
                    </div>
                    <div className="media-right">
                      <div className="added-icon">
                        <i data-feather="tag"></i>
                      </div>
                    </div>
                  </div>

                  <div className="media">
                    <figure className="media-left">
                      <p className="image">
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/milly.jpg"
                          alt=""
                        />
                      </p>
                    </figure>
                    <div className="media-content">
                      <a href="#">Milly Augustine</a>
                      <span>You have 8 common friends</span>
                    </div>
                    <div className="media-right">
                      <button className="button icon-button is-solid grey-button raised">
                        <i data-feather="user-plus"></i>
                      </button>
                      <button className="button icon-button is-solid grey-button raised">
                        <i data-feather="user-minus"></i>
                      </button>
                    </div>
                  </div>

                  <div className="media">
                    <figure className="media-left">
                      <p className="image">
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/elise.jpg"
                          alt=""
                        />
                      </p>
                    </figure>
                    <div className="media-content">
                      <span>
                        You are now friends with <a href="#">Elise Walker</a>.
                        Check her
                        <a href="#">profile</a>.
                      </span>
                    </div>
                    <div className="media-right">
                      <div className="added-icon">
                        <i data-feather="tag"></i>
                      </div>
                    </div>
                  </div>

                  <div className="media">
                    <figure className="media-left">
                      <p className="image">
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/edward.jpeg"
                          alt=""
                        />
                      </p>
                    </figure>
                    <div className="media-content">
                      <span>
                        You are now friends with <a href="#">Edward Mayers</a>.
                        Check his
                        <a href="#">profile</a>.
                      </span>
                    </div>
                    <div className="media-right">
                      <div className="added-icon">
                        <i data-feather="tag"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav-drop-footer">
                  <a href="#">View All</a>
                </div>
              </div>
            </div>
          </div>
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
                <div className="nav-drop-body is-notifications">
                  <div className="media">
                    <figure className="media-left">
                      <p className="image">
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/david.jpg"
                          alt=""
                        />
                      </p>
                    </figure>
                    <div className="media-content">
                      <span>
                        <a href="#">David Kim</a> commented on
                        <a href="#">your post</a>.
                      </span>
                      <span className="time">30 minutes ago</span>
                    </div>
                    <div className="media-right">
                      <div className="added-icon">
                        <i data-feather="message-square"></i>
                      </div>
                    </div>
                  </div>

                  <div className="media">
                    <figure className="media-left">
                      <p className="image">
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/daniel.jpg"
                          alt=""
                        />
                      </p>
                    </figure>
                    <div className="media-content">
                      <span>
                        <a href="#">Daniel Wellington</a> liked your
                        <a href="#">profile.</a>
                      </span>
                      <span className="time">43 minutes ago</span>
                    </div>
                    <div className="media-right">
                      <div className="added-icon">
                        <i data-feather="heart"></i>
                      </div>
                    </div>
                  </div>

                  <div className="media">
                    <figure className="media-left">
                      <p className="image">
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/stella.jpg"
                          alt=""
                        />
                      </p>
                    </figure>
                    <div className="media-content">
                      <span>
                        <a href="#">Stella Bergmann</a> shared a
                        <a href="#">New video</a> on your wall.
                      </span>
                      <span className="time">Yesterday</span>
                    </div>
                    <div className="media-right">
                      <div className="added-icon">
                        <i data-feather="youtube"></i>
                      </div>
                    </div>
                  </div>

                  <div className="media">
                    <figure className="media-left">
                      <p className="image">
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/elise.jpg"
                          alt=""
                        />
                      </p>
                    </figure>
                    <div className="media-content">
                      <span>
                        <a href="#">Elise Walker</a> shared an{" "}
                        <a href="#">Image</a> with you an 2 other people.
                      </span>
                      <span className="time">2 days ago</span>
                    </div>
                    <div className="media-right">
                      <div className="added-icon">
                        <i data-feather="image"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav-drop-footer">
                  <a href="#">View All</a>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-item is-icon drop-trigger">
            <a className="icon-link is-active" href="javascript:void(0);">
              <i data-feather="mail"></i>
              <span className="indicator"></span>
            </a>

            <div className="nav-drop">
              <div className="inner">
                <div className="nav-drop-header">
                  <span>Messages</span>
                  <a href="messages-inbox.html">Inbox</a>
                </div>
                <div className="nav-drop-body is-friend-requests">
                  <div className="media">
                    <figure className="media-left">
                      <p className="image">
                        <img
                          src="../via.placeholder.com/150x150.png"
                          data-demo-src="assets/img/avatars/nelly.png"
                          data-user-popover="9"
                          alt=""
                        />
                      </p>
                    </figure>
                    <div className="media-content">
                      <a href="#">Nelly Schwartz</a>
                      <span>
                        I think we should meet near the Starbucks so we can
                        get...
                      </span>
                      <span className="time">Yesterday</span>
                    </div>
                    <div className="media-right is-centered">
                      <div className="added-icon">
                        <i data-feather="message-square"></i>
                      </div>
                    </div>
                  </div>

                  <div className="media">
                    <figure className="media-left">
                      <p className="image">
                        <img
                          src="../via.placeholder.com/150x150.png"
                          data-demo-src="assets/img/avatars/edward.jpeg"
                          data-user-popover="5"
                          alt=""
                        />
                      </p>
                    </figure>
                    <div className="media-content">
                      <a href="#">Edward Mayers</a>
                      <span>
                        That was a real pleasure seeing you last time we really
                        should...
                      </span>
                      <span className="time">last week</span>
                    </div>
                    <div className="media-right is-centered">
                      <div className="added-icon">
                        <i data-feather="message-square"></i>
                      </div>
                    </div>
                  </div>

                  <div className="media">
                    <figure className="media-left">
                      <p className="image">
                        <img
                          src="../via.placeholder.com/150x150.png"
                          data-demo-src="assets/img/avatars/dan.jpg"
                          data-user-popover="1"
                          alt=""
                        />
                      </p>
                    </figure>
                    <div className="media-content">
                      <a href="#">Dan Walker</a>
                      <span>
                        Hey there, would it be possible to borrow your bicycle,
                        i really need...
                      </span>
                      <span className="time">Jun 03 2018</span>
                    </div>
                    <div className="media-right is-centered">
                      <div className="added-icon">
                        <i data-feather="message-square"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav-drop-footer">
                  <a href="#">Clear All</a>
                </div>
              </div>
            </div>
          </div>

          <div id="mobile-explorer-trigger" className="navbar-item is-icon">
            <a className="icon-link is-primary">
              <i className="mdi mdi-apps"></i>
            </a>
          </div>

          <div id="open-mobile-search" className="navbar-item is-icon">
            <a className="icon-link is-primary" href="javascript:void(0);">
              <i data-feather="search"></i>
            </a>
          </div>

          <div className="navbar-burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="navbar-menu">
          <div className="navbar-item has-dropdown is-active">
            <a href="navbar-v1-profile-main.html" className="navbar-link">
              <img
                src="../via.placeholder.com/150x150.png"
                data-demo-src="assets/img/avatars/jenna.png"
                alt=""
              />
              <span className="is-heading">Jenna Davis</span>
            </a>

            <div className="navbar-dropdown">
              <a
                href="navbar-v1-feed.html"
                className="navbar-item is-flex is-mobile-icon"
              >
                <span>
                  <i data-feather="activity"></i>Feed
                </span>
                <span className="menu-badge">87</span>
              </a>
              <a
                href="navbar-v1-videos-home-v2.html"
                className="navbar-item is-flex is-mobile-icon"
              >
                <span>
                  <i data-feather="play-circle"></i>Watch
                </span>
                <span className="menu-badge">21</span>
              </a>
              <a
                href="navbar-v1-profile-friends.html"
                className="navbar-item is-flex is-mobile-icon"
              >
                <span>
                  <i data-feather="heart"></i>Friend Requests
                </span>
                <span className="menu-badge">3</span>
              </a>
              <a
                href="navbar-v1-profile-main.html"
                className="navbar-item is-flex is-mobile-icon"
              >
                <span>
                  <i data-feather="user"></i>Profile
                </span>
              </a>
              <a
                href="navbar-v1-ecommerce-cart.html"
                className="navbar-item is-flex is-mobile-icon"
              >
                <span>
                  <i data-feather="shopping-cart"></i>Cart
                </span>
                <span className="menu-badge">3</span>
              </a>
              <a href="#" className="navbar-item is-flex is-mobile-icon">
                <span>
                  <i data-feather="bookmark"></i>Bookmarks
                </span>
              </a>
            </div>
          </div>

          <div className="navbar-item has-dropdown">
            <a href="navbar-v1-settings.html" className="navbar-link">
              <i data-feather="user"></i>
              <span className="is-heading">Account</span>
            </a>

            <div className="navbar-dropdown">
              <a href="#" className="navbar-item is-flex is-mobile-icon">
                <span>
                  <i data-feather="life-buoy"></i>Support
                </span>
              </a>
              <a
                href="navbar-v1-settings.html"
                className="navbar-item is-flex is-mobile-icon"
              >
                <span>
                  <i data-feather="settings"></i>Settings
                </span>
              </a>
              <a href="#" className="navbar-item is-flex is-mobile-icon">
                <span>
                  <i data-feather="log-out"></i>Logout
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mobile-search is-hidden">
          <div className="control">
            <input
              id="tipue_drop_input_mobile"
              className="input"
              placeholder="Search..."
            />
            <div className="form-icon">
              <i data-feather="search"></i>
            </div>
            <div className="close-icon">
              <i data-feather="x"></i>
            </div>
            <div
              id="tipue_drop_content_mobile"
              className="tipue-drop-content"
            ></div>
          </div>
        </div>
      </nav>

      <div className="view-wrapper">
        <div id="main-feed" className="container">
          <div id="activity-feed" className="view-wrap true-dom">
            <div className="columns">
              <LeftSideBar />

              <div className="column is-6">
                <Outlet />
              </div>

              <RightSideBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
