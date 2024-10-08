function HomePage() {
  return (
    <div className="is-white">
        
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
          <div className="navbar-menu">
            <div className="navbar-start">
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
                            You are now friends with{" "}
                            <a href="#">Nelly Schwartz</a>. Check her{" "}
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
                            You are now friends with{" "}
                            <a href="#">Elise Walker</a>. Check her
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
                            You are now friends with{" "}
                            <a href="#">Edward Mayers</a>. Check his
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
                            That was a real pleasure seeing you last time we
                            really should...
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
                            Hey there, would it be possible to borrow your
                            bicycle, i really need...
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

              <div className="navbar-item is-icon open-chat">
                <a className="icon-link is-primary" href="javascript:void(0);">
                  <i data-feather="message-square"></i>
                  <span className="indicator"></span>
                </a>
              </div>

              <div id="explorer-trigger" className="navbar-item is-icon">
                <a className="icon-link is-primary">
                  <i className="mdi mdi-apps"></i>
                </a>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div id="global-search" className="control">
                  <input
                    id="tipue_drop_input"
                    className="input is-rounded"
                    type="text"
                    placeholder="Search"
                    required
                  />
                  <span id="clear-search" className="reset-search">
                    <i data-feather="x"></i>
                  </span>
                  <span className="search-icon">
                    <i data-feather="search"></i>
                  </span>

                  <div
                    id="tipue_drop_content"
                    className="tipue-drop-content"
                  ></div>
                </div>
              </div>
              <div className="navbar-item is-cart">
                <div className="cart-button">
                  <i data-feather="shopping-cart"></i>
                  <div className="cart-count"></div>
                </div>

                <div className="shopping-cart">
                  <div className="cart-inner">
                    <div className="navbar-cart-loader is-active">
                      <div className="loader is-loading"></div>
                    </div>

                    <div className="shopping-cart-header">
                      <a href="ecommerce-cart.html" className="cart-link">
                        View Cart
                      </a>
                      <div className="shopping-cart-total">
                        <span className="lighter-text">Total:</span>
                        <span className="main-color-text">$193.00</span>
                      </div>
                    </div>

                    <ul className="shopping-cart-items">
                      <li className="cart-row">
                        <img src="assets/img/products/2.svg" alt="" />
                        <span className="item-meta">
                          <span className="item-name">Cool Shirt</span>
                          <span className="meta-info">
                            <span className="item-price">$29.00</span>
                            <span className="item-quantity">Qty: 01</span>
                          </span>
                        </span>
                      </li>

                      <li className="cart-row">
                        <img src="assets/img/products/3.svg" alt="" />
                        <span className="item-meta">
                          <span className="item-name">Military Short</span>
                          <span className="meta-info">
                            <span className="item-price">$39.00</span>
                            <span className="item-quantity">Qty: 01</span>
                          </span>
                        </span>
                      </li>

                      <li className="cart-row">
                        <img src="assets/img/products/4.svg" alt="" />
                        <span className="item-meta">
                          <span className="item-name">Cool Backpack</span>
                          <span className="meta-info">
                            <span className="item-price">$125.00</span>
                            <span className="item-quantity">Qty: 01</span>
                          </span>
                        </span>
                      </li>
                    </ul>

                    <a href="#" className="button primary-button is-raised">
                      Checkout
                    </a>
                  </div>
                </div>
              </div>
              <div
                id="account-dropdown"
                className="navbar-item is-account drop-trigger has-caret"
              >
                <div className="user-image">
                  <img
                    src="../via.placeholder.com/400x400.png"
                    data-demo-src="assets/img/avatars/jenna.png"
                    alt=""
                  />
                  <span className="indicator"></span>
                </div>

                <div className="nav-drop is-account-dropdown">
                  <div className="inner">
                    <div className="nav-drop-header">
                      <span className="username">Jenna Davis</span>
                      <label className="theme-toggle">
                        <input type="checkbox" />
                        <span className="toggler">
                          <span className="dark">
                            <i data-feather="moon"></i>
                          </span>
                          <span className="light">
                            <i data-feather="sun"></i>
                          </span>
                        </span>
                      </label>
                    </div>
                    <div className="nav-drop-body account-items">
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
                      <hr className="account-divider" />
                      <a
                        href="navbar-v1-pages-main.html"
                        className="account-item"
                      >
                        <div className="media">
                          <div className="media-left">
                            <div className="image">
                              <img
                                src="../via.placeholder.com/300x300.png"
                                data-demo-src="assets/img/avatars/hanzo.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="media-content">
                            <h3>Css Ninja</h3>
                            <small>Company page</small>
                          </div>
                          <div className="media-right is-hidden">
                            <i data-feather="check"></i>
                          </div>
                        </div>
                      </a>
                      <a
                        href="navbar-v1-pages-main.html"
                        className="account-item"
                      >
                        <div className="media">
                          <div className="media-left">
                            <div className="image">
                              <img
                                src="../via.placeholder.com/300x300.png"
                                data-demo-src="assets/img/vector/icons/logos/fastpizza.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="media-content">
                            <h3>Fast Pizza</h3>
                            <small>Company page</small>
                          </div>
                          <div className="media-right is-hidden">
                            <i data-feather="check"></i>
                          </div>
                        </div>
                      </a>
                      <a
                        href="navbar-v1-pages-main.html"
                        className="account-item"
                      >
                        <div className="media">
                          <div className="media-left">
                            <div className="image">
                              <img
                                src="../via.placeholder.com/300x300.png"
                                data-demo-src="assets/img/vector/icons/logos/slicer.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="media-content">
                            <h3>Slicer</h3>
                            <small>Company page</small>
                          </div>
                          <div className="media-right is-hidden">
                            <i data-feather="check"></i>
                          </div>
                        </div>
                      </a>
                      <hr className="account-divider" />
                      <a href="options-settings.html" className="account-item">
                        <div className="media">
                          <div className="icon-wrap">
                            <i data-feather="settings"></i>
                          </div>
                          <div className="media-content">
                            <h3>Settings</h3>
                            <small>Access widget settings.</small>
                          </div>
                        </div>
                      </a>
                      <a className="account-item">
                        <div className="media">
                          <div className="icon-wrap">
                            <i data-feather="life-buoy"></i>
                          </div>
                          <div className="media-content">
                            <h3>Help</h3>
                            <small>Contact our support.</small>
                          </div>
                        </div>
                      </a>
                      <a className="account-item">
                        <div className="media">
                          <div className="icon-wrap">
                            <i data-feather="power"></i>
                          </div>
                          <div className="media-content">
                            <h3>Log out</h3>
                            <small>Log out from your account.</small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
              <div className="column is-3 is-hidden-mobile">
                <div
                  className="card is-weather-card has-background-image"
                  data-background="../assets/img/illustrations/cards/weather-bg.svg"
                >
                  <div className="card-heading">
                    <div className="dropdown is-spaced is-accent is-right dropdown-trigger is-light">
                      <div>
                        <div className="button">
                          <i data-feather="more-vertical"></i>
                        </div>
                      </div>
                      <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <i data-feather="map-pin"></i>
                              <div className="media-content">
                                <h3>Change City</h3>
                                <small>Change the displayed city.</small>
                              </div>
                            </div>
                          </a>
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <i data-feather="rotate-ccw"></i>
                              <div className="media-content">
                                <h3>Synchronize</h3>
                                <small>
                                  Synchronize with a weather source.
                                </small>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="settings"></i>
                              <div className="media-content">
                                <h3>Settings</h3>
                                <small>Access widget settings.</small>
                              </div>
                            </div>
                          </a>
                          <hr className="dropdown-divider" />
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <i data-feather="trash-2"></i>
                              <div className="media-content">
                                <h3>Remove</h3>
                                <small>
                                  Removes this widget from your feed.
                                </small>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="temperature">
                      <span>71</span>
                    </div>
                    <div className="weather-icon">
                      <div>
                        <i data-feather="sun"></i>
                        <h4>Sunny</h4>
                        <div className="details">
                          <span>Real Feel: 78° </span>
                          <span>Rain Chance: 5%</span>
                        </div>
                      </div>
                    </div>
                    <div className="previsions">
                      <div className="day">
                        <span>Mon</span>
                        <i data-feather="sun"></i>
                        <span>69°</span>
                      </div>
                      <div className="day">
                        <span>Tue</span>
                        <i data-feather="cloud-lightning"></i>
                        <span>74°</span>
                      </div>
                      <div className="day">
                        <span>Wed</span>
                        <i data-feather="cloud-lightning"></i>
                        <span>73°</span>
                      </div>
                      <div className="day">
                        <span>Thu</span>
                        <i data-feather="sun"></i>
                        <span>68°</span>
                      </div>
                      <div className="day">
                        <span>Fri</span>
                        <i data-feather="cloud-drizzle"></i>
                        <span>55°</span>
                      </div>
                      <div className="day">
                        <span>Sat</span>
                        <i data-feather="cloud-rain"></i>
                        <span>58°</span>
                      </div>
                      <div className="day">
                        <span>Sun</span>
                        <i data-feather="sun"></i>
                        <span>64°</span>
                      </div>
                    </div>
                    <div className="current-date-location has-text-centered">
                      <span className="date">Sunday, 18th 2018</span>
                      <span className="location">
                        <i data-feather="map-pin"></i> Los Angeles, CA
                      </span>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-heading is-bordered">
                    <h4>Recommended Pages</h4>
                    <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                      <div>
                        <div className="button">
                          <i data-feather="more-vertical"></i>
                        </div>
                      </div>
                      <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <i data-feather="file-text"></i>
                              <div className="media-content">
                                <h3>All Recommandations</h3>
                                <small>View all recommandations.</small>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="settings"></i>
                              <div className="media-content">
                                <h3>Settings</h3>
                                <small>Access widget settings.</small>
                              </div>
                            </div>
                          </a>
                          <hr className="dropdown-divider" />
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <i data-feather="trash-2"></i>
                              <div className="media-content">
                                <h3>Remove</h3>
                                <small>
                                  Removes this widget from your feed.
                                </small>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body no-padding">
                    <div className="page-block transition-block">
                      <img
                        src="../via.placeholder.com/300x300.png"
                        data-demo-src="assets/img/vector/icons/logos/fastpizza.svg"
                        data-page-popover="0"
                        alt=""
                      />
                      <div className="page-meta">
                        <span>Fast Pizza</span>
                        <span>Pizza & Fast Food</span>
                      </div>
                      <div className="add-page add-transition">
                        <i data-feather="bookmark"></i>
                      </div>
                    </div>

                    <div className="page-block transition-block">
                      <img
                        src="../via.placeholder.com/300x300.png"
                        data-demo-src="assets/img/vector/icons/logos/lonelydroid.svg"
                        data-page-popover="1"
                        alt=""
                      />
                      <div className="page-meta">
                        <span>Lonely Droid</span>
                        <span>Technology</span>
                      </div>
                      <div className="add-page add-transition">
                        <i data-feather="bookmark"></i>
                      </div>
                    </div>

                    <div className="page-block transition-block">
                      <img
                        src="../via.placeholder.com/300x300.png"
                        data-demo-src="assets/img/vector/icons/logos/metamovies.svg"
                        data-page-popover="2"
                        alt=""
                      />
                      <div className="page-meta">
                        <span>Meta Movies</span>
                        <span>Movies / Entertainment</span>
                      </div>
                      <div className="add-page add-transition">
                        <i data-feather="bookmark"></i>
                      </div>
                    </div>

                    <div className="page-block transition-block">
                      <img
                        src="../via.placeholder.com/300x300.png"
                        data-demo-src="assets/img/vector/icons/logos/nuclearjs.svg"
                        data-page-popover="3"
                        alt=""
                      />
                      <div className="page-meta">
                        <span>Nuclearjs</span>
                        <span>Technology</span>
                      </div>
                      <div className="add-page add-transition">
                        <i data-feather="bookmark"></i>
                      </div>
                    </div>

                    <div className="page-block transition-block">
                      <img
                        src="../via.placeholder.com/300x300.png"
                        data-demo-src="assets/img/vector/icons/logos/slicer.svg"
                        data-page-popover="4"
                        alt=""
                      />
                      <div className="page-meta">
                        <span>Slicer</span>
                        <span>Web / Design</span>
                      </div>
                      <div className="add-page add-transition">
                        <i data-feather="bookmark"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card is-ad">
                  <div className="card-body">
                    <img src="assets/img/ads/ninja-ad.svg" alt="" />
                    <div className="ad-text">
                      Simple, pleasant, and productive.
                    </div>
                    <div className="ad-brand">Ads via Ninja</div>
                  </div>
                </div>

                <div id="latest-activity-1" className="card">
                  <div className="card-heading is-bordered">
                    <h4>Latest activity</h4>
                    <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                      <div>
                        <div className="button">
                          <i data-feather="more-vertical"></i>
                        </div>
                      </div>
                      <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <i data-feather="list"></i>
                              <div className="media-content">
                                <h3>All updates</h3>
                                <small>View my networks activity.</small>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="settings"></i>
                              <div className="media-content">
                                <h3>Settings</h3>
                                <small>Access widget settings.</small>
                              </div>
                            </div>
                          </a>
                          <hr className="dropdown-divider" />
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <i data-feather="trash-2"></i>
                              <div className="media-content">
                                <h3>Remove</h3>
                                <small>
                                  Removes this widget from your feed.
                                </small>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body no-padding">
                    <div className="page-block">
                      <img
                        src="../via.placeholder.com/300x300.png"
                        data-demo-src="assets/img/avatars/hanzo.svg"
                        data-page-popover="5"
                        alt=""
                      />
                      <div className="page-meta">
                        <span>Css Ninja</span>
                        <span>3 hours ago</span>
                      </div>
                      <div className="add-page">
                        <i data-feather="eye"></i>
                      </div>
                    </div>

                    <div className="page-block">
                      <img
                        src="../via.placeholder.com/300x300.png"
                        data-demo-src="assets/img/avatars/milly.jpg"
                        alt=""
                        data-user-popover="7"
                      />
                      <div className="page-meta">
                        <span>Milly Augustine</span>
                        <span>5 hours ago</span>
                      </div>
                      <div className="add-page">
                        <i data-feather="eye"></i>
                      </div>
                    </div>

                    <div className="page-block">
                      <img
                        src="../via.placeholder.com/300x300.png"
                        data-demo-src="assets/img/vector/icons/logos/nuclearjs.svg"
                        data-page-popover="3"
                        alt=""
                      />
                      <div className="page-meta">
                        <span>Nuclearjs</span>
                        <span>Yesterday</span>
                      </div>
                      <div className="add-page">
                        <i data-feather="eye"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column is-6">
                <div id="compose-card" className="card is-new-content">
                  <div className="tabs-wrapper">
                    <div className="tabs is-boxed is-fullwidth">
                      <ul>
                        <li className="is-active">
                          <a>
                            <span className="icon is-small">
                              <i data-feather="edit-3"></i>
                            </span>
                            <span>Publish</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="modal-trigger"
                            data-modal="albums-help-modal"
                          >
                            <span className="icon is-small">
                              <i data-feather="image"></i>
                            </span>
                            <span>Albums</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="modal-trigger"
                            data-modal="videos-help-modal"
                          >
                            <span className="icon is-small">
                              <i data-feather="video"></i>
                            </span>
                            <span>Video</span>
                          </a>
                        </li>

                        <li className="close-wrap">
                          <span className="close-publish">
                            <i data-feather="x"></i>
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="tab-content">
                      <div className="compose">
                        <div className="compose-form">
                          <img
                            src="../via.placeholder.com/300x300.png"
                            data-demo-src="assets/img/avatars/jenna.png"
                            alt=""
                          />
                          <div className="control">
                            <textarea
                              id="publish"
                              className="textarea"
                              rows="3"
                              placeholder="Write something about you..."
                            ></textarea>
                          </div>
                        </div>

                        <div id="feed-upload" className="feed-upload"></div>

                        <div
                          id="options-summary"
                          className="options-summary"
                        ></div>

                        <div
                          id="tag-suboption"
                          className="is-autocomplete is-suboption is-hidden"
                        >
                          <div id="tag-list" className="tag-list"></div>
                          <div className="control">
                            <input
                              id="users-autocpl"
                              type="text"
                              className="input"
                              placeholder="Who are you with?"
                            />
                            <div className="icon">
                              <i data-feather="search"></i>
                            </div>
                            <div className="close-icon is-main">
                              <i data-feather="x"></i>
                            </div>
                          </div>
                        </div>

                        <div
                          id="activities-suboption"
                          className="is-autocomplete is-suboption is-hidden"
                        >
                          <div
                            id="activities-autocpl-wrapper"
                            className="control has-margin"
                          >
                            <input
                              id="activities-autocpl"
                              type="text"
                              className="input"
                              placeholder="What are you doing right now?"
                            />
                            <div className="icon">
                              <i data-feather="search"></i>
                            </div>
                            <div className="close-icon is-main">
                              <i data-feather="x"></i>
                            </div>
                          </div>

                          <div
                            id="mood-autocpl-wrapper"
                            className="is-autocomplete is-activity is-hidden"
                          >
                            <div className="control has-margin">
                              <input
                                id="mood-autocpl"
                                type="text"
                                className="input is-subactivity"
                                placeholder="How do you feel?"
                              />
                              <div className="input-block">Feels</div>
                              <div className="close-icon is-subactivity">
                                <i data-feather="x"></i>
                              </div>
                            </div>
                          </div>

                          <div
                            id="drinking-autocpl-wrapper"
                            className="is-autocomplete is-activity is-hidden"
                          >
                            <div className="control has-margin">
                              <input
                                id="drinking-autocpl"
                                type="text"
                                className="input is-subactivity"
                                placeholder="What are you drinking?"
                              />
                              <div className="input-block">Drinks</div>
                              <div className="close-icon is-subactivity">
                                <i data-feather="x"></i>
                              </div>
                            </div>
                          </div>

                          <div
                            id="eating-autocpl-wrapper"
                            className="is-autocomplete is-activity is-hidden"
                          >
                            <div className="control has-margin">
                              <input
                                id="eating-autocpl"
                                type="text"
                                className="input is-subactivity"
                                placeholder="What are you eating?"
                              />
                              <div className="input-block">Eats</div>
                              <div className="close-icon is-subactivity">
                                <i data-feather="x"></i>
                              </div>
                            </div>
                          </div>

                          <div
                            id="reading-autocpl-wrapper"
                            className="is-autocomplete is-activity is-hidden"
                          >
                            <div className="control has-margin">
                              <input
                                id="reading-autocpl"
                                type="text"
                                className="input is-subactivity"
                                placeholder="What are you reading?"
                              />
                              <div className="input-block">Reads</div>
                              <div className="close-icon is-subactivity">
                                <i data-feather="x"></i>
                              </div>
                            </div>
                          </div>

                          <div
                            id="watching-autocpl-wrapper"
                            className="is-autocomplete is-activity is-hidden"
                          >
                            <div className="control has-margin">
                              <input
                                id="watching-autocpl"
                                type="text"
                                className="input is-subactivity"
                                placeholder="What are you watching?"
                              />
                              <div className="input-block">Watches</div>
                              <div className="close-icon is-subactivity">
                                <i data-feather="x"></i>
                              </div>
                            </div>
                          </div>

                          <div
                            id="travel-autocpl-wrapper"
                            className="is-autocomplete is-activity is-hidden"
                          >
                            <div className="control has-margin">
                              <input
                                id="travel-autocpl"
                                type="text"
                                className="input is-subactivity"
                                placeholder="Where are you going?"
                              />
                              <div className="input-block">Travels</div>
                              <div className="close-icon is-subactivity">
                                <i data-feather="x"></i>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          id="location-suboption"
                          className="is-autocomplete is-suboption is-hidden"
                        >
                          <div
                            id="location-autocpl-wrapper"
                            className="control is-location-wrapper has-margin"
                          >
                            <input
                              id="location-autocpl"
                              type="text"
                              className="input"
                              placeholder="Where are you now?"
                            />
                            <div className="icon">
                              <i data-feather="map-pin"></i>
                            </div>
                            <div className="close-icon is-main">
                              <i data-feather="x"></i>
                            </div>
                          </div>
                        </div>

                        <div
                          id="link-suboption"
                          className="is-autocomplete is-suboption is-hidden"
                        >
                          <div
                            id="link-autocpl-wrapper"
                            className="control is-location-wrapper has-margin"
                          >
                            <input
                              id="link-autocpl"
                              type="text"
                              className="input"
                              placeholder="Enter the link URL"
                            />
                            <div className="icon">
                              <i data-feather="link-2"></i>
                            </div>
                            <div className="close-icon is-main">
                              <i data-feather="x"></i>
                            </div>
                          </div>
                        </div>

                        <div
                          id="gif-suboption"
                          className="is-autocomplete is-suboption is-hidden"
                        >
                          <div
                            id="gif-autocpl-wrapper"
                            className="control is-gif-wrapper has-margin"
                          >
                            <input
                              id="gif-autocpl"
                              type="text"
                              className="input"
                              placeholder="Search a GIF to add"
                            />
                            <div className="icon">
                              <i data-feather="search"></i>
                            </div>
                            <div className="close-icon is-main">
                              <i data-feather="x"></i>
                            </div>
                            <div className="gif-dropdown">
                              <div className="inner">
                                <div className="gif-block">
                                  <img
                                    src="../via.placeholder.com/478x344.png"
                                    data-demo-src="assets/img/demo/gif/1.gif"
                                    alt=""
                                  />
                                  <img
                                    src="../via.placeholder.com/478x344.png"
                                    data-demo-src="assets/img/demo/gif/2.gif"
                                    alt=""
                                  />
                                  <img
                                    src="../via.placeholder.com/478x344.png"
                                    data-demo-src="assets/img/demo/gif/3.gif"
                                    alt=""
                                  />
                                  <img
                                    src="../via.placeholder.com/478x344.png"
                                    data-demo-src="assets/img/demo/gif/4.gif"
                                    alt=""
                                  />
                                </div>
                                <div className="gif-block">
                                  <img
                                    src="../via.placeholder.com/478x344.png"
                                    data-demo-src="assets/img/demo/gif/5.gif"
                                    alt=""
                                  />
                                  <img
                                    src="../via.placeholder.com/478x344.png"
                                    data-demo-src="assets/img/demo/gif/6.gif"
                                    alt=""
                                  />
                                  <img
                                    src="../via.placeholder.com/478x344.png"
                                    data-demo-src="assets/img/demo/gif/7.gif"
                                    alt=""
                                  />
                                  <img
                                    src="../via.placeholder.com/478x344.png"
                                    data-demo-src="assets/img/demo/gif/8.gif"
                                    alt=""
                                  />
                                </div>
                                <div className="gif-block">
                                  <img
                                    src="../via.placeholder.com/478x344.png"
                                    data-demo-src="assets/img/demo/gif/9.gif"
                                    alt=""
                                  />
                                  <img
                                    src="../via.placeholder.com/478x344.png"
                                    data-demo-src="assets/img/demo/gif/10.gif"
                                    alt=""
                                  />
                                  <img
                                    src="../via.placeholder.com/478x344.png"
                                    data-demo-src="assets/img/demo/gif/11.gif"
                                    alt=""
                                  />
                                  <img
                                    src="../via.placeholder.com/478x344.png"
                                    data-demo-src="assets/img/demo/gif/12.gif"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        id="extended-options"
                        className="compose-options is-hidden"
                      >
                        <div className="columns is-multiline is-full">
                          <div className="column is-6 is-narrower">
                            <div className="compose-option is-centered">
                              <i data-feather="camera"></i>
                              <span>Photo/Video</span>
                              <input
                                id="feed-upload-input-1"
                                type="file"
                                accept=".png, .jpg, .jpeg"
                              />
                            </div>
                          </div>

                          <div className="column is-6 is-narrower">
                            <div
                              id="extended-show-activities"
                              className="compose-option is-centered"
                            >
                              <img
                                src="assets/img/icons/emoji/emoji-1.svg"
                                alt=""
                              />
                              <span>Mood/Activity</span>
                            </div>
                          </div>

                          <div className="column is-6 is-narrower">
                            <div
                              id="open-tag-suboption"
                              className="compose-option is-centered"
                            >
                              <i data-feather="tag"></i>
                              <span>Tag friends</span>
                            </div>
                          </div>

                          <div className="column is-6 is-narrower">
                            <div
                              id="open-location-suboption"
                              className="compose-option is-centered"
                            >
                              <i data-feather="map-pin"></i>
                              <span>Post location</span>
                            </div>
                          </div>

                          <div className="column is-6 is-narrower">
                            <div
                              id="open-link-suboption"
                              className="compose-option is-centered"
                            >
                              <i data-feather="link-2"></i>
                              <span>Share link</span>
                            </div>
                          </div>

                          <div className="column is-6 is-narrower">
                            <div
                              id="open-gif-suboption"
                              className="compose-option is-centered"
                            >
                              <i data-feather="image"></i>
                              <span>Post GIF</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div id="basic-options" className="compose-options">
                        <div className="compose-option">
                          <i data-feather="camera"></i>
                          <span>Media</span>
                          <input
                            id="feed-upload-input-2"
                            type="file"
                            accept=".png, .jpg, .jpeg"
                          />
                        </div>

                        <div id="show-activities" className="compose-option">
                          <img
                            src="assets/img/icons/emoji/emoji-1.svg"
                            alt=""
                          />
                          <span>Activity</span>
                        </div>

                        <div
                          id="open-extended-options"
                          className="compose-option"
                        >
                          <i data-feather="more-horizontal"></i>
                        </div>
                      </div>

                      <div className="hidden-options">
                        <div className="target-channels">
                          <div className="channel">
                            <div className="round-checkbox is-small">
                              <div>
                                <input type="checkbox" id="checkbox-1" />
                                <label for="checkbox-1"></label>
                              </div>
                            </div>
                            <div className="channel-icon">
                              <i data-feather="bell"></i>
                            </div>
                            <div className="channel-name">Activity Feed</div>

                            <div className="dropdown is-spaced is-modern is-right is-neutral dropdown-trigger">
                              <div>
                                <button className="button" aria-haspopup="true">
                                  <i
                                    className="main-icon"
                                    data-feather="smile"
                                  ></i>
                                  <span>Friends</span>
                                  <i
                                    className="caret"
                                    data-feather="chevron-down"
                                  ></i>
                                </button>
                              </div>
                              <div className="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                  <a href="#" className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="globe"></i>
                                      <div className="media-content">
                                        <h3>Public</h3>
                                        <small>
                                          Anyone can see this publication.
                                        </small>
                                      </div>
                                    </div>
                                  </a>
                                  <a className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="users"></i>
                                      <div className="media-content">
                                        <h3>Friends</h3>
                                        <small>
                                          only friends can see this publication.
                                        </small>
                                      </div>
                                    </div>
                                  </a>
                                  <a className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="user"></i>
                                      <div className="media-content">
                                        <h3>Specific friends</h3>
                                        <small>
                                          Dont show it to some friends.
                                        </small>
                                      </div>
                                    </div>
                                  </a>
                                  <hr className="dropdown-divider" />
                                  <a className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="lock"></i>
                                      <div className="media-content">
                                        <h3>Only me</h3>
                                        <small>
                                          Only me can see this publication.
                                        </small>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="channel">
                            <div className="round-checkbox is-small">
                              <div>
                                <input type="checkbox" id="checkbox-2" />
                                <label for="checkbox-2"></label>
                              </div>
                            </div>
                            <div className="story-icon">
                              <div className="plus-icon">
                                <i data-feather="plus"></i>
                              </div>
                            </div>

                            <div className="channel-name">My Story</div>

                            <div className="dropdown is-spaced is-modern is-right is-neutral dropdown-trigger">
                              <div>
                                <button className="button" aria-haspopup="true">
                                  <i
                                    className="main-icon"
                                    data-feather="smile"
                                  ></i>
                                  <span>Friends</span>
                                  <i
                                    className="caret"
                                    data-feather="chevron-down"
                                  ></i>
                                </button>
                              </div>
                              <div className="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                  <a href="#" className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="globe"></i>
                                      <div className="media-content">
                                        <h3>Public</h3>
                                        <small>
                                          Anyone can see this publication.
                                        </small>
                                      </div>
                                    </div>
                                  </a>
                                  <a className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="users"></i>
                                      <div className="media-content">
                                        <h3>Friends</h3>
                                        <small>
                                          only friends can see this publication.
                                        </small>
                                      </div>
                                    </div>
                                  </a>
                                  <a className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="users"></i>
                                      <div className="media-content">
                                        <h3>Friends and contacts</h3>
                                        <small>
                                          Your friends and contacts.
                                        </small>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="friends-list is-hidden">
                          <div className="list-header">
                            <span>Send in a message</span>
                            <div className="actions">
                              <a
                                id="open-compose-search"
                                href="javascript:void(0);"
                                className="search-trigger"
                              >
                                <i data-feather="search"></i>
                              </a>

                              <div
                                id="compose-search"
                                className="control is-hidden"
                              >
                                <input
                                  type="text"
                                  className="input"
                                  placeholder="Search People"
                                />
                                <span>
                                  <i data-feather="search"></i>
                                </span>
                              </div>
                              <a
                                href="javascript:void(0);"
                                className="is-inverted modal-trigger"
                                data-modal="create-group-modal"
                              >
                                Create group
                              </a>
                            </div>
                          </div>

                          <div className="list-body">
                            <div className="friend-block">
                              <div className="round-checkbox is-small">
                                <div>
                                  <input type="checkbox" id="checkbox-3" />
                                  <label for="checkbox-3"></label>
                                </div>
                              </div>
                              <img
                                className="friend-avatar"
                                src="../via.placeholder.com/300x300.png"
                                data-demo-src="assets/img/avatars/dan.jpg"
                                alt=""
                              />
                              <div className="friend-name">Dan Walker</div>
                            </div>

                            <div className="friend-block">
                              <div className="round-checkbox is-small">
                                <div>
                                  <input type="checkbox" id="checkbox-4" />
                                  <label for="checkbox-4"></label>
                                </div>
                              </div>
                              <img
                                className="friend-avatar"
                                src="../via.placeholder.com/300x300.png"
                                data-demo-src="assets/img/avatars/daniel.jpg"
                                alt=""
                              />
                              <div className="friend-name">
                                Daniel Wellington
                              </div>
                            </div>

                            <div className="friend-block">
                              <div className="round-checkbox is-small">
                                <div>
                                  <input type="checkbox" id="checkbox-5" />
                                  <label for="checkbox-5"></label>
                                </div>
                              </div>
                              <img
                                className="friend-avatar"
                                src="../via.placeholder.com/300x300.png"
                                data-demo-src="assets/img/avatars/stella.jpg"
                                alt=""
                              />
                              <div className="friend-name">Stella Bergmann</div>
                            </div>

                            <div className="friend-block">
                              <div className="round-checkbox is-small">
                                <div>
                                  <input type="checkbox" id="checkbox-6" />
                                  <label for="checkbox-6"></label>
                                </div>
                              </div>
                              <img
                                className="friend-avatar"
                                src="../via.placeholder.com/300x300.png"
                                data-demo-src="assets/img/avatars/david.jpg"
                                alt=""
                              />
                              <div className="friend-name">David Kim</div>
                            </div>

                            <div className="friend-block">
                              <div className="round-checkbox is-small">
                                <div>
                                  <input type="checkbox" id="checkbox-7" />
                                  <label for="checkbox-7"></label>
                                </div>
                              </div>
                              <img
                                className="friend-avatar"
                                src="../via.placeholder.com/300x300.png"
                                data-demo-src="assets/img/avatars/nelly.png"
                                alt=""
                              />
                              <div className="friend-name">Nelly Schwartz</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="more-wrap">
                        <button
                          id="show-compose-friends"
                          type="button"
                          className="button is-more"
                          aria-haspopup="true"
                        >
                          <i data-feather="more-vertical"></i>
                          <span>View More</span>
                        </button>

                        <button
                          id="publish-button"
                          type="button"
                          className="button is-solid accent-button is-fullwidth is-disabled"
                        >
                          Publish
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="feed-post-1" className="card is-post">
                  <div className="content-wrap">
                    <div className="card-heading">
                      <div className="user-block">
                        <div className="image">
                          <img
                            src="../via.placeholder.com/300x300.png"
                            data-demo-src="assets/img/avatars/dan.jpg"
                            data-user-popover="1"
                            alt=""
                          />
                        </div>
                        <div className="user-info">
                          <a href="#">Dan Walker</a>
                          <span className="time">July 26 2018, 01:03pm</span>
                        </div>
                      </div>

                      <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                        <div>
                          <div className="button">
                            <i data-feather="more-vertical"></i>
                          </div>
                        </div>
                        <div className="dropdown-menu" role="menu">
                          <div className="dropdown-content">
                            <a href="#" className="dropdown-item">
                              <div className="media">
                                <i data-feather="bookmark"></i>
                                <div className="media-content">
                                  <h3>Bookmark</h3>
                                  <small>
                                    Add this post to your bookmarks.
                                  </small>
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
                                  <small>
                                    In case of inappropriate content.
                                  </small>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card-body">
                      <div className="post-text">
                        <p>
                          Yesterday with <a href="#">@Karen Miller</a> and
                          <a href="#">@Marvin Stemperd</a> at the
                          <a href="#">#Rock'n'Rolla</a> concert in LA. Was
                          totally fantastic! People were really excited about
                          this one!
                        </p>
                      </div>

                      <div className="post-image">
                        <a
                          data-fancybox="post1"
                          data-lightbox-type="comments"
                          data-thumb="assets/img/demo/unsplash/1.jpg"
                          href="https://via.placeholder.com/1600x900"
                          data-demo-href="assets/img/demo/unsplash/1.jpg"
                        >
                          <img
                            src="../via.placeholder.com/1600x900.png"
                            data-demo-src="assets/img/demo/unsplash/1.jpg"
                            alt=""
                          />
                        </a>

                        <div className="like-wrapper">
                          <a href="javascript:void(0);" className="like-button">
                            <i className="mdi mdi-heart not-liked bouncy"></i>
                            <i className="mdi mdi-heart is-liked bouncy"></i>
                            <span className="like-overlay"></span>
                          </a>
                        </div>

                        <div className="fab-wrapper is-share">
                          <a
                            href="javascript:void(0);"
                            className="small-fab share-fab modal-trigger"
                            data-modal="share-modal"
                          >
                            <i data-feather="link-2"></i>
                          </a>
                        </div>

                        <div className="fab-wrapper is-comment">
                          <a href="javascript:void(0);" className="small-fab">
                            <i data-feather="message-circle"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="card-footer">
                      <div className="likers-group">
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/dan.jpg"
                          data-user-popover="1"
                          alt=""
                        />
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/david.jpg"
                          data-user-popover="4"
                          alt=""
                        />
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/edward.jpeg"
                          data-user-popover="5"
                          alt=""
                        />
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/milly.jpg"
                          data-user-popover="7"
                          alt=""
                        />
                      </div>

                      <div className="likers-text">
                        <p>
                          <a href="#">Milly</a>,<a href="#">David</a>
                        </p>
                        <p>and 23 more liked this</p>
                      </div>

                      <div className="social-count">
                        <div className="likes-count">
                          <i data-feather="heart"></i>
                          <span>27</span>
                        </div>
                        <div className="shares-count">
                          <i data-feather="link-2"></i>
                          <span>9</span>
                        </div>
                        <div className="comments-count">
                          <i data-feather="message-circle"></i>
                          <span>3</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="comments-wrap is-hidden">
                    <div className="comments-heading">
                      <h4>
                        Comments <small>(8)</small>
                      </h4>
                      <div className="close-comments">
                        <i data-feather="x"></i>
                      </div>
                    </div>

                    <div className="comments-body has-slimscroll">
                      <div className="media is-comment">
                        <div className="media-left">
                          <div className="image">
                            <img
                              src="../via.placeholder.com/300x300.png"
                              data-demo-src="assets/img/avatars/dan.jpg"
                              data-user-popover="1"
                              alt=""
                            />
                          </div>
                        </div>

                        <div className="media-content">
                          <a href="#">Dan Walker</a>
                          <span className="time">28 minutes ago</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempo incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris consequat.
                          </p>

                          <div className="controls">
                            <div className="like-count">
                              <i data-feather="thumbs-up"></i>
                              <span>4</span>
                            </div>
                            <div className="reply">
                              <a href="#">Reply</a>
                            </div>
                            <div className="edit">
                              <a href="#">Edit</a>
                            </div>
                          </div>

                          <div className="media is-comment">
                            <div className="media-left">
                              <div className="image">
                                <img
                                  src="../via.placeholder.com/300x300.png"
                                  data-demo-src="assets/img/avatars/david.jpg"
                                  data-user-popover="4"
                                  alt=""
                                />
                              </div>
                            </div>

                            <div className="media-content">
                              <a href="#">David Kim</a>
                              <span className="time">15 minutes ago</span>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempo
                                incididunt ut labore et dolore magna aliqua.
                              </p>

                              <div className="controls">
                                <div className="like-count">
                                  <i data-feather="thumbs-up"></i>
                                  <span>0</span>
                                </div>
                                <div className="reply">
                                  <a href="#">Reply</a>
                                </div>
                              </div>
                            </div>

                            <div className="media-right">
                              <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                <div>
                                  <div className="button">
                                    <i data-feather="more-vertical"></i>
                                  </div>
                                </div>
                                <div className="dropdown-menu" role="menu">
                                  <div className="dropdown-content">
                                    <a className="dropdown-item">
                                      <div className="media">
                                        <i data-feather="x"></i>
                                        <div className="media-content">
                                          <h3>Hide</h3>
                                          <small>Hide this comment.</small>
                                        </div>
                                      </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item">
                                      <div className="media">
                                        <i data-feather="flag"></i>
                                        <div className="media-content">
                                          <h3>Report</h3>
                                          <small>Report this comment.</small>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="media-right">
                          <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                            <div>
                              <div className="button">
                                <i data-feather="more-vertical"></i>
                              </div>
                            </div>
                            <div className="dropdown-menu" role="menu">
                              <div className="dropdown-content">
                                <a className="dropdown-item">
                                  <div className="media">
                                    <i data-feather="x"></i>
                                    <div className="media-content">
                                      <h3>Hide</h3>
                                      <small>Hide this comment.</small>
                                    </div>
                                  </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                  <div className="media">
                                    <i data-feather="flag"></i>
                                    <div className="media-content">
                                      <h3>Report</h3>
                                      <small>Report this comment.</small>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="media is-comment">
                        <div className="media-left">
                          <div className="image">
                            <img
                              src="../via.placeholder.com/300x300.png"
                              data-demo-src="assets/img/avatars/rolf.jpg"
                              data-user-popover="13"
                              alt=""
                            />
                          </div>
                        </div>

                        <div className="media-content">
                          <a href="#">Rolf Krupp</a>
                          <span className="time">9 hours ago</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempo incididunt ut labore et
                            dolore magna aliqua. Exercitation ullamco laboris
                            consequat.
                          </p>

                          <div className="controls">
                            <div className="like-count">
                              <i data-feather="thumbs-up"></i>
                              <span>2</span>
                            </div>
                            <div className="reply">
                              <a href="#">Reply</a>
                            </div>
                          </div>

                          <div className="media is-comment">
                            <div className="media-left">
                              <div className="image">
                                <img
                                  src="../via.placeholder.com/300x300.png"
                                  data-demo-src="assets/img/avatars/elise.jpg"
                                  data-user-popover="6"
                                  alt=""
                                />
                              </div>
                            </div>

                            <div className="media-content">
                              <a href="#">Elise Walker</a>
                              <span className="time">8 hours ago</span>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempo
                                incididunt ut labore et dolore magna aliqua.
                              </p>

                              <div className="controls">
                                <div className="like-count">
                                  <i data-feather="thumbs-up"></i>
                                  <span>0</span>
                                </div>
                                <div className="reply">
                                  <a href="#">Reply</a>
                                </div>
                              </div>
                            </div>

                            <div className="media-right">
                              <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                <div>
                                  <div className="button">
                                    <i data-feather="more-vertical"></i>
                                  </div>
                                </div>
                                <div className="dropdown-menu" role="menu">
                                  <div className="dropdown-content">
                                    <a className="dropdown-item">
                                      <div className="media">
                                        <i data-feather="x"></i>
                                        <div className="media-content">
                                          <h3>Hide</h3>
                                          <small>Hide this comment.</small>
                                        </div>
                                      </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item">
                                      <div className="media">
                                        <i data-feather="flag"></i>
                                        <div className="media-content">
                                          <h3>Report</h3>
                                          <small>Report this comment.</small>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="media is-comment">
                            <div className="media-left">
                              <div className="image">
                                <img
                                  src="../via.placeholder.com/300x300.png"
                                  data-demo-src="assets/img/avatars/rolf.jpg"
                                  data-user-popover="13"
                                  alt=""
                                />
                              </div>
                            </div>

                            <div className="media-content">
                              <a href="#">Rolf Krupp</a>
                              <span className="time">7 hours ago</span>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempo
                                incididunt ut labore et dolore magna aliqua.
                              </p>

                              <div className="controls">
                                <div className="like-count">
                                  <i data-feather="thumbs-up"></i>
                                  <span>1</span>
                                </div>
                                <div className="reply">
                                  <a href="#">Reply</a>
                                </div>
                              </div>
                            </div>

                            <div className="media-right">
                              <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                <div>
                                  <div className="button">
                                    <i data-feather="more-vertical"></i>
                                  </div>
                                </div>
                                <div className="dropdown-menu" role="menu">
                                  <div className="dropdown-content">
                                    <a className="dropdown-item">
                                      <div className="media">
                                        <i data-feather="x"></i>
                                        <div className="media-content">
                                          <h3>Hide</h3>
                                          <small>Hide this comment.</small>
                                        </div>
                                      </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item">
                                      <div className="media">
                                        <i data-feather="flag"></i>
                                        <div className="media-content">
                                          <h3>Report</h3>
                                          <small>Report this comment.</small>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="media is-comment">
                            <div className="media-left">
                              <div className="image">
                                <img
                                  src="../via.placeholder.com/300x300.png"
                                  data-demo-src="assets/img/avatars/elise.jpg"
                                  data-user-popover="6"
                                  alt=""
                                />
                              </div>
                            </div>

                            <div className="media-content">
                              <a href="#">Elise Walker</a>
                              <span className="time">6 hours ago</span>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempo
                                incididunt ut labore et dolore magna aliqua.
                              </p>

                              <div className="controls">
                                <div className="like-count">
                                  <i data-feather="thumbs-up"></i>
                                  <span>0</span>
                                </div>
                                <div className="reply">
                                  <a href="#">Reply</a>
                                </div>
                              </div>
                            </div>

                            <div className="media-right">
                              <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                <div>
                                  <div className="button">
                                    <i data-feather="more-vertical"></i>
                                  </div>
                                </div>
                                <div className="dropdown-menu" role="menu">
                                  <div className="dropdown-content">
                                    <a className="dropdown-item">
                                      <div className="media">
                                        <i data-feather="x"></i>
                                        <div className="media-content">
                                          <h3>Hide</h3>
                                          <small>Hide this comment.</small>
                                        </div>
                                      </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item">
                                      <div className="media">
                                        <i data-feather="flag"></i>
                                        <div className="media-content">
                                          <h3>Report</h3>
                                          <small>Report this comment.</small>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="media-right">
                          <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                            <div>
                              <div className="button">
                                <i data-feather="more-vertical"></i>
                              </div>
                            </div>
                            <div className="dropdown-menu" role="menu">
                              <div className="dropdown-content">
                                <a className="dropdown-item">
                                  <div className="media">
                                    <i data-feather="x"></i>
                                    <div className="media-content">
                                      <h3>Hide</h3>
                                      <small>Hide this comment.</small>
                                    </div>
                                  </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                  <div className="media">
                                    <i data-feather="flag"></i>
                                    <div className="media-content">
                                      <h3>Report</h3>
                                      <small>Report this comment.</small>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="media is-comment">
                        <div className="media-left">
                          <div className="image">
                            <img
                              src="../via.placeholder.com/300x300.png"
                              data-demo-src="assets/img/avatars/lana.jpeg"
                              data-user-popover="10"
                              alt=""
                            />
                          </div>
                        </div>

                        <div className="media-content">
                          <a href="#">Lana Henrikssen</a>
                          <span className="time">10 hours ago</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempo incididunt ut labore et
                            dolore magna aliqua.
                          </p>

                          <div className="controls">
                            <div className="like-count">
                              <i data-feather="thumbs-up"></i>
                              <span>5</span>
                            </div>
                            <div className="reply">
                              <a href="#">Reply</a>
                            </div>
                          </div>
                        </div>

                        <div className="media-right">
                          <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                            <div>
                              <div className="button">
                                <i data-feather="more-vertical"></i>
                              </div>
                            </div>
                            <div className="dropdown-menu" role="menu">
                              <div className="dropdown-content">
                                <a className="dropdown-item">
                                  <div className="media">
                                    <i data-feather="x"></i>
                                    <div className="media-content">
                                      <h3>Hide</h3>
                                      <small>Hide this comment.</small>
                                    </div>
                                  </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                  <div className="media">
                                    <i data-feather="flag"></i>
                                    <div className="media-content">
                                      <h3>Report</h3>
                                      <small>Report this comment.</small>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card-footer">
                      <div className="media post-comment has-emojis">
                        <div className="media-content">
                          <div className="field">
                            <p className="control">
                              <textarea
                                className="textarea comment-textarea"
                                rows="5"
                                placeholder="Write a comment..."
                              ></textarea>
                            </p>
                          </div>

                          <div className="actions">
                            <div className="image is-32x32">
                              <img
                                className="is-rounded"
                                src="../via.placeholder.com/300x300.png"
                                data-demo-src="assets/img/avatars/jenna.png"
                                data-user-popover="0"
                                alt=""
                              />
                            </div>
                            <div className="toolbar">
                              <div className="action is-auto">
                                <i data-feather="at-sign"></i>
                              </div>
                              <div className="action is-emoji">
                                <i data-feather="smile"></i>
                              </div>
                              <div className="action is-upload">
                                <i data-feather="camera"></i>
                                <input type="file" />
                              </div>
                              <a className="button is-solid primary-button raised">
                                Post Comment
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card is-post">
                  <div className="content-wrap">
                    <div className="card-heading">
                      <div className="user-block">
                        <div className="image">
                          <img
                            src="../via.placeholder.com/300x300.png"
                            data-demo-src="assets/img/avatars/edward.jpeg"
                            data-user-popover="5"
                            alt=""
                          />
                        </div>
                        <div className="user-info">
                          <a href="#">Edward Mayers</a>
                          <span className="time">July 26 2018, 11:14am</span>
                        </div>
                      </div>

                      <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                        <div>
                          <div className="button">
                            <i data-feather="more-vertical"></i>
                          </div>
                        </div>
                        <div className="dropdown-menu" role="menu">
                          <div className="dropdown-content">
                            <a href="#" className="dropdown-item">
                              <div className="media">
                                <i data-feather="bookmark"></i>
                                <div className="media-content">
                                  <h3>Bookmark</h3>
                                  <small>
                                    Add this post to your bookmarks.
                                  </small>
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
                                  <small>
                                    In case of inappropriate content.
                                  </small>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card-body">
                      <div className="post-text">
                        <p>
                          You all know how i love bootstrap, but i didn't have
                          time to dig deeper into it. TherehtmlFore i found this
                          very interesting video i wanted to share with you all.{" "}
                          <a href="#">#bootsrap #webdesign</a>
                        </p>

                        <p></p>
                      </div>

                      <div className="post-link is-video">
                        <div className="link-image">
                          <img
                            src="../via.placeholder.com/300x300.png"
                            data-demo-src="assets/img/demo/video/bootstrap.jpg"
                            alt=""
                          />
                          <div className="video-overlay"></div>
                          <a
                            className="video-button"
                            data-fancybox
                            href="https://www.youtube.com/watch?v=N8GksI_-iIM"
                          >
                            <img src="assets/img/icons/video/play.svg" alt="" />
                          </a>
                        </div>

                        <div className="link-content">
                          <h4>
                            <a href="#">What's new in Bootstrap 4 ?</a>
                          </h4>
                          <p>
                            BehtmlFore I create the new Bootstrap 4 crash course
                            I want to go over some of the changes from Bootstrap
                            3.
                          </p>
                          <small>Youtube.com</small>
                        </div>

                        <div className="like-wrapper">
                          <a href="javascript:void(0);" className="like-button">
                            <i className="mdi mdi-heart not-liked bouncy"></i>
                            <i className="mdi mdi-heart is-liked bouncy"></i>
                            <span className="like-overlay"></span>
                          </a>
                        </div>

                        <div className="fab-wrapper is-share">
                          <a
                            href="javascript:void(0);"
                            className="small-fab share-fab modal-trigger"
                            data-modal="share-modal"
                          >
                            <i data-feather="link-2"></i>
                          </a>
                        </div>

                        <div className="fab-wrapper is-comment">
                          <a href="javascript:void(0);" className="small-fab">
                            <i data-feather="message-circle"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="card-footer">
                      <div className="likers-group">
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/daniel.jpg"
                          data-user-popover="3"
                          alt=""
                        />
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/elise.jpg"
                          data-user-popover="6"
                          alt=""
                        />
                      </div>
                      <div className="likers-text">
                        <p>
                          <a href="#">Daniel</a> and
                          <a href="#">Elise</a>
                        </p>
                        <p>liked this</p>
                      </div>

                      <div className="social-count">
                        <div className="likes-count">
                          <i data-feather="heart"></i>
                          <span>2</span>
                        </div>
                        <div className="shares-count">
                          <i data-feather="link-2"></i>
                          <span>0</span>
                        </div>
                        <div className="comments-count">
                          <i data-feather="message-circle"></i>
                          <span>2</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="comments-wrap is-hidden">
                    <div className="comments-heading">
                      <h4>
                        Comments <small>(2)</small>
                      </h4>
                      <div className="close-comments">
                        <i data-feather="x"></i>
                      </div>
                    </div>

                    <div className="comments-body has-slimscroll">
                      <div className="media is-comment">
                        <div className="media-left">
                          <div className="image">
                            <img
                              src="../via.placeholder.com/300x300.png"
                              data-demo-src="assets/img/avatars/elise.jpg"
                              data-user-popover="6"
                              alt=""
                            />
                          </div>
                        </div>

                        <div className="media-content">
                          <a href="#">Elise Walker</a>
                          <span className="time">2 days ago</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempo incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris consequat.
                          </p>

                          <div className="controls">
                            <div className="like-count">
                              <i data-feather="thumbs-up"></i>
                              <span>1</span>
                            </div>
                            <div className="reply">
                              <a href="#">Reply</a>
                            </div>
                          </div>

                          <div className="media is-comment">
                            <div className="media-left">
                              <div className="image">
                                <img
                                  src="../via.placeholder.com/300x300.png"
                                  data-demo-src="assets/img/avatars/daniel.jpg"
                                  data-user-popover="3"
                                  alt=""
                                />
                              </div>
                            </div>

                            <div className="media-content">
                              <a href="#">Daniel Wellington</a>
                              <span className="time">2 days ago</span>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempo
                                incididunt ut labore et dolore magna aliqua.
                              </p>

                              <div className="controls">
                                <div className="like-count">
                                  <i data-feather="thumbs-up"></i>
                                  <span>0</span>
                                </div>
                                <div className="reply">
                                  <a href="#">Reply</a>
                                </div>
                              </div>
                            </div>

                            <div className="media-right">
                              <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                <div>
                                  <div className="button">
                                    <i data-feather="more-vertical"></i>
                                  </div>
                                </div>
                                <div className="dropdown-menu" role="menu">
                                  <div className="dropdown-content">
                                    <a className="dropdown-item">
                                      <div className="media">
                                        <i data-feather="x"></i>
                                        <div className="media-content">
                                          <h3>Hide</h3>
                                          <small>Hide this comment.</small>
                                        </div>
                                      </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item">
                                      <div className="media">
                                        <i data-feather="flag"></i>
                                        <div className="media-content">
                                          <h3>Report</h3>
                                          <small>Report this comment.</small>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="media-right">
                          <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                            <div>
                              <div className="button">
                                <i data-feather="more-vertical"></i>
                              </div>
                            </div>
                            <div className="dropdown-menu" role="menu">
                              <div className="dropdown-content">
                                <a className="dropdown-item">
                                  <div className="media">
                                    <i data-feather="x"></i>
                                    <div className="media-content">
                                      <h3>Hide</h3>
                                      <small>Hide this comment.</small>
                                    </div>
                                  </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                  <div className="media">
                                    <i data-feather="flag"></i>
                                    <div className="media-content">
                                      <h3>Report</h3>
                                      <small>Report this comment.</small>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card-footer">
                      <div className="media post-comment has-emojis">
                        <div className="media-content">
                          <div className="field">
                            <p className="control">
                              <textarea
                                className="textarea comment-textarea"
                                rows="5"
                                placeholder="Write a comment..."
                              ></textarea>
                            </p>
                          </div>

                          <div className="actions">
                            <div className="image is-32x32">
                              <img
                                className="is-rounded"
                                src="../via.placeholder.com/300x300.png"
                                data-demo-src="assets/img/avatars/jenna.png"
                                data-user-popover="0"
                                alt=""
                              />
                            </div>
                            <div className="toolbar">
                              <div className="action is-auto">
                                <i data-feather="at-sign"></i>
                              </div>
                              <div className="action is-emoji">
                                <i data-feather="smile"></i>
                              </div>
                              <div className="action is-upload">
                                <i data-feather="camera"></i>
                                <input type="file" />
                              </div>
                              <a className="button is-solid primary-button raised">
                                Post Comment
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card is-post">
                  <div className="content-wrap">
                    <div className="card-heading">
                      <div className="user-block">
                        <div className="image">
                          <img
                            src="../via.placeholder.com/300x300.png"
                            data-demo-src="assets/img/avatars/elise.jpg"
                            data-user-popover="6"
                            alt=""
                          />
                        </div>
                        <div className="user-info">
                          <a href="#">Elise Walker</a>
                          <span className="time">July 19 2018, 19:42pm</span>
                        </div>
                      </div>

                      <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                        <div>
                          <div className="button">
                            <i data-feather="more-vertical"></i>
                          </div>
                        </div>
                        <div className="dropdown-menu" role="menu">
                          <div className="dropdown-content">
                            <a href="#" className="dropdown-item">
                              <div className="media">
                                <i data-feather="bookmark"></i>
                                <div className="media-content">
                                  <h3>Bookmark</h3>
                                  <small>
                                    Add this post to your bookmarks.
                                  </small>
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
                                  <small>
                                    In case of inappropriate content.
                                  </small>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card-body">
                      <div className="post-text">
                        <p>
                          Thanks a lot to <a href="#">@Gaelle</a> and{" "}
                          <a href="#">@Rolf</a> for this wonderful team lunch.
                          The food was really tasty and we had some great
                          laughs. Thanks to all the team, youre all awesome !
                        </p>

                        <p></p>
                      </div>

                      <div className="post-image">
                        <a
                          data-fancybox="post2"
                          data-lightbox-type="comments"
                          data-thumb="assets/img/demo/unsplash/2.jpg"
                          href="../via.placeholder.com/1600x900.png"
                          data-demo-href="assets/img/demo/unsplash/2.jpg"
                        >
                          <img
                            src="../via.placeholder.com/1600x900.png"
                            data-demo-src="assets/img/demo/unsplash/2.jpg"
                            alt=""
                          />
                        </a>

                        <div className="like-wrapper">
                          <a href="javascript:void(0);" className="like-button">
                            <i className="mdi mdi-heart not-liked bouncy"></i>
                            <i className="mdi mdi-heart is-liked bouncy"></i>
                            <span className="like-overlay"></span>
                          </a>
                        </div>

                        <div className="fab-wrapper is-share">
                          <a
                            href="javascript:void(0);"
                            className="small-fab share-fab modal-trigger"
                            data-modal="share-modal"
                          >
                            <i data-feather="link-2"></i>
                          </a>
                        </div>

                        <div className="fab-wrapper is-comment">
                          <a href="javascript:void(0);" className="small-fab">
                            <i data-feather="message-circle"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="card-footer">
                      <div className="likers-group">
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/gaelle.jpeg"
                          data-user-popover="11"
                          alt=""
                        />
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/edward.jpeg"
                          data-user-popover="5"
                          alt=""
                        />
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/nelly.png"
                          data-user-popover="9"
                          alt=""
                        />
                      </div>
                      <div className="likers-text">
                        <p>
                          <a href="#">Gaelle</a>,<a href="#">Edward</a>
                        </p>
                        <p>and 1 more liked this</p>
                      </div>

                      <div className="social-count">
                        <div className="likes-count">
                          <i data-feather="heart"></i>
                          <span>3</span>
                        </div>
                        <div className="shares-count">
                          <i data-feather="link-2"></i>
                          <span>0</span>
                        </div>
                        <div className="comments-count">
                          <i data-feather="message-circle"></i>
                          <span>5</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="comments-wrap is-hidden">
                    <div className="comments-heading">
                      <h4>
                        Comments <small>(5)</small>
                      </h4>
                      <div className="close-comments">
                        <i data-feather="x"></i>
                      </div>
                    </div>

                    <div className="comments-body has-slimscroll">
                      <div className="media is-comment">
                        <div className="media-left">
                          <div className="image">
                            <img
                              src="../via.placeholder.com/300x300.png"
                              data-demo-src="assets/img/avatars/gaelle.jpeg"
                              data-user-popover="11"
                              alt=""
                            />
                          </div>
                        </div>

                        <div className="media-content">
                          <a href="#">Gaelle Morris</a>
                          <span className="time">2 days ago</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempo incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris consequat.
                          </p>

                          <div className="controls">
                            <div className="like-count">
                              <i data-feather="thumbs-up"></i>
                              <span>3</span>
                            </div>
                            <div className="reply">
                              <a href="#">Reply</a>
                            </div>
                          </div>

                          <div className="media is-comment">
                            <div className="media-left">
                              <div className="image">
                                <img
                                  src="../via.placeholder.com/300x300.png"
                                  data-demo-src="assets/img/avatars/elise.jpg"
                                  data-user-popover="6"
                                  alt=""
                                />
                              </div>
                            </div>

                            <div className="media-content">
                              <a href="#">Elise Walker</a>
                              <span className="time">2 days ago</span>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempo
                                incididunt ut labore et dolore magna aliqua.
                              </p>

                              <div className="controls">
                                <div className="like-count">
                                  <i data-feather="thumbs-up"></i>
                                  <span>1</span>
                                </div>
                                <div className="reply">
                                  <a href="#">Reply</a>
                                </div>
                              </div>
                            </div>

                            <div className="media-right">
                              <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                <div>
                                  <div className="button">
                                    <i data-feather="more-vertical"></i>
                                  </div>
                                </div>
                                <div className="dropdown-menu" role="menu">
                                  <div className="dropdown-content">
                                    <a className="dropdown-item">
                                      <div className="media">
                                        <i data-feather="x"></i>
                                        <div className="media-content">
                                          <h3>Hide</h3>
                                          <small>Hide this comment.</small>
                                        </div>
                                      </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item">
                                      <div className="media">
                                        <i data-feather="flag"></i>
                                        <div className="media-content">
                                          <h3>Report</h3>
                                          <small>Report this comment.</small>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="media is-comment">
                            <div className="media-left">
                              <div className="image">
                                <img
                                  src="../via.placeholder.com/300x300.png"
                                  data-demo-src="assets/img/avatars/rolf.jpg"
                                  data-user-popover="13"
                                  alt=""
                                />
                              </div>
                            </div>

                            <div className="media-content">
                              <a href="#">Rolf Krupp</a>
                              <span className="time">2 days ago</span>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempo
                                incididunt.
                              </p>

                              <div className="controls">
                                <div className="like-count">
                                  <i data-feather="thumbs-up"></i>
                                  <span>1</span>
                                </div>
                                <div className="reply">
                                  <a href="#">Reply</a>
                                </div>
                              </div>
                            </div>

                            <div className="media-right">
                              <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                <div>
                                  <div className="button">
                                    <i data-feather="more-vertical"></i>
                                  </div>
                                </div>
                                <div className="dropdown-menu" role="menu">
                                  <div className="dropdown-content">
                                    <a className="dropdown-item">
                                      <div className="media">
                                        <i data-feather="x"></i>
                                        <div className="media-content">
                                          <h3>Hide</h3>
                                          <small>Hide this comment.</small>
                                        </div>
                                      </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item">
                                      <div className="media">
                                        <i data-feather="flag"></i>
                                        <div className="media-content">
                                          <h3>Report</h3>
                                          <small>Report this comment.</small>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="media is-comment">
                            <div className="media-left">
                              <div className="image">
                                <img
                                  src="../via.placeholder.com/300x300.png"
                                  data-demo-src="assets/img/avatars/elise.jpg"
                                  data-user-popover="6"
                                  alt=""
                                />
                              </div>
                            </div>

                            <div className="media-content">
                              <a href="#">Elise Walker</a>
                              <span className="time">2 days ago</span>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempo
                                incididunt ut labore et dolore magna aliqua.
                              </p>

                              <div className="controls">
                                <div className="like-count">
                                  <i data-feather="thumbs-up"></i>
                                  <span>1</span>
                                </div>
                                <div className="reply">
                                  <a href="#">Reply</a>
                                </div>
                              </div>
                            </div>

                            <div className="media-right">
                              <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                <div>
                                  <div className="button">
                                    <i data-feather="more-vertical"></i>
                                  </div>
                                </div>
                                <div className="dropdown-menu" role="menu">
                                  <div className="dropdown-content">
                                    <a className="dropdown-item">
                                      <div className="media">
                                        <i data-feather="x"></i>
                                        <div className="media-content">
                                          <h3>Hide</h3>
                                          <small>Hide this comment.</small>
                                        </div>
                                      </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item">
                                      <div className="media">
                                        <i data-feather="flag"></i>
                                        <div className="media-content">
                                          <h3>Report</h3>
                                          <small>Report this comment.</small>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="media-right">
                          <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                            <div>
                              <div className="button">
                                <i data-feather="more-vertical"></i>
                              </div>
                            </div>
                            <div className="dropdown-menu" role="menu">
                              <div className="dropdown-content">
                                <a className="dropdown-item">
                                  <div className="media">
                                    <i data-feather="x"></i>
                                    <div className="media-content">
                                      <h3>Hide</h3>
                                      <small>Hide this comment.</small>
                                    </div>
                                  </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                  <div className="media">
                                    <i data-feather="flag"></i>
                                    <div className="media-content">
                                      <h3>Report</h3>
                                      <small>Report this comment.</small>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="media is-comment">
                        <div className="media-left">
                          <div className="image">
                            <img
                              src="../via.placeholder.com/300x300.png"
                              data-demo-src="assets/img/avatars/nelly.png"
                              data-user-popover="9"
                              alt=""
                            />
                          </div>
                        </div>

                        <div className="media-content">
                          <a href="#">Nelly Schwartz</a>
                          <span className="time">2 days ago</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempo incididunt ut labore et
                            dolore magna aliqua.
                          </p>

                          <div className="controls">
                            <div className="like-count">
                              <i data-feather="thumbs-up"></i>
                              <span>1</span>
                            </div>
                            <div className="reply">
                              <a href="#">Reply</a>
                            </div>
                          </div>
                        </div>

                        <div className="media-right">
                          <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                            <div>
                              <div className="button">
                                <i data-feather="more-vertical"></i>
                              </div>
                            </div>
                            <div className="dropdown-menu" role="menu">
                              <div className="dropdown-content">
                                <a className="dropdown-item">
                                  <div className="media">
                                    <i data-feather="x"></i>
                                    <div className="media-content">
                                      <h3>Hide</h3>
                                      <small>Hide this comment.</small>
                                    </div>
                                  </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                  <div className="media">
                                    <i data-feather="flag"></i>
                                    <div className="media-content">
                                      <h3>Report</h3>
                                      <small>Report this comment.</small>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card-footer">
                      <div className="media post-comment has-emojis">
                        <div className="media-content">
                          <div className="field">
                            <p className="control">
                              <textarea
                                className="textarea comment-textarea"
                                rows="5"
                                placeholder="Write a comment..."
                              ></textarea>
                            </p>
                          </div>

                          <div className="actions">
                            <div className="image is-32x32">
                              <img
                                className="is-rounded"
                                src="../via.placeholder.com/300x300.png"
                                data-demo-src="assets/img/avatars/jenna.png"
                                data-user-popover="0"
                                alt=""
                              />
                            </div>
                            <div className="toolbar">
                              <div className="action is-auto">
                                <i data-feather="at-sign"></i>
                              </div>
                              <div className="action is-emoji">
                                <i data-feather="smile"></i>
                              </div>
                              <div className="action is-upload">
                                <i data-feather="camera"></i>
                                <input type="file" />
                              </div>
                              <a className="button is-solid primary-button raised">
                                Post Comment
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card is-post">
                  <div className="content-wrap">
                    <div className="card-heading">
                      <div className="user-block">
                        <div className="image">
                          <img
                            src="../via.placeholder.com/300x300.png"
                            data-demo-src="assets/img/avatars/stella.jpg"
                            data-user-popover="2"
                            alt=""
                          />
                        </div>
                        <div className="user-info">
                          <a href="#">Stella Bergmann</a>
                          <span className="time">July 19 2018, 15:13pm</span>
                        </div>
                      </div>

                      <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                        <div>
                          <div className="button">
                            <i data-feather="more-vertical"></i>
                          </div>
                        </div>
                        <div className="dropdown-menu" role="menu">
                          <div className="dropdown-content">
                            <a href="#" className="dropdown-item">
                              <div className="media">
                                <i data-feather="bookmark"></i>
                                <div className="media-content">
                                  <h3>Bookmark</h3>
                                  <small>
                                    Add this post to your bookmarks.
                                  </small>
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
                                  <small>
                                    In case of inappropriate content.
                                  </small>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card-body">
                      <div className="post-text">
                        <p>
                          Hey friends ! Iam back and i wanted to share with you
                          some awesome pictures we took during our trip to Santa
                          Monica. We had wonderful holidays at the beach. Kisses
                          to all !
                        </p>

                        <p></p>
                      </div>

                      <div className="post-image">
                        <div className="masonry-grid">
                          <div className="masonry-column-left">
                            <a
                              data-fancybox="post3"
                              data-lightbox-type="comments"
                              data-thumb="assets/img/demo/unsplash/3.jpg"
                              href="../via.placeholder.com/1600x900.png"
                              data-demo-href="assets/img/demo/unsplash/3.jpg"
                            >
                              <img
                                src="../via.placeholder.com/1600x900.png"
                                data-demo-src="assets/img/demo/unsplash/3.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              data-fancybox="post3"
                              data-lightbox-type="comments"
                              data-thumb="assets/img/demo/unsplash/4.jpg"
                              href="../via.placeholder.com/1600x900.png"
                              data-demo-href="assets/img/demo/unsplash/4.jpg"
                            >
                              <img
                                src="../via.placeholder.com/1600x900.png"
                                data-demo-src="assets/img/demo/unsplash/4.jpg"
                                alt=""
                              />
                            </a>
                          </div>

                          <div className="masonry-column-right">
                            <a
                              data-fancybox="post3"
                              data-lightbox-type="comments"
                              data-thumb="assets/img/demo/unsplash/5.jpg"
                              href="../via.placeholder.com/1600x900.png"
                              data-demo-href="assets/img/demo/unsplash/5.jpg"
                            >
                              <img
                                src="../via.placeholder.com/1600x900.png"
                                data-demo-src="assets/img/demo/unsplash/5.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              data-fancybox="post3"
                              data-lightbox-type="comments"
                              data-thumb="assets/img/demo/unsplash/6.jpg"
                              href="../via.placeholder.com/1600x900.png"
                              data-demo-href="assets/img/demo/unsplash/6.jpg"
                            >
                              <img
                                src="../via.placeholder.com/1600x900.png"
                                data-demo-src="assets/img/demo/unsplash/6.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              data-fancybox="post3"
                              data-lightbox-type="comments"
                              data-thumb="assets/img/demo/unsplash/7.jpg"
                              href="../via.placeholder.com/1600x900.png"
                              data-demo-href="assets/img/demo/unsplash/7.jpg"
                            >
                              <img
                                src="../via.placeholder.com/1600x900.png"
                                data-demo-src="assets/img/demo/unsplash/7.jpg"
                                alt=""
                              />
                            </a>
                          </div>

                          <div className="like-wrapper">
                            <a
                              href="javascript:void(0);"
                              className="like-button"
                            >
                              <i className="mdi mdi-heart not-liked bouncy"></i>
                              <i className="mdi mdi-heart is-liked bouncy"></i>
                              <span className="like-overlay"></span>
                            </a>
                          </div>

                          <div className="fab-wrapper is-share">
                            <a
                              href="javascript:void(0);"
                              className="small-fab share-fab modal-trigger"
                              data-modal="share-modal"
                            >
                              <i data-feather="link-2"></i>
                            </a>
                          </div>

                          <div className="fab-wrapper is-comment">
                            <a href="javascript:void(0);" className="small-fab">
                              <i data-feather="message-circle"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card-footer">
                      <div className="likers-group">
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/rolf.jpg"
                          data-user-popover="13"
                          alt=""
                        />
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/mike.jpg"
                          data-user-popover="12"
                          alt=""
                        />
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/daniel.jpg"
                          data-user-popover="3"
                          alt=""
                        />
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/elise.jpg"
                          data-user-popover="6"
                          alt=""
                        />
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/david.jpg"
                          data-user-popover="4"
                          alt=""
                        />
                      </div>
                      <div className="likers-text">
                        <p>
                          <a href="#">Gaelle</a>,<a href="#">Rolf</a>
                        </p>
                        <p>and 31 more liked this</p>
                      </div>

                      <div className="social-count">
                        <div className="likes-count">
                          <i data-feather="heart"></i>
                          <span>33</span>
                        </div>
                        <div className="shares-count">
                          <i data-feather="link-2"></i>
                          <span>1</span>
                        </div>
                        <div className="comments-count">
                          <i data-feather="message-circle"></i>
                          <span>9</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="comments-wrap is-hidden">
                    <div className="comments-heading">
                      <h4>
                        Comments <small>(9)</small>
                      </h4>
                      <div className="close-comments">
                        <i data-feather="x"></i>
                      </div>
                    </div>

                    <div className="comments-body has-slimscroll">
                      <div className="media is-comment">
                        <div className="media-left">
                          <div className="image">
                            <img
                              src="../via.placeholder.com/300x300.png"
                              data-demo-src="assets/img/avatars/jenna.png"
                              data-user-popover="0"
                              alt=""
                            />
                          </div>
                        </div>

                        <div className="media-content">
                          <a href="#">Jenna Davis</a>
                          <span className="time">30 minutes ago</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempo incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris consequat.
                          </p>

                          <div className="controls">
                            <div className="like-count">
                              <i data-feather="thumbs-up"></i>
                              <span>0</span>
                            </div>
                            <div className="reply">
                              <a href="#">Reply</a>
                            </div>
                          </div>

                          <div className="media is-comment">
                            <div className="media-left">
                              <div className="image">
                                <img
                                  src="../via.placeholder.com/300x300.png"
                                  data-demo-src="assets/img/avatars/lana.jpeg"
                                  data-user-popover="10"
                                  alt=""
                                />
                              </div>
                            </div>

                            <div className="media-content">
                              <a href="#">Lana Henrikssen</a>
                              <span className="time">15 minutes ago</span>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempo.
                              </p>

                              <div className="controls">
                                <div className="like-count">
                                  <i data-feather="thumbs-up"></i>
                                  <span>2</span>
                                </div>
                                <div className="reply">
                                  <a href="#">Reply</a>
                                </div>
                              </div>
                            </div>

                            <div className="media-right">
                              <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                <div>
                                  <div className="button">
                                    <i data-feather="more-vertical"></i>
                                  </div>
                                </div>
                                <div className="dropdown-menu" role="menu">
                                  <div className="dropdown-content">
                                    <a className="dropdown-item">
                                      <div className="media">
                                        <i data-feather="x"></i>
                                        <div className="media-content">
                                          <h3>Hide</h3>
                                          <small>Hide this comment.</small>
                                        </div>
                                      </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item">
                                      <div className="media">
                                        <i data-feather="flag"></i>
                                        <div className="media-content">
                                          <h3>Report</h3>
                                          <small>Report this comment.</small>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="media is-comment">
                            <div className="media-left">
                              <div className="image">
                                <img
                                  src="../via.placeholder.com/300x300.png"
                                  data-demo-src="assets/img/avatars/david.jpg"
                                  data-user-popover="4"
                                  alt=""
                                />
                              </div>
                            </div>

                            <div className="media-content">
                              <a href="#">David Kim</a>
                              <span className="time">12 minutes ago</span>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempo
                                incididunt ut labore et dolore magna aliqua.
                              </p>
                              <div className="controls">
                                <div className="like-count">
                                  <i data-feather="thumbs-up"></i>
                                  <span>5</span>
                                </div>
                                <div className="reply">
                                  <a href="#">Reply</a>
                                </div>
                              </div>
                            </div>

                            <div className="media-right">
                              <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                <div>
                                  <div className="button">
                                    <i data-feather="more-vertical"></i>
                                  </div>
                                </div>
                                <div className="dropdown-menu" role="menu">
                                  <div className="dropdown-content">
                                    <a className="dropdown-item">
                                      <div className="media">
                                        <i data-feather="x"></i>
                                        <div className="media-content">
                                          <h3>Hide</h3>
                                          <small>Hide this comment.</small>
                                        </div>
                                      </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item">
                                      <div className="media">
                                        <i data-feather="flag"></i>
                                        <div className="media-content">
                                          <h3>Report</h3>
                                          <small>Report this comment.</small>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="media is-comment">
                            <div className="media-left">
                              <div className="image">
                                <img
                                  src="../via.placeholder.com/300x300.png"
                                  data-demo-src="assets/img/avatars/mike.jpg"
                                  data-user-popover="12"
                                  alt=""
                                />
                              </div>
                            </div>

                            <div className="media-content">
                              <a href="#">Mike Lasalle</a>
                              <span className="time">8 minutes ago</span>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempo
                                incididunt.
                              </p>
                              <div className="controls">
                                <div className="like-count">
                                  <i data-feather="thumbs-up"></i>
                                  <span>5</span>
                                </div>
                                <div className="reply">
                                  <a href="#">Reply</a>
                                </div>
                              </div>
                            </div>

                            <div className="media-right">
                              <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                <div>
                                  <div className="button">
                                    <i data-feather="more-vertical"></i>
                                  </div>
                                </div>
                                <div className="dropdown-menu" role="menu">
                                  <div className="dropdown-content">
                                    <a className="dropdown-item">
                                      <div className="media">
                                        <i data-feather="x"></i>
                                        <div className="media-content">
                                          <h3>Hide</h3>
                                          <small>Hide this comment.</small>
                                        </div>
                                      </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item">
                                      <div className="media">
                                        <i data-feather="flag"></i>
                                        <div className="media-content">
                                          <h3>Report</h3>
                                          <small>Report this comment.</small>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="media is-comment">
                            <div className="media-left">
                              <div className="image">
                                <img
                                  src="../via.placeholder.com/300x300.png"
                                  data-demo-src="assets/img/avatars/stella.jpg"
                                  data-user-popover="2"
                                  alt=""
                                />
                              </div>
                            </div>

                            <div className="media-content">
                              <a href="#">Stella Bergmann</a>
                              <span className="time">Just now</span>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempo
                                incididunt.
                              </p>
                              <div className="controls">
                                <div className="like-count">
                                  <i data-feather="thumbs-up"></i>
                                  <span>2</span>
                                </div>
                                <div className="reply">
                                  <a href="#">Reply</a>
                                </div>
                              </div>
                            </div>

                            <div className="media-right">
                              <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                <div>
                                  <div className="button">
                                    <i data-feather="more-vertical"></i>
                                  </div>
                                </div>
                                <div className="dropdown-menu" role="menu">
                                  <div className="dropdown-content">
                                    <a className="dropdown-item">
                                      <div className="media">
                                        <i data-feather="x"></i>
                                        <div className="media-content">
                                          <h3>Hide</h3>
                                          <small>Hide this comment.</small>
                                        </div>
                                      </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item">
                                      <div className="media">
                                        <i data-feather="flag"></i>
                                        <div className="media-content">
                                          <h3>Report</h3>
                                          <small>Report this comment.</small>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="media-right">
                          <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                            <div>
                              <div className="button">
                                <i data-feather="more-vertical"></i>
                              </div>
                            </div>
                            <div className="dropdown-menu" role="menu">
                              <div className="dropdown-content">
                                <a className="dropdown-item">
                                  <div className="media">
                                    <i data-feather="x"></i>
                                    <div className="media-content">
                                      <h3>Hide</h3>
                                      <small>Hide this comment.</small>
                                    </div>
                                  </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                  <div className="media">
                                    <i data-feather="flag"></i>
                                    <div className="media-content">
                                      <h3>Report</h3>
                                      <small>Report this comment.</small>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="media is-comment">
                        <div className="media-left">
                          <div className="image">
                            <img
                              src="../via.placeholder.com/300x300.png"
                              data-demo-src="assets/img/avatars/daniel.jpg"
                              data-user-popover="3"
                              alt=""
                            />
                          </div>
                        </div>

                        <div className="media-content">
                          <a href="#">Daniel Wellington</a>
                          <span className="time">5 hours ago</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempo incididunt ut labore et
                            dolore magna aliqua.
                          </p>

                          <div className="controls">
                            <div className="like-count">
                              <i data-feather="thumbs-up"></i>
                              <span>1</span>
                            </div>
                            <div className="reply">
                              <a href="#">Reply</a>
                            </div>
                          </div>
                        </div>

                        <div className="media-right">
                          <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                            <div>
                              <div className="button">
                                <i data-feather="more-vertical"></i>
                              </div>
                            </div>
                            <div className="dropdown-menu" role="menu">
                              <div className="dropdown-content">
                                <a className="dropdown-item">
                                  <div className="media">
                                    <i data-feather="x"></i>
                                    <div className="media-content">
                                      <h3>Hide</h3>
                                      <small>Hide this comment.</small>
                                    </div>
                                  </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                  <div className="media">
                                    <i data-feather="flag"></i>
                                    <div className="media-content">
                                      <h3>Report</h3>
                                      <small>Report this comment.</small>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="media is-comment">
                        <div className="media-left">
                          <div className="image">
                            <img
                              src="../via.placeholder.com/300x300.png"
                              data-demo-src="assets/img/avatars/bobby.jpg"
                              data-user-popover="8"
                              alt=""
                            />
                          </div>
                        </div>

                        <div className="media-content">
                          <a href="#">Bobby Brown</a>
                          <span className="time">7 hours ago</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempo incididunt ut labore et
                            dolore magna aliqua.
                          </p>

                          <div className="controls">
                            <div className="like-count">
                              <i data-feather="thumbs-up"></i>
                              <span>1</span>
                            </div>
                            <div className="reply">
                              <a href="#">Reply</a>
                            </div>
                          </div>

                          <div className="media is-comment">
                            <div className="media-left">
                              <div className="image">
                                <img
                                  src="../via.placeholder.com/300x300.png"
                                  data-demo-src="assets/img/avatars/stella.jpg"
                                  data-user-popover="2"
                                  alt=""
                                />
                              </div>
                            </div>

                            <div className="media-content">
                              <a href="#">Stella Bergmann</a>
                              <span className="time">7 hours ago</span>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempo
                                incididunt.
                              </p>
                              <div className="controls">
                                <div className="like-count">
                                  <i data-feather="thumbs-up"></i>
                                  <span>2</span>
                                </div>
                                <div className="reply">
                                  <a href="#">Reply</a>
                                </div>
                              </div>
                            </div>

                            <div className="media-right">
                              <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                <div>
                                  <div className="button">
                                    <i data-feather="more-vertical"></i>
                                  </div>
                                </div>
                                <div className="dropdown-menu" role="menu">
                                  <div className="dropdown-content">
                                    <a className="dropdown-item">
                                      <div className="media">
                                        <i data-feather="x"></i>
                                        <div className="media-content">
                                          <h3>Hide</h3>
                                          <small>Hide this comment.</small>
                                        </div>
                                      </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item">
                                      <div className="media">
                                        <i data-feather="flag"></i>
                                        <div className="media-content">
                                          <h3>Report</h3>
                                          <small>Report this comment.</small>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="media is-comment">
                            <div className="media-left">
                              <div className="image">
                                <img
                                  src="../via.placeholder.com/300x300.png"
                                  data-demo-src="assets/img/avatars/lana.jpeg"
                                  data-user-popover="10"
                                  alt=""
                                />
                              </div>
                            </div>

                            <div className="media-content">
                              <a href="#">Lana Henrikssen</a>
                              <span className="time">15 minutes ago</span>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempo.
                              </p>

                              <div className="controls">
                                <div className="like-count">
                                  <i data-feather="thumbs-up"></i>
                                  <span>2</span>
                                </div>
                                <div className="reply">
                                  <a href="#">Reply</a>
                                </div>
                              </div>
                            </div>

                            <div className="media-right">
                              <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                <div>
                                  <div className="button">
                                    <i data-feather="more-vertical"></i>
                                  </div>
                                </div>
                                <div className="dropdown-menu" role="menu">
                                  <div className="dropdown-content">
                                    <a className="dropdown-item">
                                      <div className="media">
                                        <i data-feather="x"></i>
                                        <div className="media-content">
                                          <h3>Hide</h3>
                                          <small>Hide this comment.</small>
                                        </div>
                                      </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item">
                                      <div className="media">
                                        <i data-feather="flag"></i>
                                        <div className="media-content">
                                          <h3>Report</h3>
                                          <small>Report this comment.</small>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="media-right">
                          <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                            <div>
                              <div className="button">
                                <i data-feather="more-vertical"></i>
                              </div>
                            </div>
                            <div className="dropdown-menu" role="menu">
                              <div className="dropdown-content">
                                <a className="dropdown-item">
                                  <div className="media">
                                    <i data-feather="x"></i>
                                    <div className="media-content">
                                      <h3>Hide</h3>
                                      <small>Hide this comment.</small>
                                    </div>
                                  </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                  <div className="media">
                                    <i data-feather="flag"></i>
                                    <div className="media-content">
                                      <h3>Report</h3>
                                      <small>Report this comment.</small>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card-footer">
                      <div className="media post-comment has-emojis">
                        <div className="media-content">
                          <div className="field">
                            <p className="control">
                              <textarea
                                className="textarea comment-textarea"
                                rows="5"
                                placeholder="Write a comment..."
                              ></textarea>
                            </p>
                          </div>

                          <div className="actions">
                            <div className="image is-32x32">
                              <img
                                className="is-rounded"
                                src="../via.placeholder.com/300x300.png"
                                data-demo-src="assets/img/avatars/jenna.png"
                                data-user-popover="0"
                                alt=""
                              />
                            </div>
                            <div className="toolbar">
                              <div className="action is-auto">
                                <i data-feather="at-sign"></i>
                              </div>
                              <div className="action is-emoji">
                                <i data-feather="smile"></i>
                              </div>
                              <div className="action is-upload">
                                <i data-feather="camera"></i>
                                <input type="file" />
                              </div>
                              <a className="button is-solid primary-button raised">
                                Post Comment
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card is-post">
                  <div className="content-wrap">
                    <div className="card-heading">
                      <div className="user-block">
                        <div className="image">
                          <img
                            src="../via.placeholder.com/300x300.png"
                            data-demo-src="assets/img/avatars/david.jpg"
                            data-user-popover="4"
                            alt=""
                          />
                        </div>
                        <div className="user-info">
                          <a href="#">David Kim</a>
                          <span className="time">August 02 2018, 03:04pm</span>
                        </div>
                      </div>

                      <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                        <div>
                          <div className="button">
                            <i data-feather="more-vertical"></i>
                          </div>
                        </div>
                        <div className="dropdown-menu" role="menu">
                          <div className="dropdown-content">
                            <a href="#" className="dropdown-item">
                              <div className="media">
                                <i data-feather="bookmark"></i>
                                <div className="media-content">
                                  <h3>Bookmark</h3>
                                  <small>
                                    Add this post to your bookmarks.
                                  </small>
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
                                  <small>
                                    In case of inappropriate content.
                                  </small>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card-body">
                      <div className="post-text">
                        <p>
                          Just discovered this awesome CSS framework named
                          <a href="#">#bulmaCss</a>. It's based on flexbox, so
                          easy to use and comes with so many mobile first
                          modifiers. You can build anything from scratch easily
                          with Bulma.
                          <a href="#">#webdesign #bulmaio</a>
                        </p>
                      </div>

                      <div className="post-link">
                        <div className="link-image">
                          <img
                            src="../via.placeholder.com/300x300.png"
                            data-demo-src="assets/img/demo/video/bulma2.png"
                            alt=""
                          />
                        </div>

                        <div className="link-content">
                          <h4>
                            <a href="#">Bulma CSS Framework</a>
                          </h4>
                          <p>
                            Bulma is a mobile first CSS framework built on top
                            of Flexbox. It's awesome and so easy to use.
                          </p>
                          <small>Bulma.io</small>
                        </div>

                        <div className="like-wrapper">
                          <a href="javascript:void(0);" className="like-button">
                            <i className="mdi mdi-heart not-liked bouncy"></i>
                            <i className="mdi mdi-heart is-liked bouncy"></i>
                            <span className="like-overlay"></span>
                          </a>
                        </div>

                        <div className="fab-wrapper is-share">
                          <a
                            href="javascript:void(0);"
                            className="small-fab share-fab modal-trigger"
                            data-modal="share-modal"
                          >
                            <i data-feather="link-2"></i>
                          </a>
                        </div>

                        <div className="fab-wrapper is-comment">
                          <a href="javascript:void(0);" className="small-fab">
                            <i data-feather="message-circle"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="card-footer">
                      <div className="likers-group">
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/lana.jpeg"
                          data-user-popover="10"
                          alt=""
                        />
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/mike.jpg"
                          data-user-popover="12"
                          alt=""
                        />
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/gaelle.jpeg"
                          data-user-popover="11"
                          alt=""
                        />
                      </div>
                      <div className="likers-text">
                        <p>
                          <a href="#">Lana</a>,<a href="#">Mike</a>
                        </p>
                        <p>and 1 more liked this</p>
                      </div>

                      <div className="social-count">
                        <div className="likes-count">
                          <i data-feather="heart"></i>
                          <span>11</span>
                        </div>
                        <div className="shares-count">
                          <i data-feather="link-2"></i>
                          <span>3</span>
                        </div>
                        <div className="comments-count">
                          <i data-feather="message-circle"></i>
                          <span>2</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="comments-wrap is-hidden">
                    <div className="comments-heading">
                      <h4>
                        Comments
                        <small>(2)</small>
                      </h4>
                      <div className="close-comments">
                        <i data-feather="x"></i>
                      </div>
                    </div>

                    <div className="comments-body has-slimscroll">
                      <div className="media is-comment">
                        <div className="media-left">
                          <div className="image">
                            <img
                              src="../via.placeholder.com/300x300.png"
                              data-demo-src="assets/img/avatars/lana.jpeg"
                              data-user-popover="10"
                              alt=""
                            />
                          </div>
                        </div>

                        <div className="media-content">
                          <a href="#">Lana Henrikssen</a>
                          <span className="time">2 days ago</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempo incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris consequat.
                          </p>

                          <div className="controls">
                            <div className="like-count">
                              <i data-feather="thumbs-up"></i>
                              <span>1</span>
                            </div>
                            <div className="reply">
                              <a href="#">Reply</a>
                            </div>
                          </div>

                          <div className="media is-comment">
                            <div className="media-left">
                              <div className="image">
                                <img
                                  src="../via.placeholder.com/300x300.png"
                                  data-demo-src="assets/img/avatars/david.jpg"
                                  data-user-popover="4"
                                  alt=""
                                />
                              </div>
                            </div>

                            <div className="media-content">
                              <a href="#">David Kim</a>
                              <span className="time">2 days ago</span>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempo
                                incididunt ut labore et dolore magna aliqua.
                              </p>

                              <div className="controls">
                                <div className="like-count">
                                  <i data-feather="thumbs-up"></i>
                                  <span>0</span>
                                </div>
                                <div className="reply">
                                  <a href="#">Reply</a>
                                </div>
                              </div>
                            </div>

                            <div className="media-right">
                              <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                <div>
                                  <div className="button">
                                    <i data-feather="more-vertical"></i>
                                  </div>
                                </div>
                                <div className="dropdown-menu" role="menu">
                                  <div className="dropdown-content">
                                    <a className="dropdown-item">
                                      <div className="media">
                                        <i data-feather="x"></i>
                                        <div className="media-content">
                                          <h3>Hide</h3>
                                          <small>Hide this comment.</small>
                                        </div>
                                      </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item">
                                      <div className="media">
                                        <i data-feather="flag"></i>
                                        <div className="media-content">
                                          <h3>Report</h3>
                                          <small>Report this comment.</small>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="media-right">
                          <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                            <div>
                              <div className="button">
                                <i data-feather="more-vertical"></i>
                              </div>
                            </div>
                            <div className="dropdown-menu" role="menu">
                              <div className="dropdown-content">
                                <a className="dropdown-item">
                                  <div className="media">
                                    <i data-feather="x"></i>
                                    <div className="media-content">
                                      <h3>Hide</h3>
                                      <small>Hide this comment.</small>
                                    </div>
                                  </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item">
                                  <div className="media">
                                    <i data-feather="flag"></i>
                                    <div className="media-content">
                                      <h3>Report</h3>
                                      <small>Report this comment.</small>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card-footer">
                      <div className="media post-comment has-emojis">
                        <div className="media-content">
                          <div className="field">
                            <p className="control">
                              <textarea
                                className="textarea comment-textarea"
                                rows="5"
                                placeholder="Write a comment..."
                              ></textarea>
                            </p>
                          </div>

                          <div className="actions">
                            <div className="image is-32x32">
                              <img
                                className="is-rounded"
                                src="../via.placeholder.com/300x300.png"
                                data-demo-src="assets/img/avatars/jenna.png"
                                data-user-popover="0"
                                alt=""
                              />
                            </div>
                            <div className="toolbar">
                              <div className="action is-auto">
                                <i data-feather="at-sign"></i>
                              </div>
                              <div className="action is-emoji">
                                <i data-feather="smile"></i>
                              </div>
                              <div className="action is-upload">
                                <i data-feather="camera"></i>
                                <input type="file" />
                              </div>
                              <a className="button is-solid primary-button raised">
                                Post Comment
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card is-post is-simple">
                  <div className="content-wrap">
                    <div className="card-heading">
                      <div className="user-block">
                        <div className="image">
                          <img
                            src="../via.placeholder.com/300x300.png"
                            data-demo-src="assets/img/avatars/bobby.jpg"
                            data-user-popover="8"
                            alt=""
                          />
                        </div>
                        <div className="user-info">
                          <a href="#">Bobby Brown</a>
                          <span className="time">July 26 2018, 11:14am</span>
                        </div>
                      </div>

                      <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                        <div>
                          <div className="button">
                            <i data-feather="more-vertical"></i>
                          </div>
                        </div>
                        <div className="dropdown-menu" role="menu">
                          <div className="dropdown-content">
                            <a href="#" className="dropdown-item">
                              <div className="media">
                                <i data-feather="bookmark"></i>
                                <div className="media-content">
                                  <h3>Bookmark</h3>
                                  <small>
                                    Add this post to your bookmarks.
                                  </small>
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
                                  <small>
                                    In case of inappropriate content.
                                  </small>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card-body">
                      <div className="post-text">
                        <p>
                          Today, when i was walking back home from my job, i
                          figured that i should build the best social media
                          template in ThemeForest. As soon as i got back, i
                          started working on this fresh and new project. Any
                          suggestions about where i could find some interesting
                          resources for social media design?{" "}
                          <a href="#">#webdesign #socialmedia</a>
                        </p>

                        <p></p>
                      </div>

                      <div className="post-actions">
                        <div className="like-wrapper">
                          <a href="javascript:void(0);" className="like-button">
                            <i className="mdi mdi-heart not-liked bouncy"></i>
                            <i className="mdi mdi-heart is-liked bouncy"></i>
                            <span className="like-overlay"></span>
                          </a>
                        </div>

                        <div className="fab-wrapper is-share">
                          <a
                            href="javascript:void(0);"
                            className="small-fab share-fab modal-trigger"
                            data-modal="share-modal"
                          >
                            <i data-feather="link-2"></i>
                          </a>
                        </div>

                        <div className="fab-wrapper is-comment">
                          <a href="javascript:void(0);" className="small-fab">
                            <i data-feather="message-circle"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="card-footer">
                      <div className="likers-group">
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/daniel.jpg"
                          data-user-popover="3"
                          alt=""
                        />
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/elise.jpg"
                          data-user-popover="6"
                          alt=""
                        />
                      </div>
                      <div className="likers-text">
                        <p>
                          <a href="#">Daniel</a> and
                          <a href="#">Elise</a>
                        </p>
                        <p>liked this</p>
                      </div>

                      <div className="social-count">
                        <div className="likes-count">
                          <i data-feather="heart"></i>
                          <span>2</span>
                        </div>
                        <div className="shares-count">
                          <i data-feather="link-2"></i>
                          <span>0</span>
                        </div>
                        <div className="comments-count">
                          <i data-feather="message-circle"></i>
                          <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="comments-wrap is-hidden">
                    <div className="comments-heading">
                      <h4>
                        Comments
                        <small>(0)</small>
                      </h4>
                      <div className="close-comments">
                        <i data-feather="x"></i>
                      </div>
                    </div>

                    <div className="comments-body has-slimscroll">
                      <div className="comments-placeholder">
                        <img src="assets/img/icons/feed/bubble.svg" alt="" />
                        <h3>Nothing in here yet</h3>
                        <p>Be the first to post a comment.</p>
                      </div>
                    </div>

                    <div className="card-footer">
                      <div className="media post-comment has-emojis">
                        <div className="media-content">
                          <div className="field">
                            <p className="control">
                              <textarea
                                className="textarea comment-textarea"
                                rows="5"
                                placeholder="Write a comment..."
                              ></textarea>
                            </p>
                          </div>

                          <div className="actions">
                            <div className="image is-32x32">
                              <img
                                className="is-rounded"
                                src="../via.placeholder.com/300x300.png"
                                data-demo-src="assets/img/avatars/jenna.png"
                                data-user-popover="0"
                                alt=""
                              />
                            </div>
                            <div className="toolbar">
                              <div className="action is-auto">
                                <i data-feather="at-sign"></i>
                              </div>
                              <div className="action is-emoji">
                                <i data-feather="smile"></i>
                              </div>
                              <div className="action is-upload">
                                <i data-feather="camera"></i>
                                <input type="file" />
                              </div>
                              <a className="button is-solid primary-button raised">
                                Post Comment
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="load-more-wrap narrow-top has-text-centered">
                  <a href="#" className="load-more-button">
                    Load More
                  </a>
                </div>
              </div>

              <div className="column is-3">
                <div className="card">
                  <div className="card-heading is-bordered">
                    <h4>Stories</h4>
                    <div className="dropdown is-spaced is-neutral is-right dropdown-trigger">
                      <div>
                        <div className="button">
                          <i data-feather="more-vertical"></i>
                        </div>
                      </div>
                      <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <i data-feather="tv"></i>
                              <div className="media-content">
                                <h3>Browse stories</h3>
                                <small>View all recent stories.</small>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="settings"></i>
                              <div className="media-content">
                                <h3>Settings</h3>
                                <small>Access widget settings.</small>
                              </div>
                            </div>
                          </a>
                          <hr className="dropdown-divider" />
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <i data-feather="trash-2"></i>
                              <div className="media-content">
                                <h3>Remove</h3>
                                <small>
                                  Removes this widget from your feed.
                                </small>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body no-padding">
                    <div className="story-block">
                      <a id="add-story-button" href="#" className="add-story">
                        <i data-feather="plus"></i>
                      </a>
                      <div className="story-meta">
                        <span>Add a new Story</span>
                        <span>Share an image, a video or some text</span>
                      </div>
                    </div>

                    <div className="story-block">
                      <div className="img-wrapper">
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/dan.jpg"
                          data-user-popover="1"
                          alt=""
                        />
                      </div>
                      <div className="story-meta">
                        <span>Dan Walker</span>
                        <span>1 hour ago</span>
                      </div>
                    </div>

                    <div className="story-block">
                      <div className="img-wrapper">
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/bobby.jpg"
                          data-user-popover="8"
                          alt=""
                        />
                      </div>
                      <div className="story-meta">
                        <span>Bobby Brown</span>
                        <span>3 days ago</span>
                      </div>
                    </div>

                    <div className="story-block">
                      <div className="img-wrapper">
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/elise.jpg"
                          data-user-popover="6"
                          alt=""
                        />
                      </div>
                      <div className="story-meta">
                        <span>Elise Walker</span>
                        <span>Last week</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="card is-birthday-card has-background-image"
                  data-background="assets/img/illustrations/cards/birthday-bg.svg"
                >
                  <div className="card-heading">
                    <i data-feather="gift"></i>
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
                                <small>
                                  Send an automatic greeting message.
                                </small>
                              </div>
                            </div>
                          </a>
                          <hr className="dropdown-divider" />
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <i data-feather="trash-2"></i>
                              <div className="media-content">
                                <h3>Remove</h3>
                                <small>
                                  Removes this widget from your feed.
                                </small>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div>
                      <div className="birthday-avatar">
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/dan.jpg"
                          alt=""
                        />
                        <div className="birthday-indicator">31</div>
                      </div>
                      <div className="birthday-content">
                        <h4>Dan turns 31 today!</h4>
                        <p>
                          Send him your best wishes by leaving something on his
                          wall.
                        </p>
                        <button type="button" className="button light-button">
                          Write Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-heading is-bordered">
                    <h4>Suggested Friends</h4>
                    <div className="dropdown is-spaced is-right dropdown-trigger">
                      <div>
                        <div className="button">
                          <i data-feather="more-vertical"></i>
                        </div>
                      </div>
                      <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <i data-feather="users"></i>
                              <div className="media-content">
                                <h3>All Suggestions</h3>
                                <small>View all friend suggestions.</small>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="settings"></i>
                              <div className="media-content">
                                <h3>Settings</h3>
                                <small>Access widget settings.</small>
                              </div>
                            </div>
                          </a>
                          <hr className="dropdown-divider" />
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <i data-feather="trash-2"></i>
                              <div className="media-content">
                                <h3>Remove</h3>
                                <small>
                                  Removes this widget from your feed.
                                </small>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body no-padding">
                    <div className="add-friend-block transition-block">
                      <img
                        src="../via.placeholder.com/300x300.png"
                        data-demo-src="assets/img/avatars/nelly.png"
                        data-user-popover="9"
                        alt=""
                      />
                      <div className="page-meta">
                        <span>Nelly Schwartz</span>
                        <span>Melbourne</span>
                      </div>
                      <div className="add-friend add-transition">
                        <i data-feather="user-plus"></i>
                      </div>
                    </div>

                    <div className="add-friend-block transition-block">
                      <img
                        src="../via.placeholder.com/300x300.png"
                        data-demo-src="assets/img/avatars/lana.jpeg"
                        data-user-popover="10"
                        alt=""
                      />
                      <div className="page-meta">
                        <span>Lana Henrikssen</span>
                        <span>Helsinki</span>
                      </div>
                      <div className="add-friend add-transition">
                        <i data-feather="user-plus"></i>
                      </div>
                    </div>

                    <div className="add-friend-block transition-block">
                      <img
                        src="../via.placeholder.com/300x300.png"
                        data-demo-src="assets/img/avatars/gaelle.jpeg"
                        data-user-popover="11"
                        alt=""
                      />
                      <div className="page-meta">
                        <span>Gaelle Morris</span>
                        <span>Lyon</span>
                      </div>
                      <div className="add-friend add-transition">
                        <i data-feather="user-plus"></i>
                      </div>
                    </div>

                    <div className="add-friend-block transition-block">
                      <img
                        src="../via.placeholder.com/300x300.png"
                        data-demo-src="assets/img/avatars/mike.jpg"
                        data-user-popover="12"
                        alt=""
                      />
                      <div className="page-meta">
                        <span>Mike Lasalle</span>
                        <span>Toronto</span>
                      </div>
                      <div className="add-friend add-transition">
                        <i data-feather="user-plus"></i>
                      </div>
                    </div>

                    <div className="add-friend-block transition-block">
                      <img
                        src="../via.placeholder.com/300x300.png"
                        data-demo-src="assets/img/avatars/rolf.jpg"
                        data-user-popover="13"
                        alt=""
                      />
                      <div className="page-meta">
                        <span>Rolf Krupp</span>
                        <span>Berlin</span>
                      </div>
                      <div className="add-friend add-transition">
                        <i data-feather="user-plus"></i>
                      </div>
                    </div>
                  </div>
                </div>

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
                                <small>
                                  Send an automatic congratz message.
                                </small>
                              </div>
                            </div>
                          </a>
                          <hr className="dropdown-divider" />
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <i data-feather="trash-2"></i>
                              <div className="media-content">
                                <h3>Remove</h3>
                                <small>
                                  Removes this widget from your feed.
                                </small>
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
                        <p>
                          Send her message congratulating her for getting this
                          job.
                        </p>
                        <button type="button" className="button light-button">
                          Write Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="create-group-modal"
          className="modal create-group-modal is-light-bg"
        >
          <div className="modal-background"></div>
          <div className="modal-content">
            <div className="card">
              <div className="card-heading">
                <h3>Create group</h3>

                <div className="close-wrap">
                  <span className="close-modal">
                    <i data-feather="x"></i>
                  </span>
                </div>
              </div>

              <div className="subheading">
                <div className="group-avatar">
                  <input id="group-avatar-upload" type="file" />
                  <div className="add-photo">
                    <i data-feather="plus"></i>
                  </div>
                </div>

                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Give the group a name"
                  />
                </div>
              </div>
              <div className="card-body">
                <div className="inner">
                  <div className="left-section">
                    <div className="search-subheader">
                      <div className="control">
                        <input
                          type="text"
                          className="input"
                          placeholder="Search for friends to add"
                        />
                        <span className="icon">
                          <i data-feather="search"></i>
                        </span>
                      </div>
                    </div>
                    <div
                      id="new-group-list"
                      className="user-list has-slimscroll"
                    >
                      <div className="friend-block" data-ref="ref-1">
                        <img
                          className="friend-avatar"
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/dan.jpg"
                          alt=""
                        />
                        <div className="friend-name">Dan Walker</div>
                        <div className="round-checkbox is-small">
                          <div>
                            <input type="checkbox" id="checkbox-group-1" />
                            <label for="checkbox-group-1"></label>
                          </div>
                        </div>
                      </div>

                      <div className="friend-block" data-ref="ref-2">
                        <img
                          className="friend-avatar"
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/daniel.jpg"
                          alt=""
                        />
                        <div className="friend-name">Daniel Wellington</div>
                        <div className="round-checkbox is-small">
                          <div>
                            <input type="checkbox" id="checkbox-group-2" />
                            <label for="checkbox-group-2"></label>
                          </div>
                        </div>
                      </div>

                      <div className="friend-block" data-ref="ref-3">
                        <img
                          className="friend-avatar"
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/stella.jpg"
                          alt=""
                        />
                        <div className="friend-name">Stella Bergmann</div>
                        <div className="round-checkbox is-small">
                          <div>
                            <input type="checkbox" id="checkbox-group-3" />
                            <label for="checkbox-group-3"></label>
                          </div>
                        </div>
                      </div>

                      <div className="friend-block" data-ref="ref-4">
                        <img
                          className="friend-avatar"
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/david.jpg"
                          alt=""
                        />
                        <div className="friend-name">David Kim</div>
                        <div className="round-checkbox is-small">
                          <div>
                            <input type="checkbox" id="checkbox-group-4" />
                            <label for="checkbox-group-4"></label>
                          </div>
                        </div>
                      </div>

                      <div className="friend-block" data-ref="ref-5">
                        <img
                          className="friend-avatar"
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/nelly.png"
                          alt=""
                        />
                        <div className="friend-name">Nelly Schwartz</div>
                        <div className="round-checkbox is-small">
                          <div>
                            <input type="checkbox" id="checkbox-group-5" />
                            <label for="checkbox-group-5"></label>
                          </div>
                        </div>
                      </div>

                      <div className="friend-block" data-ref="ref-6">
                        <img
                          className="friend-avatar"
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/elise.jpg"
                          alt=""
                        />
                        <div className="friend-name">Elise Walker</div>
                        <div className="round-checkbox is-small">
                          <div>
                            <input type="checkbox" id="checkbox-group-6" />
                            <label for="checkbox-group-6"></label>
                          </div>
                        </div>
                      </div>

                      <div className="friend-block" data-ref="ref-7">
                        <img
                          className="friend-avatar"
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/bobby.jpg"
                          alt=""
                        />
                        <div className="friend-name">Bobby Brown</div>
                        <div className="round-checkbox is-small">
                          <div>
                            <input type="checkbox" id="checkbox-group-7" />
                            <label for="checkbox-group-7"></label>
                          </div>
                        </div>
                      </div>

                      <div className="friend-block" data-ref="ref-8">
                        <img
                          className="friend-avatar"
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/lana.jpeg"
                          alt=""
                        />
                        <div className="friend-name">Lana Henrikssen</div>
                        <div className="round-checkbox is-small">
                          <div>
                            <input type="checkbox" id="checkbox-group-8" />
                            <label for="checkbox-group-8"></label>
                          </div>
                        </div>
                      </div>

                      <div className="friend-block" data-ref="ref-9">
                        <img
                          className="friend-avatar"
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/gaelle.jpeg"
                          alt=""
                        />
                        <div className="friend-name">Gaelle Morris</div>
                        <div className="round-checkbox is-small">
                          <div>
                            <input type="checkbox" id="checkbox-group-9" />
                            <label for="checkbox-group-9"></label>
                          </div>
                        </div>
                      </div>

                      <div className="friend-block" data-ref="ref-10">
                        <img
                          className="friend-avatar"
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/mike.jpg"
                          alt=""
                        />
                        <div className="friend-name">Mike Lasalle</div>
                        <div className="round-checkbox is-small">
                          <div>
                            <input type="checkbox" id="checkbox-group-10" />
                            <label for="checkbox-group-10"></label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="right-section has-slimscroll">
                    <div className="selected-count">
                      <span>Selected</span>
                      <span id="selected-friends-count">0</span>
                    </div>

                    <div id="selected-list" className="selected-list"></div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button
                  type="button"
                  className="button is-solid grey-button close-modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="button is-solid accent-button close-modal"
                >
                  Create a Group
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          id="albums-help-modal"
          className="modal albums-help-modal is-xsmall has-light-bg"
        >
          <div className="modal-background"></div>
          <div className="modal-content">
            <div className="card">
              <div className="card-heading">
                <h3>Add Photos</h3>

                <div className="close-wrap">
                  <span className="close-modal">
                    <i data-feather="x"></i>
                  </span>
                </div>
              </div>
              <div className="card-body">
                <div className="content-block is-active">
                  <img src="assets/img/illustrations/cards/albums.svg" alt="" />
                  <div className="help-text">
                    <h3>Manage your photos</h3>
                    <p>
                      Lorem ipsum sit dolor amet is a dummy text used by the
                      typography industry and the web industry.
                    </p>
                  </div>
                </div>

                <div className="content-block">
                  <img src="assets/img/illustrations/cards/upload.svg" alt="" />
                  <div className="help-text">
                    <h3>Upload your photos</h3>
                    <p>
                      Lorem ipsum sit dolor amet is a dummy text used by the
                      typography industry and the web industry.
                    </p>
                  </div>
                </div>

                <div className="slide-dots">
                  <div className="dot is-active"></div>
                  <div className="dot"></div>
                </div>
                <div className="action">
                  <button
                    type="button"
                    className="button is-solid accent-button next-modal raised"
                    data-modal="albums-modal"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="albums-modal"
          className="modal albums-modal is-xxl has-light-bg"
        >
          <div className="modal-background"></div>
          <div className="modal-content">
            <div className="card">
              <div className="card-heading">
                <h3>New album</h3>
                <div className="button is-solid accent-button fileinput-button">
                  <i className="mdi mdi-plus"></i>
                  Add pictures/videos
                </div>

                <div className="close-wrap">
                  <span className="close-modal">
                    <i data-feather="x"></i>
                  </span>
                </div>
              </div>
              <div className="card-body">
                <div className="left-section">
                  <div className="album-form">
                    <div className="control">
                      <input
                        type="text"
                        className="input is-sm no-radius is-fade"
                        placeholder="Album name"
                      />
                      <div className="icon">
                        <i data-feather="camera"></i>
                      </div>
                    </div>
                    <div className="control">
                      <textarea
                        className="textarea is-fade no-radius is-sm"
                        rows="3"
                        placeholder="describe your album ..."
                      ></textarea>
                    </div>
                    <div className="control">
                      <input
                        type="text"
                        className="input is-sm no-radius is-fade"
                        placeholder="Place"
                      />
                      <div className="icon">
                        <i data-feather="map-pin"></i>
                      </div>
                    </div>
                  </div>

                  <div id="album-date" className="album-date">
                    <div className="head">
                      <h4>Change the date</h4>
                      <button
                        type="button"
                        className="button is-solid dark-grey-button icon-button"
                      >
                        <i data-feather="plus"></i>
                      </button>
                    </div>

                    <p>
                      Set a date for your album. You can always change it later.
                    </p>
                    <div className="control is-hidden">
                      <input
                        id="album-datepicker"
                        type="text"
                        className="input is-sm is-fade"
                        placeholder="Select a date"
                      />
                      <div className="icon">
                        <i data-feather="calendar"></i>
                      </div>
                    </div>
                  </div>

                  <div id="tagged-in-album" className="tagged-in-album">
                    <div className="head">
                      <h4>Tag friends in this album</h4>
                      <button
                        type="button"
                        className="button is-solid dark-grey-button icon-button"
                      >
                        <i data-feather="plus"></i>
                      </button>
                    </div>

                    <p>
                      Tag friends in this album. Tagged friends can see photos
                      they are tagged in.
                    </p>
                    <div className="field is-autocomplete is-hidden">
                      <div className="control">
                        <input
                          id="create-album-friends-autocpl"
                          type="text"
                          className="input is-sm is-fade"
                          placeholder="Search for friends"
                        />
                        <div className="icon">
                          <i data-feather="search"></i>
                        </div>
                      </div>
                    </div>

                    <div id="album-tag-list" className="album-tag-list"></div>
                  </div>

                  <div className="shared-album">
                    <div className="head">
                      <h4>Allow friends to add photos</h4>
                      <div className="basic-checkbox">
                        <input
                          className="styled-checkbox"
                          id="styled-checkbox-1"
                          type="checkbox"
                          value="value1"
                        />
                        <label for="styled-checkbox-1"></label>
                      </div>
                    </div>

                    <p>
                      Tagged friends will be able to share content inside this
                      album.
                    </p>
                  </div>
                </div>
                <div className="right-section has-slimscroll">
                  <div className="modal-uploader">
                    <div id="actions" className="columns is-multiline no-mb">
                      <div className="column is-12">
                        <span className="button has-icon is-solid grey-button fileinput-button">
                          <i data-feather="plus"></i>
                        </span>
                        <button
                          type="submit"
                          className="button start is-hidden"
                        >
                          <span>Upload</span>
                        </button>
                        <button
                          type="reset"
                          className="button is-solid grey-button cancel"
                        >
                          <span>Clear all</span>
                        </button>
                        <span className="file-count">
                          <span id="modal-uploader-file-count">0</span> file(s)
                          selected
                        </span>
                      </div>

                      <div className="column is-12 is-hidden">
                        <div className="fileupload-process">
                          <div
                            id="total-progress"
                            className="progress progress-striped active"
                            role="progressbar"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            aria-valuenow="0"
                          >
                            <div
                              className="progress-bar progress-bar-success"
                              data-dz-uploadprogress
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="columns is-multiline" id="previews">
                      <div id="template" className="column is-4 is-template">
                        <div className="preview-box">
                          <div className="remove-button" data-dz-remove>
                            <i className="mdi mdi-close"></i>
                          </div>
                          <div>
                            <span className="preview">
                              <img
                                src="../via.placeholder.com/120x120.png"
                                data-dz-thumbnail
                                alt=""
                              />
                            </span>
                          </div>
                          <div className="preview-body">
                            <div className="item-meta">
                              <div>
                                <p className="name" data-dz-name></p>
                                <strong
                                  className="error text-danger"
                                  data-dz-errormessage
                                ></strong>
                              </div>
                              <small className="size" data-dz-size></small>
                            </div>
                            <div className="upload-item-progress">
                              <div
                                className="progress active"
                                role="progressbar"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                aria-valuenow="0"
                              >
                                <div
                                  className="progress-bar progress-bar-success"
                                  data-dz-uploadprogress
                                ></div>
                              </div>
                            </div>
                            <div className="upload-item-description">
                              <div className="control">
                                <textarea
                                  className="textarea is-small is-fade no-radius"
                                  rows="4"
                                  placeholder="Describe this photo ..."
                                ></textarea>
                              </div>
                            </div>
                            <div className="upload-item-actions is-hidden">
                              <button className="button start is-hidden">
                                <span>Start</span>
                              </button>
                              <button
                                data-dz-remove
                                className="button cancel is-hidden"
                              >
                                <span>Cancel</span>
                              </button>
                              <button
                                data-dz-remove
                                className="button delete is-hidden"
                              >
                                <span>Delete</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="dropdown is-up is-spaced is-modern is-neutral is-right dropdown-trigger">
                  <div>
                    <button className="button" aria-haspopup="true">
                      <i className="main-icon" data-feather="smile"></i>
                      <span>Friends</span>
                      <i className="caret" data-feather="chevron-down"></i>
                    </button>
                  </div>
                  <div className="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      <a href="#" className="dropdown-item">
                        <div className="media">
                          <i data-feather="globe"></i>
                          <div className="media-content">
                            <h3>Public</h3>
                            <small>Anyone can see this publication.</small>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item">
                        <div className="media">
                          <i data-feather="users"></i>
                          <div className="media-content">
                            <h3>Friends</h3>
                            <small>
                              only friends can see this publication.
                            </small>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item">
                        <div className="media">
                          <i data-feather="user"></i>
                          <div className="media-content">
                            <h3>Specific friends</h3>
                            <small>Don't show it to some friends.</small>
                          </div>
                        </div>
                      </a>
                      <hr className="dropdown-divider" />
                      <a className="dropdown-item">
                        <div className="media">
                          <i data-feather="lock"></i>
                          <div className="media-content">
                            <h3>Only me</h3>
                            <small>Only me can see this publication.</small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="button is-solid accent-button close-modal"
                >
                  Create album
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          id="videos-help-modal"
          className="modal videos-help-modal is-xsmall has-light-bg"
        >
          <div className="modal-background"></div>
          <div className="modal-content">
            <div className="card">
              <div className="card-heading">
                <h3>Add Photos</h3>

                <div className="close-wrap">
                  <span className="close-modal">
                    <i data-feather="x"></i>
                  </span>
                </div>
              </div>
              <div className="card-body">
                <div className="content-block is-active">
                  <img
                    src="assets/img/illustrations/cards/videotrip.svg"
                    alt=""
                  />
                  <div className="help-text">
                    <h3>Share live videos</h3>
                    <p>
                      Lorem ipsum sit dolor amet is a dummy text used by the
                      typography industry and the web industry.
                    </p>
                  </div>
                </div>

                <div className="content-block">
                  <img
                    src="assets/img/illustrations/cards/videocall.svg"
                    alt=""
                  />
                  <div className="help-text">
                    <h3>To build your audience</h3>
                    <p>
                      Lorem ipsum sit dolor amet is a dummy text used by the
                      typography industry and the web industry.
                    </p>
                  </div>
                </div>

                <div className="slide-dots">
                  <div className="dot is-active"></div>
                  <div className="dot"></div>
                </div>
                <div className="action">
                  <button
                    type="button"
                    className="button is-solid accent-button next-modal raised"
                    data-modal="videos-modal"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="videos-modal"
          className="modal videos-modal is-xxl has-light-bg"
        >
          <div className="modal-background"></div>
          <div className="modal-content">
            <div className="card">
              <div className="card-heading">
                <h3>Go live</h3>
                <div
                  id="stop-stream"
                  className="button is-solid accent-button is-hidden"
                >
                  <i className="mdi mdi-video-off"></i>
                  Stop stream
                </div>
                <div
                  id="start-stream"
                  className="button is-solid accent-button"
                >
                  <i className="mdi mdi-video"></i>
                  Start stream
                </div>

                <div className="close-wrap">
                  <span className="close-modal">
                    <i data-feather="x"></i>
                  </span>
                </div>
              </div>
              <div className="card-body">
                <div className="inner">
                  <div className="left-section">
                    <div className="video-wrapper">
                      <div className="video-wrap">
                        <div id="live-indicator" className="live is-vhidden">
                          Live
                        </div>
                        <video
                          id="video"
                          width="400"
                          height="240"
                          controls
                        ></video>
                      </div>
                    </div>
                  </div>
                  <div className="right-section">
                    <div className="header">
                      <img
                        src="../via.placeholder.com/300x300.png"
                        data-demo-src="assets/img/avatars/jenna.png"
                        alt=""
                      />
                      <div className="user-meta">
                        <span>
                          Jenna Davis <small>is live</small>
                        </span>
                        <span>
                          <small>right now</small>
                        </span>
                      </div>
                      <button type="button" className="button">
                        Follow
                      </button>
                      <div className="dropdown is-spaced is-right dropdown-trigger">
                        <div>
                          <div className="button">
                            <i data-feather="more-vertical"></i>
                          </div>
                        </div>
                        <div className="dropdown-menu" role="menu">
                          <div className="dropdown-content">
                            <div className="dropdown-item is-title">
                              Who can see this ?
                            </div>
                            <a href="#" className="dropdown-item">
                              <div className="media">
                                <i data-feather="globe"></i>
                                <div className="media-content">
                                  <h3>Public</h3>
                                  <small>
                                    Anyone can see this publication.
                                  </small>
                                </div>
                              </div>
                            </a>
                            <a className="dropdown-item">
                              <div className="media">
                                <i data-feather="users"></i>
                                <div className="media-content">
                                  <h3>Friends</h3>
                                  <small>
                                    only friends can see this publication.
                                  </small>
                                </div>
                              </div>
                            </a>
                            <a className="dropdown-item">
                              <div className="media">
                                <i data-feather="user"></i>
                                <div className="media-content">
                                  <h3>Specific friends</h3>
                                  <small>Don't show it to some friends.</small>
                                </div>
                              </div>
                            </a>
                            <hr className="dropdown-divider" />
                            <a className="dropdown-item">
                              <div className="media">
                                <i data-feather="lock"></i>
                                <div className="media-content">
                                  <h3>Only me</h3>
                                  <small>
                                    Only me can see this publication.
                                  </small>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="inner-content">
                      <div className="control">
                        <input
                          type="text"
                          className="input is-sm is-fade"
                          placeholder="What is this live about?"
                        />
                        <div className="icon">
                          <i data-feather="activity"></i>
                        </div>
                      </div>
                      <div className="live-stats">
                        <div className="social-count">
                          <div className="likes-count">
                            <i data-feather="heart"></i>
                            <span>0</span>
                          </div>
                          <div className="shares-count">
                            <i data-feather="link-2"></i>
                            <span>0</span>
                          </div>
                          <div className="comments-count">
                            <i data-feather="message-circle"></i>
                            <span>0</span>
                          </div>
                        </div>
                        <div className="social-count ml-auto">
                          <div className="views-count">
                            <i data-feather="eye"></i>
                            <span>0</span>
                            <span className="views">
                              <small>views</small>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="actions">
                        <div className="action">
                          <i data-feather="thumbs-up"></i>
                          <span>Like</span>
                        </div>
                        <div className="action">
                          <i data-feather="message-circle"></i>
                          <span>Comment</span>
                        </div>
                        <div className="action">
                          <i data-feather="link-2"></i>
                          <span>Share</span>
                        </div>
                        <div className="dropdown is-spaced is-right dropdown-trigger">
                          <div>
                            <div className="avatar-button">
                              <img
                                src="../via.placeholder.com/300x300.png"
                                data-demo-src="assets/img/avatars/jenna.png"
                                alt=""
                              />
                              <i data-feather="triangle"></i>
                            </div>
                          </div>
                          <div className="dropdown-menu has-margin" role="menu">
                            <div className="dropdown-content">
                              <a href="#" className="dropdown-item is-selected">
                                <div className="media">
                                  <img
                                    src="../via.placeholder.com/300x300.png"
                                    data-demo-src="assets/img/avatars/jenna.png"
                                    alt=""
                                  />
                                  <div className="media-content">
                                    <h3>Jenna Davis</h3>
                                    <small>Interact as Jenna Davis.</small>
                                  </div>
                                  <div className="checkmark">
                                    <i data-feather="check"></i>
                                  </div>
                                </div>
                              </a>
                              <hr className="dropdown-divider" />
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <img
                                    src="../via.placeholder.com/478x344.png"
                                    data-demo-src="assets/img/avatars/hanzo.svg"
                                    alt=""
                                  />
                                  <div className="media-content">
                                    <h3>Css Ninja</h3>
                                    <small>Interact as Css Ninja.</small>
                                  </div>
                                  <div className="checkmark">
                                    <i data-feather="check"></i>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tabs-wrapper">
                      <div className="tabs is-fullwidth">
                        <ul>
                          <li className="is-active">
                            <a>Comments</a>
                          </li>
                          <li>
                            <a>Upcoming</a>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-content has-slimscroll">
                        <div className="media is-comment">
                          <figure className="media-left">
                            <p className="image is-32x32">
                              <img
                                src="../via.placeholder.com/300x300.png"
                                data-demo-src="assets/img/avatars/dan.jpg"
                                alt=""
                                data-user-popover="1"
                              />
                            </p>
                          </figure>
                          <div className="media-content">
                            <div className="username">Dan Walker</div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Proin ornare magna eros.
                            </p>
                            <div className="comment-actions">
                              <a
                                href="javascript:void(0);"
                                className="is-inverted"
                              >
                                Like
                              </a>
                              <span>3h</span>
                            </div>
                          </div>
                        </div>

                        <div className="media is-comment">
                          <figure className="media-left">
                            <p className="image is-32x32">
                              <img
                                src="../via.placeholder.com/300x300.png"
                                data-demo-src="assets/img/avatars/david.jpg"
                                alt=""
                                data-user-popover="4"
                              />
                            </p>
                          </figure>
                          <div className="media-content">
                            <div className="username">David Kim</div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipiscing.
                            </p>
                            <div className="comment-actions">
                              <a
                                href="javascript:void(0);"
                                className="is-inverted"
                              >
                                Like
                              </a>
                              <span>4h</span>
                            </div>
                          </div>
                        </div>

                        <div className="media is-comment">
                          <figure className="media-left">
                            <p className="image is-32x32">
                              <img
                                src="../via.placeholder.com/300x300.png"
                                data-demo-src="assets/img/avatars/rolf.jpg"
                                alt=""
                                data-user-popover="17"
                              />
                            </p>
                          </figure>
                          <div className="media-content">
                            <div className="username">Rolf Krupp</div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Proin ornare magna eros. Consectetur
                              adipiscing elit. Proin ornare magna eros.
                            </p>
                            <div className="comment-actions">
                              <a
                                href="javascript:void(0);"
                                className="is-inverted"
                              >
                                Like
                              </a>
                              <span>4h</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="comment-controls">
                      <div className="controls-inner">
                        <img
                          src="../via.placeholder.com/300x300.png"
                          data-demo-src="assets/img/avatars/jenna.png"
                          alt=""
                        />
                        <div className="control">
                          <textarea
                            className="textarea comment-textarea is-rounded"
                            rows="1"
                          ></textarea>
                          <button className="emoji-button">
                            <i data-feather="smile"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="share-modal"
          className="modal share-modal is-xsmall has-light-bg"
        >
          <div className="modal-background"></div>
          <div className="modal-content">
            <div className="card">
              <div className="card-heading">
                <div className="dropdown is-primary share-dropdown">
                  <div>
                    <div className="button">
                      <i className="mdi mdi-format-float-left"></i>
                      <span>Share in your feed</span>
                      <i data-feather="chevron-down"></i>
                    </div>
                  </div>
                  <div className="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      <div className="dropdown-item" data-target-channel="feed">
                        <div className="media">
                          <i className="mdi mdi-format-float-left"></i>
                          <div className="media-content">
                            <h3>Share in your feed</h3>
                            <small>Share this publication on your feed.</small>
                          </div>
                        </div>
                      </div>
                      <div
                        className="dropdown-item"
                        data-target-channel="friend"
                      >
                        <div className="media">
                          <i className="mdi mdi-account-heart"></i>
                          <div className="media-content">
                            <h3>Share in a friend's feed</h3>
                            <small>
                              Share this publication on a friend's feed.
                            </small>
                          </div>
                        </div>
                      </div>
                      <div
                        className="dropdown-item"
                        data-target-channel="group"
                      >
                        <div className="media">
                          <i className="mdi mdi-account-group"></i>
                          <div className="media-content">
                            <h3>Share in a group</h3>
                            <small>Share this publication in a group.</small>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown-item" data-target-channel="page">
                        <div className="media">
                          <i className="mdi mdi-file-document-box"></i>
                          <div className="media-content">
                            <h3>Share in a page</h3>
                            <small>Share this publication in a page.</small>
                          </div>
                        </div>
                      </div>
                      <hr className="dropdown-divider" />
                      <div
                        className="dropdown-item"
                        data-target-channel="private-message"
                      >
                        <div className="media">
                          <i className="mdi mdi-email-plus"></i>
                          <div className="media-content">
                            <h3>Share in message</h3>
                            <small>
                              Share this publication in a private message.
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="close-wrap">
                  <span className="close-modal">
                    <i data-feather="x"></i>
                  </span>
                </div>
              </div>
              <div className="share-inputs">
                <div className="field is-autocomplete">
                  <div
                    id="share-to-friend"
                    className="control share-channel-control is-hidden"
                  >
                    <input
                      id="share-with-friend"
                      type="text"
                      className="input is-sm no-radius share-input simple-users-autocpl"
                      placeholder="Your friend's name"
                    />
                    <div className="input-heading">Friend :</div>
                  </div>
                </div>

                <div className="field is-autocomplete">
                  <div
                    id="share-to-group"
                    className="control share-channel-control is-hidden"
                  >
                    <input
                      id="share-with-group"
                      type="text"
                      className="input is-sm no-radius share-input simple-groups-autocpl"
                      placeholder="Your group's name"
                    />
                    <div className="input-heading">Group :</div>
                  </div>
                </div>

                <div
                  id="share-to-page"
                  className="control share-channel-control no-border is-hidden"
                >
                  <div className="page-controls">
                    <div className="page-selection">
                      <div className="dropdown is-accent page-dropdown">
                        <div>
                          <div className="button page-selector">
                            <img
                              src="../via.placeholder.com/150x150.png"
                              data-demo-src="assets/img/avatars/hanzo.svg"
                              alt=""
                            />
                            <span>Css Ninja</span>{" "}
                            <i data-feather="chevron-down"></i>
                          </div>
                        </div>
                        <div className="dropdown-menu" role="menu">
                          <div className="dropdown-content">
                            <div className="dropdown-item">
                              <div className="media">
                                <img
                                  src="../via.placeholder.com/150x150.png"
                                  data-demo-src="assets/img/avatars/hanzo.svg"
                                  alt=""
                                />
                                <div className="media-content">
                                  <h3>Css Ninja</h3>
                                  <small>Share on Css Ninja.</small>
                                </div>
                              </div>
                            </div>

                            <div className="dropdown-item">
                              <div className="media">
                                <img
                                  src="../via.placeholder.com/150x150.png"
                                  data-demo-src="assets/img/vector/icons/logos/nuclearjs.svg"
                                  alt=""
                                />
                                <div className="media-content">
                                  <h3>NuclearJs</h3>
                                  <small>Share on NuclearJs.</small>
                                </div>
                              </div>
                            </div>

                            <div className="dropdown-item">
                              <div className="media">
                                <img
                                  src="../via.placeholder.com/150x150.png"
                                  data-demo-src="assets/img/vector/icons/logos/slicer.svg"
                                  alt=""
                                />
                                <div className="media-content">
                                  <h3>Slicer</h3>
                                  <small>Share on Slicer.</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="alias">
                      <img
                        src="../via.placeholder.com/150x150.png"
                        data-demo-src="assets/img/avatars/jenna.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="field is-autocomplete">
                  <div
                    id="share-to-private-message"
                    className="control share-channel-control is-hidden"
                  >
                    <input
                      id="share-with-private-message"
                      type="text"
                      className="input is-sm no-radius share-input simple-users-autocpl"
                      placeholder="Message a friend"
                    />
                    <div className="input-heading">To :</div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="control">
                  <textarea
                    className="textarea comment-textarea"
                    rows="1"
                    placeholder="Say something about this ..."
                  ></textarea>
                  <button className="emoji-button">
                    <i data-feather="smile"></i>
                  </button>
                </div>
                <div className="shared-publication">
                  <div className="featured-image">
                    <img
                      id="share-modal-image"
                      src="../via.placeholder.com/1600x900.png"
                      data-demo-src="assets/img/demo/unsplash/1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="publication-meta">
                    <div className="inner-flex">
                      <img
                        id="share-modal-avatar"
                        src="../via.placeholder.com/300x300.png"
                        data-demo-src="assets/img/avatars/dan.jpg"
                        data-user-popover="1"
                        alt=""
                      />
                      <p id="share-modal-text">
                        Yesterday with <a href="#">@Karen Miller</a> and
                        <a href="#">@Marvin Stemperd</a> at the
                        <a href="#">#Rock'n'Rolla</a> concert in LA. Was totally
                        fantastic! People were really excited about this one!
                      </p>
                    </div>
                    <div className="publication-footer">
                      <div className="stats">
                        <div className="stat-block">
                          <i className="mdi mdi-earth"></i>
                          <small>Public</small>
                        </div>
                        <div className="stat-block">
                          <i className="mdi mdi-eye"></i>
                          <small>163 views</small>
                        </div>
                      </div>
                      <div className="publication-origin">
                        <small>Friendkit.io</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-share-inputs">
                <div
                  id="action-place"
                  className="field is-autocomplete is-dropup is-hidden"
                >
                  <div
                    id="share-place"
                    className="control share-bottom-channel-control"
                  >
                    <input
                      type="text"
                      className="input is-sm no-radius share-input simple-locations-autocpl"
                      placeholder="Where are you?"
                    />
                    <div className="input-heading">Location :</div>
                  </div>
                </div>

                <div
                  id="action-tag"
                  className="field is-autocomplete is-dropup is-hidden"
                >
                  <div
                    id="share-tags"
                    className="control share-bottom-channel-control"
                  >
                    <input
                      id="share-friend-tags-autocpl"
                      type="text"
                      className="input is-sm no-radius share-input"
                      placeholder="Who are you with"
                    />
                    <div className="input-heading">Friends :</div>
                  </div>
                  <div
                    id="share-modal-tag-list"
                    className="tag-list no-margin"
                  ></div>
                </div>
              </div>
              <div className="card-footer">
                <div className="action-wrap">
                  <div className="footer-action" data-target-action="tag">
                    <i className="mdi mdi-account-plus"></i>
                  </div>
                  <div className="footer-action" data-target-action="place">
                    <i className="mdi mdi-map-marker"></i>
                  </div>
                  <div
                    className="footer-action dropdown is-spaced is-neutral dropdown-trigger is-up"
                    data-target-action="permissions"
                  >
                    <div>
                      <i className="mdi mdi-lock-clock"></i>
                    </div>
                    <div className="dropdown-menu" role="menu">
                      <div className="dropdown-content">
                        <a href="#" className="dropdown-item">
                          <div className="media">
                            <i data-feather="globe"></i>
                            <div className="media-content">
                              <h3>Public</h3>
                              <small>Anyone can see this publication.</small>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item">
                          <div className="media">
                            <i data-feather="users"></i>
                            <div className="media-content">
                              <h3>Friends</h3>
                              <small>
                                only friends can see this publication.
                              </small>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item">
                          <div className="media">
                            <i data-feather="user"></i>
                            <div className="media-content">
                              <h3>Specific friends</h3>
                              <small>Don't show it to some friends.</small>
                            </div>
                          </div>
                        </a>
                        <hr className="dropdown-divider" />
                        <a className="dropdown-item">
                          <div className="media">
                            <i data-feather="lock"></i>
                            <div className="media-content">
                              <h3>Only me</h3>
                              <small>Only me can see this publication.</small>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button-wrap">
                  <button
                    type="button"
                    className="button is-solid dark-grey-button close-modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="button is-solid primary-button close-modal"
                  >
                    Publish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="no-stream-modal"
          className="modal no-stream-modal is-xsmall has-light-bg"
        >
          <div className="modal-background"></div>
          <div className="modal-content">
            <div className="card">
              <div className="card-heading">
                <h3></h3>

                <div className="close-wrap">
                  <span className="close-modal">
                    <i data-feather="x"></i>
                  </span>
                </div>
              </div>
              <div className="card-body has-text-centered">
                <div className="image-wrap">
                  <img
                    src="assets/img/illustrations/characters/no-stream.svg"
                    alt=""
                  />
                </div>

                <h3>Streaming Disabled</h3>
                <p>
                  Streaming is not allowed from mobile web. Please use our
                  mobile apps for mobile streaming.
                </p>

                <div className="action">
                  <a
                    href="index.html#demos-section"
                    className="button is-solid accent-button raised is-fullwidth"
                  >
                    Got It
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <script src="https://maps.google.com/maps/api/js?key=AIzaSyAGLO_M5VT7BsVdjMjciKoH1fFJWWdhDPU&amp;libraries=places"></script>
      </div>

      <div className="chat-wrapper">
        <div className="chat-inner">
          <div className="chat-nav">
            <div className="nav-start">
              <div className="recipient-block">
                <div className="avatar-container">
                  <img
                    className="user-avatar"
                    src="../via.placeholder.com/300x300.png"
                    data-demo-src="assets/img/avatars/dan.jpg"
                    alt=""
                  />
                </div>
                <div className="username">
                  <span>Dan Walker</span>
                  <span>
                    <i data-feather="star"></i> <span>| Online</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="nav-end">
              <div className="dropdown is-spaced is-neutral is-right dropdown-trigger">
                <div>
                  <a className="chat-nav-item is-icon">
                    <i data-feather="settings"></i>
                  </a>
                </div>
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
              </div>

              <div className="chat-search">
                <div className="control has-icon">
                  <input
                    type="text"
                    className="input"
                    placeholder="Search messages"
                  />
                  <div className="form-icon">
                    <i data-feather="search"></i>
                  </div>
                </div>
              </div>
              <a className="chat-nav-item is-icon is-hidden-mobile">
                <i data-feather="at-sign"></i>
              </a>
              <a className="chat-nav-item is-icon is-hidden-mobile">
                <i data-feather="star"></i>
              </a>

              <div className="dropdown is-spaced is-neutral is-right dropdown-trigger">
                <div>
                  <a className="chat-nav-item is-icon no-margin">
                    <i data-feather="more-vertical"></i>
                  </a>
                </div>
                <div className="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <a href="#" className="dropdown-item">
                      <div className="media">
                        <i data-feather="file-text"></i>
                        <div className="media-content">
                          <h3>Files</h3>
                          <small>View all your files.</small>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item">
                      <div className="media">
                        <i data-feather="users"></i>
                        <div className="media-content">
                          <h3>Users</h3>
                          <small>View all users you're talking to.</small>
                        </div>
                      </div>
                    </a>
                    <hr className="dropdown-divider" />
                    <a className="dropdown-item">
                      <div className="media">
                        <i data-feather="gift"></i>
                        <div className="media-content">
                          <h3>Daily bonus</h3>
                          <small>Get your daily bonus.</small>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item">
                      <div className="media">
                        <i data-feather="download-cloud"></i>
                        <div className="media-content">
                          <h3>Downloads</h3>
                          <small>See all your downloads.</small>
                        </div>
                      </div>
                    </a>
                    <hr className="dropdown-divider" />
                    <a className="dropdown-item">
                      <div className="media">
                        <i data-feather="life-buoy"></i>
                        <div className="media-content">
                          <h3>Support</h3>
                          <small>Reach our support team.</small>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <a className="chat-nav-item is-icon close-chat">
                <i data-feather="x"></i>
              </a>
            </div>
          </div>

          <div id="chat-sidebar" className="users-sidebar">
            <div className="header-item">
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
            </div>

            <div className="conversations-list has-slimscroll-xs">
              <div
                className="user-item is-active"
                data-chat-user="dan"
                data-full-name="Dan Walker"
                data-status="Online"
              >
                <div className="avatar-container">
                  <img
                    className="user-avatar"
                    src="../via.placeholder.com/300x300.png"
                    data-demo-src="assets/img/avatars/dan.jpg"
                    alt=""
                  />
                  <div className="user-status is-online"></div>
                </div>
              </div>

              <div
                className="user-item"
                data-chat-user="stella"
                data-full-name="Stella Bergmann"
                data-status="Busy"
              >
                <div className="avatar-container">
                  <img
                    className="user-avatar"
                    src="../via.placeholder.com/300x300.png"
                    data-demo-src="assets/img/avatars/stella.jpg"
                    alt=""
                  />
                  <div className="user-status is-busy"></div>
                </div>
              </div>

              <div
                className="user-item"
                data-chat-user="daniel"
                data-full-name="Daniel Wellington"
                data-status="Away"
              >
                <div className="avatar-container">
                  <img
                    className="user-avatar"
                    src="../via.placeholder.com/300x300.png"
                    data-demo-src="assets/img/avatars/daniel.jpg"
                    alt=""
                  />
                  <div className="user-status is-away"></div>
                </div>
              </div>

              <div
                className="user-item"
                data-chat-user="david"
                data-full-name="David Kim"
                data-status="Busy"
              >
                <div className="avatar-container">
                  <img
                    className="user-avatar"
                    src="../via.placeholder.com/300x300.png"
                    data-demo-src="assets/img/avatars/david.jpg"
                    alt=""
                  />
                  <div className="user-status is-busy"></div>
                </div>
              </div>

              <div
                className="user-item"
                data-chat-user="edward"
                data-full-name="Edward Mayers"
                data-status="Online"
              >
                <div className="avatar-container">
                  <img
                    className="user-avatar"
                    src="../via.placeholder.com/300x300.png"
                    data-demo-src="assets/img/avatars/edward.jpeg"
                    alt=""
                  />
                  <div className="user-status is-online"></div>
                </div>
              </div>

              <div
                className="user-item"
                data-chat-user="elise"
                data-full-name="Elise Walker"
                data-status="Away"
              >
                <div className="avatar-container">
                  <img
                    className="user-avatar"
                    src="../via.placeholder.com/300x300.png"
                    data-demo-src="assets/img/avatars/elise.jpg"
                    alt=""
                  />
                  <div className="user-status is-away"></div>
                </div>
              </div>

              <div
                className="user-item"
                data-chat-user="nelly"
                data-full-name="Nelly Schwartz"
                data-status="Busy"
              >
                <div className="avatar-container">
                  <img
                    className="user-avatar"
                    src="../via.placeholder.com/300x300.png"
                    data-demo-src="assets/img/avatars/nelly.png"
                    alt=""
                  />
                  <div className="user-status is-busy"></div>
                </div>
              </div>

              <div
                className="user-item"
                data-chat-user="milly"
                data-full-name="Milly Augustine"
                data-status="Busy"
              >
                <div className="avatar-container">
                  <img
                    className="user-avatar"
                    src="../via.placeholder.com/300x300.png"
                    data-demo-src="assets/img/avatars/milly.jpg"
                    alt=""
                  />
                  <div className="user-status is-busy"></div>
                </div>
              </div>
            </div>

            <div className="footer-item">
              <div
                className="add-button modal-trigger"
                data-modal="add-conversation-modal"
              >
                <i data-feather="user"></i>
              </div>
            </div>
          </div>

          <div id="chat-body" className="chat-body is-opened">
            <div
              id="dan-conversation"
              className="chat-body-inner has-slimscroll"
            >
              <div className="date-divider">
                <hr className="date-divider-line" />
                <span className="date-divider-text">Today</span>
              </div>

              <div className="chat-message is-received">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/dan.jpg"
                  alt=""
                />
                <div className="message-block">
                  <span>8:03am</span>
                  <div className="message-text">
                    Hi Jenna! I made a new design, and i wanted to show it to
                    you.
                  </div>
                </div>
              </div>

              <div className="chat-message is-received">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/dan.jpg"
                  alt=""
                />
                <div className="message-block">
                  <span>8:03am</span>
                  <div className="message-text">
                    It's quite clean and it's inspired from Bulkit.
                  </div>
                </div>
              </div>

              <div className="chat-message is-sent">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/jenna.png"
                  alt=""
                />
                <div className="message-block">
                  <span>8:12am</span>
                  <div className="message-text">
                    Oh really??! I want to see that.
                  </div>
                </div>
              </div>

              <div className="chat-message is-received">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/dan.jpg"
                  alt=""
                />
                <div className="message-block">
                  <span>8:13am</span>
                  <div className="message-text">
                    FYI it was done in less than a day.
                  </div>
                </div>
              </div>

              <div className="chat-message is-sent">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/jenna.png"
                  alt=""
                />
                <div className="message-block">
                  <span>8:17am</span>
                  <div className="message-text">
                    Great to hear it. Just send me the PSD files so i can have a
                    look at it.
                  </div>
                </div>
              </div>

              <div className="chat-message is-sent">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/jenna.png"
                  alt=""
                />
                <div className="message-block">
                  <span>8:18am</span>
                  <div className="message-text">
                    And if you have a prototype, you can also send me the link
                    to it.
                  </div>
                </div>
              </div>
            </div>

            <div
              id="stella-conversation"
              className="chat-body-inner has-slimscroll is-hidden"
            >
              <div className="date-divider">
                <hr className="date-divider-line" />
                <span className="date-divider-text">Today</span>
              </div>

              <div className="chat-message is-sent">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/jenna.png"
                  alt=""
                />
                <div className="message-block">
                  <span>10:34am</span>
                  <div className="message-text">
                    Hey Stella! Aren't we supposed to go the theatre after
                    work?.
                  </div>
                </div>
              </div>

              <div className="chat-message is-sent">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/jenna.png"
                  alt=""
                />
                <div className="message-block">
                  <span>10:37am</span>
                  <div className="message-text">Just remembered it.</div>
                </div>
              </div>

              <div className="chat-message is-received">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/stella.jpg"
                  alt=""
                />
                <div className="message-block">
                  <span>11:22am</span>
                  <div className="message-text">
                    Yeah you always do that, forget about everything.
                  </div>
                </div>
              </div>
            </div>

            <div
              id="daniel-conversation"
              className="chat-body-inner has-slimscroll is-hidden"
            >
              <div className="date-divider">
                <hr className="date-divider-line" />
                <span className="date-divider-text">Yesterday</span>
              </div>

              <div className="chat-message is-sent">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/jenna.png"
                  alt=""
                />
                <div className="message-block">
                  <span>3:24pm</span>
                  <div className="message-text">
                    Daniel, Amanda told me about your issue, how can I help?
                  </div>
                </div>
              </div>

              <div className="chat-message is-received">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/daniel.jpg"
                  alt=""
                />
                <div className="message-block">
                  <span>3:42pm</span>
                  <div className="message-text">
                    Hey Jenna, thanks for answering so quickly. Iam stuck, i
                    need a car.
                  </div>
                </div>
              </div>

              <div className="chat-message is-received">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/daniel.jpg"
                  alt=""
                />
                <div className="message-block">
                  <span>3:43pm</span>
                  <div className="message-text">
                    Can i borrow your car for a quick ride to San Fransisco? Iam
                    running behind and there' no train in sight.
                  </div>
                </div>
              </div>
            </div>

            <div
              id="david-conversation"
              className="chat-body-inner has-slimscroll is-hidden"
            >
              <div className="date-divider">
                <hr className="date-divider-line" />
                <span className="date-divider-text">Today</span>
              </div>

              <div className="chat-message is-sent">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/jenna.png"
                  alt=""
                />
                <div className="message-block">
                  <span>12:34pm</span>
                  <div className="message-text">
                    Damn you! Why would you even implement this in the game?.
                  </div>
                </div>
              </div>

              <div className="chat-message is-sent">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/jenna.png"
                  alt=""
                />
                <div className="message-block">
                  <span>12:32pm</span>
                  <div className="message-text">I just HATE aliens.</div>
                </div>
              </div>

              <div className="chat-message is-received">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/david.jpg"
                  alt=""
                />
                <div className="message-block">
                  <span>13:09pm</span>
                  <div className="message-text">
                    C'mon, you just gotta learn the tricks. You can't expect
                    aliens to behave like humans. I mean that's how the
                    mechanics are.
                  </div>
                </div>
              </div>
              <div className="chat-message is-received">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/david.jpg"
                  alt=""
                />
                <div className="message-block">
                  <span>13:11pm</span>
                  <div className="message-text">
                    I checked the replay and for example, you always get supply
                    blocked. That's not the right thing to do.
                  </div>
                </div>
              </div>
              <div className="chat-message is-sent">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/jenna.png"
                  alt=""
                />
                <div className="message-block">
                  <span>13:12pm</span>
                  <div className="message-text">
                    I know but i struggle when i have to decide what to make
                    from larvas.
                  </div>
                </div>
              </div>
              <div className="chat-message is-received">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/david.jpg"
                  alt=""
                />
                <div className="message-block">
                  <span>13:17pm</span>
                  <div className="message-text">
                    Join me in game, i'll show you.
                  </div>
                </div>
              </div>
            </div>

            <div
              id="edward-conversation"
              className="chat-body-inner has-slimscroll"
            >
              <div className="date-divider">
                <hr className="date-divider-line" />
                <span className="date-divider-text">Monday</span>
              </div>

              <div className="chat-message is-received">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/edward.jpeg"
                  alt=""
                />
                <div className="message-block">
                  <span>4:55pm</span>
                  <div className="message-text">Hey Jenna, what's up?</div>
                </div>
              </div>

              <div className="chat-message is-received">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/edward.jpeg"
                  alt=""
                />
                <div className="message-block">
                  <span>4:56pm</span>
                  <div className="message-text">
                    Iam coming to LA tomorrow. Interested in having lunch?
                  </div>
                </div>
              </div>

              <div className="chat-message is-sent">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/jenna.png"
                  alt=""
                />
                <div className="message-block">
                  <span>5:21pm</span>
                  <div className="message-text">
                    Hey mate, it's been a while. Sure I would love to.
                  </div>
                </div>
              </div>

              <div className="chat-message is-received">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/edward.jpeg"
                  alt=""
                />
                <div className="message-block">
                  <span>5:27pm</span>
                  <div className="message-text">
                    Ok. Let's say i pick you up at 12:30 at work, works?
                  </div>
                </div>
              </div>

              <div className="chat-message is-sent">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/jenna.png"
                  alt=""
                />
                <div className="message-block">
                  <span>5:43pm</span>
                  <div className="message-text">Yup, that works great.</div>
                </div>
              </div>

              <div className="chat-message is-sent">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/jenna.png"
                  alt=""
                />
                <div className="message-block">
                  <span>5:44pm</span>
                  <div className="message-text">
                    And yeah, don't forget to bring some of my favourite cheese
                    cake.
                  </div>
                </div>
              </div>

              <div className="chat-message is-received">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/edward.jpeg"
                  alt=""
                />
                <div className="message-block">
                  <span>5:27pm</span>
                  <div className="message-text">No worries</div>
                </div>
              </div>
            </div>

            <div
              id="elise-conversation"
              className="chat-body-inner has-slimscroll is-hidden"
            >
              <div className="date-divider">
                <hr className="date-divider-line" />
                <span className="date-divider-text">September 28</span>
              </div>

              <div className="chat-message is-sent">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/jenna.png"
                  alt=""
                />
                <div className="message-block">
                  <span>11:53am</span>
                  <div className="message-text">
                    Elise, i forgot my folder at your place yesterday.
                  </div>
                </div>
              </div>

              <div className="chat-message is-sent">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/jenna.png"
                  alt=""
                />
                <div className="message-block">
                  <span>11:53am</span>
                  <div className="message-text">
                    I need it badly, it's work stuff.
                  </div>
                </div>
              </div>

              <div className="chat-message is-received">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/elise.jpg"
                  alt=""
                />
                <div className="message-block">
                  <span>12:19pm</span>
                  <div className="message-text">
                    Yeah i noticed. I'll drop it in half an hour at your office.
                  </div>
                </div>
              </div>
            </div>

            <div
              id="nelly-conversation"
              className="chat-body-inner has-slimscroll is-hidden"
            >
              <div className="date-divider">
                <hr className="date-divider-line" />
                <span className="date-divider-text">September 17</span>
              </div>

              <div className="chat-message is-sent">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/jenna.png"
                  alt=""
                />
                <div className="message-block">
                  <span>8:22pm</span>
                  <div className="message-text">So you watched the movie?</div>
                </div>
              </div>

              <div className="chat-message is-sent">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/jenna.png"
                  alt=""
                />
                <div className="message-block">
                  <span>8:22pm</span>
                  <div className="message-text">Was it scary?</div>
                </div>
              </div>

              <div className="chat-message is-received">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/nelly.png"
                  alt=""
                />
                <div className="message-block">
                  <span>9:03pm</span>
                  <div className="message-text">
                    It was so frightening, i felt my heart was about to blow
                    inside my chest.
                  </div>
                </div>
              </div>
            </div>

            <div
              id="milly-conversation"
              className="chat-body-inner has-slimscroll"
            >
              <div className="date-divider">
                <hr className="date-divider-line" />
                <span className="date-divider-text">Today</span>
              </div>

              <div className="chat-message is-received">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/milly.jpg"
                  alt=""
                />
                <div className="message-block">
                  <span>2:01pm</span>
                  <div className="message-text">
                    Hello Jenna, did you read my proposal?
                  </div>
                </div>
              </div>

              <div className="chat-message is-received">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/milly.jpg"
                  alt=""
                />
                <div className="message-block">
                  <span>2:01pm</span>
                  <div className="message-text">
                    Didn't hear from you since i sent it.
                  </div>
                </div>
              </div>

              <div className="chat-message is-sent">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/jenna.png"
                  alt=""
                />
                <div className="message-block">
                  <span>2:02pm</span>
                  <div className="message-text">
                    Hello Milly, Iam really sorry, Iam so busy recently, but i
                    had the time to read it.
                  </div>
                </div>
              </div>

              <div className="chat-message is-received">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/milly.jpg"
                  alt=""
                />
                <div className="message-block">
                  <span>2:04pm</span>
                  <div className="message-text">
                    And what did you think about it?
                  </div>
                </div>
              </div>

              <div className="chat-message is-sent">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/jenna.png"
                  alt=""
                />
                <div className="message-block">
                  <span>2:05pm</span>
                  <div className="message-text">
                    Actually it's quite good, there might be some small changes
                    but overall it's great.
                  </div>
                </div>
              </div>

              <div className="chat-message is-sent">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/jenna.png"
                  alt=""
                />
                <div className="message-block">
                  <span>2:07pm</span>
                  <div className="message-text">
                    I think that i can give it to my boss at this stage.
                  </div>
                </div>
              </div>

              <div className="chat-message is-received">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="assets/img/avatars/milly.jpg"
                  alt=""
                />
                <div className="message-block">
                  <span>2:09pm</span>
                  <div className="message-text">Crossing fingers then</div>
                </div>
              </div>
            </div>

            <div className="chat-action">
              <div className="chat-action-inner">
                <div className="control">
                  <textarea
                    className="textarea comment-textarea"
                    rows="1"
                  ></textarea>
                  <div className="dropdown compose-dropdown is-spaced is-accent is-up dropdown-trigger">
                    <div>
                      <div className="add-button">
                        <div className="button-inner">
                          <i data-feather="plus"></i>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-menu" role="menu">
                      <div className="dropdown-content">
                        <a href="#" className="dropdown-item">
                          <div className="media">
                            <i data-feather="code"></i>
                            <div className="media-content">
                              <h3>Code snippet</h3>
                              <small>Add and paste a code snippet.</small>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item">
                          <div className="media">
                            <i data-feather="file-text"></i>
                            <div className="media-content">
                              <h3>Note</h3>
                              <small>Add and paste a note.</small>
                            </div>
                          </div>
                        </a>
                        <hr className="dropdown-divider" />
                        <a className="dropdown-item">
                          <div className="media">
                            <i data-feather="server"></i>
                            <div className="media-content">
                              <h3>Remote file</h3>
                              <small>Add a file from a remote drive.</small>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item">
                          <div className="media">
                            <i data-feather="monitor"></i>
                            <div className="media-content">
                              <h3>Local file</h3>
                              <small>Add a file from your computer.</small>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="chat-panel" className="chat-panel is-opened">
            <div className="panel-inner">
              <div className="panel-header">
                <h3>Details</h3>
                <div className="panel-close">
                  <i data-feather="x"></i>
                </div>
              </div>

              <div id="dan-details" className="panel-body is-user-details">
                <div className="panel-body-inner">
                  <div className="subheader">
                    <div className="action-icon">
                      <i className="mdi mdi-video"></i>
                    </div>
                    <div className="action-icon">
                      <i className="mdi mdi-camera"></i>
                    </div>
                    <div className="action-icon">
                      <i className="mdi mdi-microphone"></i>
                    </div>
                    <div className="dropdown details-dropdown is-spaced is-neutral is-right dropdown-trigger ml-auto">
                      <div>
                        <div className="action-icon">
                          <i className="mdi mdi-dots-vertical"></i>
                        </div>
                      </div>
                      <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <i data-feather="user"></i>
                              <div className="media-content">
                                <h3>View profile</h3>
                                <small>View this user's profile.</small>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="mail"></i>
                              <div className="media-content">
                                <h3>Send message</h3>
                                <small>
                                  Send a message to the user's inbox.
                                </small>
                              </div>
                            </div>
                          </a>
                          <hr className="dropdown-divider" />
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="share-2"></i>
                              <div className="media-content">
                                <h3>Share profile</h3>
                                <small>Share this user's profile.</small>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="x"></i>
                              <div className="media-content">
                                <h3>Block user</h3>
                                <small>Block this user permanently.</small>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="details-avatar">
                    <img
                      src="../via.placeholder.com/300x300.png"
                      data-demo-src="assets/img/avatars/dan.jpg"
                      alt=""
                    />
                    <div className="call-me">
                      <i className="mdi mdi-phone"></i>
                    </div>
                  </div>

                  <div className="user-meta has-text-centered">
                    <h3>Dan Walker</h3>
                    <h4>IOS Developer</h4>
                  </div>

                  <div className="user-badges">
                    <div className="hexagon is-red">
                      <div>
                        <i className="mdi mdi-heart"></i>
                      </div>
                    </div>
                    <div className="hexagon is-green">
                      <div>
                        <i className="mdi mdi-dog"></i>
                      </div>
                    </div>
                    <div className="hexagon is-accent">
                      <div>
                        <i className="mdi mdi-flash"></i>
                      </div>
                    </div>
                    <div className="hexagon is-blue">
                      <div>
                        <i className="mdi mdi-briefcase"></i>
                      </div>
                    </div>
                  </div>

                  <div className="user-about">
                    <label>About Me</label>
                    <div className="about-block">
                      <i className="mdi mdi-domain"></i>
                      <div className="about-text">
                        <span>Works at</span>
                        <span>
                          <a className="is-inverted" href="#">
                            WebSmash Inc.
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="about-block">
                      <i className="mdi mdi-school"></i>
                      <div className="about-text">
                        <span>Studied at</span>
                        <span>
                          <a className="is-inverted" href="#">
                            Riverdale University
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="stella-details"
                className="panel-body is-user-details is-hidden"
              >
                <div className="panel-body-inner">
                  <div className="subheader">
                    <div className="action-icon">
                      <i className="mdi mdi-video"></i>
                    </div>
                    <div className="action-icon">
                      <i className="mdi mdi-camera"></i>
                    </div>
                    <div className="action-icon">
                      <i className="mdi mdi-microphone"></i>
                    </div>
                    <div className="dropdown details-dropdown is-spaced is-neutral is-right dropdown-trigger ml-auto">
                      <div>
                        <div className="action-icon">
                          <i className="mdi mdi-dots-vertical"></i>
                        </div>
                      </div>
                      <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <i data-feather="user"></i>
                              <div className="media-content">
                                <h3>View profile</h3>
                                <small>View this user's profile.</small>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="mail"></i>
                              <div className="media-content">
                                <h3>Send message</h3>
                                <small>
                                  Send a message to the user's inbox.
                                </small>
                              </div>
                            </div>
                          </a>
                          <hr className="dropdown-divider" />
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="share-2"></i>
                              <div className="media-content">
                                <h3>Share profile</h3>
                                <small>Share this user's profile.</small>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="x"></i>
                              <div className="media-content">
                                <h3>Block user</h3>
                                <small>Block this user permanently.</small>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="details-avatar">
                    <img
                      src="../via.placeholder.com/300x300.png"
                      data-demo-src="assets/img/avatars/stella.jpg"
                      alt=""
                    />
                    <div className="call-me">
                      <i className="mdi mdi-phone"></i>
                    </div>
                  </div>

                  <div className="user-meta has-text-centered">
                    <h3>Stella Bergmann</h3>
                    <h4>Shop Owner</h4>
                  </div>

                  <div className="user-badges">
                    <div className="hexagon is-purple">
                      <div>
                        <i className="mdi mdi-bomb"></i>
                      </div>
                    </div>
                    <div className="hexagon is-red">
                      <div>
                        <i className="mdi mdi-check-decagram"></i>
                      </div>
                    </div>
                    <div className="hexagon is-accent">
                      <div>
                        <i className="mdi mdi-flash"></i>
                      </div>
                    </div>
                  </div>

                  <div className="user-about">
                    <label>About Me</label>
                    <div className="about-block">
                      <i className="mdi mdi-domain"></i>
                      <div className="about-text">
                        <span>Works at</span>
                        <span>
                          <a className="is-inverted" href="#">
                            Trending Fashions
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="about-block">
                      <i className="mdi mdi-map-marker"></i>
                      <div className="about-text">
                        <span>From</span>
                        <span>
                          <a className="is-inverted" href="#">
                            Oklahoma City
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="daniel-details"
                className="panel-body is-user-details is-hidden"
              >
                <div className="panel-body-inner">
                  <div className="subheader">
                    <div className="action-icon">
                      <i className="mdi mdi-video"></i>
                    </div>
                    <div className="action-icon">
                      <i className="mdi mdi-camera"></i>
                    </div>
                    <div className="action-icon">
                      <i className="mdi mdi-microphone"></i>
                    </div>
                    <div className="dropdown details-dropdown is-spaced is-neutral is-right dropdown-trigger ml-auto">
                      <div>
                        <div className="action-icon">
                          <i className="mdi mdi-dots-vertical"></i>
                        </div>
                      </div>
                      <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <i data-feather="user"></i>
                              <div className="media-content">
                                <h3>View profile</h3>
                                <small>View this user's profile.</small>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="mail"></i>
                              <div className="media-content">
                                <h3>Send message</h3>
                                <small>
                                  Send a message to the user's inbox.
                                </small>
                              </div>
                            </div>
                          </a>
                          <hr className="dropdown-divider" />
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="share-2"></i>
                              <div className="media-content">
                                <h3>Share profile</h3>
                                <small>Share this user's profile.</small>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="x"></i>
                              <div className="media-content">
                                <h3>Block user</h3>
                                <small>Block this user permanently.</small>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="details-avatar">
                    <img
                      src="../via.placeholder.com/300x300.png"
                      data-demo-src="assets/img/avatars/daniel.jpg"
                      alt=""
                    />
                    <div className="call-me">
                      <i className="mdi mdi-phone"></i>
                    </div>
                  </div>

                  <div className="user-meta has-text-centered">
                    <h3>Daniel Wellington</h3>
                    <h4>Senior Executive</h4>
                  </div>

                  <div className="user-badges">
                    <div className="hexagon is-accent">
                      <div>
                        <i className="mdi mdi-google-cardboard"></i>
                      </div>
                    </div>
                    <div className="hexagon is-blue">
                      <div>
                        <i className="mdi mdi-pizza"></i>
                      </div>
                    </div>
                    <div className="hexagon is-accent">
                      <div>
                        <i className="mdi mdi-linux"></i>
                      </div>
                    </div>
                    <div className="hexagon is-red">
                      <div>
                        <i className="mdi mdi-puzzle"></i>
                      </div>
                    </div>
                  </div>

                  <div className="user-about">
                    <label>About Me</label>
                    <div className="about-block">
                      <i className="mdi mdi-domain"></i>
                      <div className="about-text">
                        <span>Works at</span>
                        <span>
                          <a className="is-inverted" href="#">
                            Peelman & Sons
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="about-block">
                      <i className="mdi mdi-map-marker"></i>
                      <div className="about-text">
                        <span>From</span>
                        <span>
                          <a className="is-inverted" href="#">
                            Los Angeles
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="david-details"
                className="panel-body is-user-details is-hidden"
              >
                <div className="panel-body-inner">
                  <div className="subheader">
                    <div className="action-icon">
                      <i className="mdi mdi-video"></i>
                    </div>
                    <div className="action-icon">
                      <i className="mdi mdi-camera"></i>
                    </div>
                    <div className="action-icon">
                      <i className="mdi mdi-microphone"></i>
                    </div>
                    <div className="dropdown details-dropdown is-spaced is-neutral is-right dropdown-trigger ml-auto">
                      <div>
                        <div className="action-icon">
                          <i className="mdi mdi-dots-vertical"></i>
                        </div>
                      </div>
                      <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <i data-feather="user"></i>
                              <div className="media-content">
                                <h3>View profile</h3>
                                <small>View this user's profile.</small>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="mail"></i>
                              <div className="media-content">
                                <h3>Send message</h3>
                                <small>
                                  Send a message to the user's inbox.
                                </small>
                              </div>
                            </div>
                          </a>
                          <hr className="dropdown-divider" />
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="share-2"></i>
                              <div className="media-content">
                                <h3>Share profile</h3>
                                <small>Share this user's profile.</small>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="x"></i>
                              <div className="media-content">
                                <h3>Block user</h3>
                                <small>Block this user permanently.</small>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="details-avatar">
                    <img
                      src="../via.placeholder.com/300x300.png"
                      data-demo-src="assets/img/avatars/david.jpg"
                      alt=""
                    />
                    <div className="call-me">
                      <i className="mdi mdi-phone"></i>
                    </div>
                  </div>

                  <div className="user-meta has-text-centered">
                    <h3>David Kim</h3>
                    <h4>Senior Developer</h4>
                  </div>

                  <div className="user-badges">
                    <div className="hexagon is-red">
                      <div>
                        <i className="mdi mdi-heart"></i>
                      </div>
                    </div>
                    <div className="hexagon is-green">
                      <div>
                        <i className="mdi mdi-dog"></i>
                      </div>
                    </div>
                    <div className="hexagon is-accent">
                      <div>
                        <i className="mdi mdi-flash"></i>
                      </div>
                    </div>
                    <div className="hexagon is-blue">
                      <div>
                        <i className="mdi mdi-briefcase"></i>
                      </div>
                    </div>
                  </div>

                  <div className="user-about">
                    <label>About Me</label>
                    <div className="about-block">
                      <i className="mdi mdi-domain"></i>
                      <div className="about-text">
                        <span>Works at</span>
                        <span>
                          <a className="is-inverted" href="#">
                            Frost Entertainment
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="about-block">
                      <i className="mdi mdi-map-marker"></i>
                      <div className="about-text">
                        <span>From</span>
                        <span>
                          <a className="is-inverted" href="#">
                            Chicago
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="edward-details"
                className="panel-body is-user-details is-hidden"
              >
                <div className="panel-body-inner">
                  <div className="subheader">
                    <div className="action-icon">
                      <i className="mdi mdi-video"></i>
                    </div>
                    <div className="action-icon">
                      <i className="mdi mdi-camera"></i>
                    </div>
                    <div className="action-icon">
                      <i className="mdi mdi-microphone"></i>
                    </div>
                    <div className="dropdown details-dropdown is-spaced is-neutral is-right dropdown-trigger ml-auto">
                      <div>
                        <div className="action-icon">
                          <i className="mdi mdi-dots-vertical"></i>
                        </div>
                      </div>
                      <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <i data-feather="user"></i>
                              <div className="media-content">
                                <h3>View profile</h3>
                                <small>View this user's profile.</small>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="mail"></i>
                              <div className="media-content">
                                <h3>Send message</h3>
                                <small>
                                  Send a message to the user's inbox.
                                </small>
                              </div>
                            </div>
                          </a>
                          <hr className="dropdown-divider" />
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="share-2"></i>
                              <div className="media-content">
                                <h3>Share profile</h3>
                                <small>Share this user's profile.</small>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="x"></i>
                              <div className="media-content">
                                <h3>Block user</h3>
                                <small>Block this user permanently.</small>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="details-avatar">
                    <img
                      src="../via.placeholder.com/300x300.png"
                      data-demo-src="assets/img/avatars/edward.jpeg"
                      alt=""
                    />
                    <div className="call-me">
                      <i className="mdi mdi-phone"></i>
                    </div>
                  </div>

                  <div className="user-meta has-text-centered">
                    <h3>Edward Mayers</h3>
                    <h4>Financial analyst</h4>
                  </div>

                  <div className="user-badges">
                    <div className="hexagon is-red">
                      <div>
                        <i className="mdi mdi-heart"></i>
                      </div>
                    </div>
                    <div className="hexagon is-green">
                      <div>
                        <i className="mdi mdi-dog"></i>
                      </div>
                    </div>
                    <div className="hexagon is-accent">
                      <div>
                        <i className="mdi mdi-flash"></i>
                      </div>
                    </div>
                  </div>

                  <div className="user-about">
                    <label>About Me</label>
                    <div className="about-block">
                      <i className="mdi mdi-domain"></i>
                      <div className="about-text">
                        <span>Works at</span>
                        <span>
                          <a className="is-inverted" href="#">
                            Brettmann Bank
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="about-block">
                      <i className="mdi mdi-map-marker"></i>
                      <div className="about-text">
                        <span>From</span>
                        <span>
                          <a className="is-inverted" href="#">
                            Santa Fe
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="elise-details"
                className="panel-body is-user-details is-hidden"
              >
                <div className="panel-body-inner">
                  <div className="subheader">
                    <div className="action-icon">
                      <i className="mdi mdi-video"></i>
                    </div>
                    <div className="action-icon">
                      <i className="mdi mdi-camera"></i>
                    </div>
                    <div className="action-icon">
                      <i className="mdi mdi-microphone"></i>
                    </div>
                    <div className="dropdown details-dropdown is-spaced is-neutral is-right dropdown-trigger ml-auto">
                      <div>
                        <div className="action-icon">
                          <i className="mdi mdi-dots-vertical"></i>
                        </div>
                      </div>
                      <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <i data-feather="user"></i>
                              <div className="media-content">
                                <h3>View profile</h3>
                                <small>View this user's profile.</small>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="mail"></i>
                              <div className="media-content">
                                <h3>Send message</h3>
                                <small>
                                  Send a message to the user's inbox.
                                </small>
                              </div>
                            </div>
                          </a>
                          <hr className="dropdown-divider" />
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="share-2"></i>
                              <div className="media-content">
                                <h3>Share profile</h3>
                                <small>Share this user's profile.</small>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="x"></i>
                              <div className="media-content">
                                <h3>Block user</h3>
                                <small>Block this user permanently.</small>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="details-avatar">
                    <img
                      src="../via.placeholder.com/300x300.png"
                      data-demo-src="assets/img/avatars/elise.jpg"
                      alt=""
                    />
                    <div className="call-me">
                      <i className="mdi mdi-phone"></i>
                    </div>
                  </div>

                  <div className="user-meta has-text-centered">
                    <h3>Elise Walker</h3>
                    <h4>Social influencer</h4>
                  </div>

                  <div className="user-badges">
                    <div className="hexagon is-red">
                      <div>
                        <i className="mdi mdi-heart"></i>
                      </div>
                    </div>
                    <div className="hexagon is-accent">
                      <div>
                        <i className="mdi mdi-flash"></i>
                      </div>
                    </div>
                  </div>

                  <div className="user-about">
                    <label>About Me</label>
                    <div className="about-block">
                      <i className="mdi mdi-domain"></i>
                      <div className="about-text">
                        <span>Works at</span>
                        <span>
                          <a className="is-inverted" href="#">
                            Social Media
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="about-block">
                      <i className="mdi mdi-map-marker"></i>
                      <div className="about-text">
                        <span>From</span>
                        <span>
                          <a className="is-inverted" href="#">
                            London
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="nelly-details"
                className="panel-body is-user-details is-hidden"
              >
                <div className="panel-body-inner">
                  <div className="subheader">
                    <div className="action-icon">
                      <i className="mdi mdi-video"></i>
                    </div>
                    <div className="action-icon">
                      <i className="mdi mdi-camera"></i>
                    </div>
                    <div className="action-icon">
                      <i className="mdi mdi-microphone"></i>
                    </div>
                    <div className="dropdown details-dropdown is-spaced is-neutral is-right dropdown-trigger ml-auto">
                      <div>
                        <div className="action-icon">
                          <i className="mdi mdi-dots-vertical"></i>
                        </div>
                      </div>
                      <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <i data-feather="user"></i>
                              <div className="media-content">
                                <h3>View profile</h3>
                                <small>View this user's profile.</small>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="mail"></i>
                              <div className="media-content">
                                <h3>Send message</h3>
                                <small>
                                  Send a message to the user's inbox.
                                </small>
                              </div>
                            </div>
                          </a>
                          <hr className="dropdown-divider" />
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="share-2"></i>
                              <div className="media-content">
                                <h3>Share profile</h3>
                                <small>Share this user's profile.</small>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="x"></i>
                              <div className="media-content">
                                <h3>Block user</h3>
                                <small>Block this user permanently.</small>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="details-avatar">
                    <img
                      src="../via.placeholder.com/300x300.png"
                      data-demo-src="assets/img/avatars/nelly.png"
                      alt=""
                    />
                    <div className="call-me">
                      <i className="mdi mdi-phone"></i>
                    </div>
                  </div>

                  <div className="user-meta has-text-centered">
                    <h3>Nelly Schwartz</h3>
                    <h4>HR Manager</h4>
                  </div>

                  <div className="user-badges">
                    <div className="hexagon is-red">
                      <div>
                        <i className="mdi mdi-heart"></i>
                      </div>
                    </div>
                    <div className="hexagon is-green">
                      <div>
                        <i className="mdi mdi-dog"></i>
                      </div>
                    </div>
                    <div className="hexagon is-accent">
                      <div>
                        <i className="mdi mdi-flash"></i>
                      </div>
                    </div>
                    <div className="hexagon is-blue">
                      <div>
                        <i className="mdi mdi-briefcase"></i>
                      </div>
                    </div>
                  </div>

                  <div className="user-about">
                    <label>About Me</label>
                    <div className="about-block">
                      <i className="mdi mdi-domain"></i>
                      <div className="about-text">
                        <span>Works at</span>
                        <span>
                          <a className="is-inverted" href="#">
                            Carrefour
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="about-block">
                      <i className="mdi mdi-map-marker"></i>
                      <div className="about-text">
                        <span>From</span>
                        <span>
                          <a className="is-inverted" href="#">
                            Melbourne
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="milly-details"
                className="panel-body is-user-details is-hidden"
              >
                <div className="panel-body-inner">
                  <div className="subheader">
                    <div className="action-icon">
                      <i className="mdi mdi-video"></i>
                    </div>
                    <div className="action-icon">
                      <i className="mdi mdi-camera"></i>
                    </div>
                    <div className="action-icon">
                      <i className="mdi mdi-microphone"></i>
                    </div>
                    <div className="dropdown details-dropdown is-spaced is-neutral is-right dropdown-trigger ml-auto">
                      <div>
                        <div className="action-icon">
                          <i className="mdi mdi-dots-vertical"></i>
                        </div>
                      </div>
                      <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <i data-feather="user"></i>
                              <div className="media-content">
                                <h3>View profile</h3>
                                <small>View this user's profile.</small>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="mail"></i>
                              <div className="media-content">
                                <h3>Send message</h3>
                                <small>
                                  Send a message to the user's inbox.
                                </small>
                              </div>
                            </div>
                          </a>
                          <hr className="dropdown-divider" />
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="share-2"></i>
                              <div className="media-content">
                                <h3>Share profile</h3>
                                <small>Share this user's profile.</small>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item">
                            <div className="media">
                              <i data-feather="x"></i>
                              <div className="media-content">
                                <h3>Block user</h3>
                                <small>Block this user permanently.</small>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="details-avatar">
                    <img
                      src="../via.placeholder.com/300x300.png"
                      data-demo-src="assets/img/avatars/milly.jpg"
                      alt=""
                    />
                    <div className="call-me">
                      <i className="mdi mdi-phone"></i>
                    </div>
                  </div>

                  <div className="user-meta has-text-centered">
                    <h3>Milly Augustine</h3>
                    <h4>Sales Manager</h4>
                  </div>

                  <div className="user-badges">
                    <div className="hexagon is-red">
                      <div>
                        <i className="mdi mdi-heart"></i>
                      </div>
                    </div>
                    <div className="hexagon is-green">
                      <div>
                        <i className="mdi mdi-dog"></i>
                      </div>
                    </div>
                    <div className="hexagon is-accent">
                      <div>
                        <i className="mdi mdi-flash"></i>
                      </div>
                    </div>
                    <div className="hexagon is-blue">
                      <div>
                        <i className="mdi mdi-briefcase"></i>
                      </div>
                    </div>
                  </div>

                  <div className="user-about">
                    <label>About Me</label>
                    <div className="about-block">
                      <i className="mdi mdi-domain"></i>
                      <div className="about-text">
                        <span>Works at</span>
                        <span>
                          <a className="is-inverted" href="#">
                            Salesforce
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="about-block">
                      <i className="mdi mdi-map-marker"></i>
                      <div className="about-text">
                        <span>From</span>
                        <span>
                          <a className="is-inverted" href="#">
                            Seattle
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="add-conversation-modal"
        className="modal add-conversation-modal is-xsmall has-light-bg"
      >
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="card">
            <div className="card-heading">
              <h3>New Conversation</h3>

              <div className="close-wrap">
                <span className="close-modal">
                  <i data-feather="x"></i>
                </span>
              </div>
            </div>
            <div className="card-body">
              <img src="assets/img/icons/chat/bubbles.svg" alt="" />

              <div className="field is-autocomplete">
                <div className="control has-icon">
                  <input
                    type="text"
                    className="input simple-users-autocpl"
                    placeholder="Search a user"
                  />
                  <div className="form-icon">
                    <i data-feather="search"></i>
                  </div>
                </div>
              </div>

              <div className="help-text">
                Select a user to start a new conversation. You'll be able to add
                other users later.
              </div>

              <div className="action has-text-centered">
                <button
                  type="button"
                  className="button is-solid accent-button raised"
                >
                  Start conversation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="explorer-menu">
        <div className="explorer-inner">
          <div className="explorer-container">
            <div className="explorer-header">
              <h3>Explore</h3>
              <div className="control">
                <input
                  type="text"
                  className="input is-rounded is-fade"
                  placeholder="Filter"
                />
                <div className="form-icon">
                  <i data-feather="filter"></i>
                </div>
              </div>
            </div>

            <div className="explore-list has-slimscroll">
              <a href="navbar-v1-feed.html" className="explore-item">
                <img src="assets/img/icons/explore/clover.svg" alt="" />
                <h4>Feed</h4>
              </a>

              <a href="navbar-v1-profile-friends.html" className="explore-item">
                <img src="assets/img/icons/explore/friends.svg" alt="" />
                <h4>Friends</h4>
              </a>

              <a href="navbar-v1-videos-home.html" className="explore-item">
                <img src="assets/img/icons/explore/videos.svg" alt="" />
                <h4>Videos</h4>
              </a>

              <a href="navbar-v1-pages-main.html" className="explore-item">
                <img src="assets/img/icons/explore/tag-euro.svg" alt="" />
                <h4>Pages</h4>
              </a>

              <a
                href="navbar-v1-ecommerce-products.html"
                className="explore-item"
              >
                <img src="assets/img/icons/explore/cart.svg" alt="" />
                <h4>Commerce</h4>
              </a>

              <a href="navbar-v1-groups.html" className="explore-item">
                <img src="assets/img/icons/explore/house.svg" alt="" />
                <h4>Interests</h4>
              </a>

              <a href="navbar-v1-stories-main.html" className="explore-item">
                <img src="assets/img/icons/explore/chrono.svg" alt="" />
                <h4>Stories</h4>
              </a>

              <a href="navbar-v1-questions-home.html" className="explore-item">
                <img src="assets/img/icons/explore/question.svg" alt="" />
                <h4>Questions</h4>
              </a>

              <a href="news.html" className="explore-item">
                <img src="assets/img/icons/explore/news.svg" alt="" />
                <h4>News</h4>
              </a>

              <a href="navbar-v1-groups.html" className="explore-item">
                <img src="assets/img/icons/explore/cake.svg" alt="" />
                <h4>Groups</h4>
              </a>

              <a href="https://envato.com/" className="explore-item">
                <img src="assets/img/icons/explore/envato.svg" alt="" />
                <h4>Envato</h4>
              </a>

              <a href="navbar-v1-events.html" className="explore-item">
                <img src="assets/img/icons/explore/calendar.svg" alt="" />
                <h4>Events</h4>
              </a>

              <a
                href="https://cssninja.io/"
                target="_blank"
                className="explore-item"
              >
                <img src="assets/img/icons/explore/pin.svg" alt="" />
                <h4>Css Ninja</h4>
              </a>

              <a href="elements.html" className="explore-item">
                <img src="assets/img/icons/explore/idea.svg" alt="" />
                <h4>Elements</h4>
              </a>

              <a href="navbar-v1-settings.html" className="explore-item">
                <img src="assets/img/icons/explore/settings.svg" alt="" />
                <h4>Settings</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        id="end-tour-modal"
        className="modal end-tour-modal is-xsmall has-light-bg"
      >
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="card">
            <div className="card-heading">
              <h3></h3>

              <div className="close-wrap">
                <span className="close-modal">
                  <i data-feather="x"></i>
                </span>
              </div>
            </div>
            <div className="card-body has-text-centered">
              <div className="image-wrap">
                <img src="assets/img/vector/logo/friendkit.svg" alt="" />
              </div>

              <h3>That's all folks!</h3>
              <p>
                Thanks for taking the friendkit tour. There are still tons of
                other features for you to discover!
              </p>

              <div className="action">
                <a
                  href="index.html#demos-section"
                  className="button is-solid accent-button raised is-fullwidth"
                >
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
