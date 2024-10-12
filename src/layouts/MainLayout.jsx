import { Outlet } from "react-router-dom";
import Navbar from "../components/principal/navbar/Navbar";
import LeftSideBar from "../components/principal/sidebar/LeftSideBar";
import RightSideBar from "../components/principal/sidebar/RightSideBar";
import { useState } from "react";

const MainLayout = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const handleBurgerMenuToggle = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

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
                </div>
                <div className="nav-drop-footer">
                  <a href="#">Clear All</a>
                </div>
              </div>
            </div>
          </div>

          <div className="navbar-burger" onClick={handleBurgerMenuToggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={`navbar-menu ${isBurgerMenuOpen ? "is-active" : ""}`}>
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
              <a href="#" className="navbar-item is-flex is-mobile-icon">
                <span>
                  <i data-feather="log-out"></i>Logout
                </span>
              </a>
            </div>
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
