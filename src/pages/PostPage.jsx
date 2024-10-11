import { useState } from "react";
import CommentsSection from "./CommentsSection"; // Importez le composant
import PostInput from "../components/principal/section/PostInput";

function PostPage() {
  const [showComments, setShowComments] = useState(false);

  const commentaires = [
    {
      nom: "Dan Walker",
      temps: "28 minutes ago",
      texte:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua.",
      avatar: "../via.placeholder.com/300x300.png",
      likes: 4,
    },
    {
      nom: "David Kim",
      temps: "15 minutes ago",
      texte:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua.",
      avatar: "../via.placeholder.com/300x300.png",
      likes: 0,
    },
    {
      nom: "David Kim",
      temps: "15 minutes ago",
      texte:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua.",
      avatar: "../via.placeholder.com/300x300.png",
      likes: 0,
    },
  ];
  const [commentsVisible, setCommentsVisible] = useState({});

  const toggleComments = (postId) => {
    setCommentsVisible((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  };

  return (
    <>
      <div id="compose-card" className="card is-new-content">
        <PostInput />
      </div>

      <div id="feed-post-1" className="card is-post">
        <div className="content-wrap">
          <div className="card-heading">
            <div className="user-block">
              <div className="image">
                <img
                  src="../via.placeholder.com/300x300.png"
                  data-demo-src="../src/assets/img/avatars/dan.jpg"
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
            </div>
          </div>

          <div className="card-body">
            <div className="post-text">
              <p>
                Yesterday with <a href="#">@Karen Miller</a> and
                <a href="#">@Marvin Stemperd</a> at the
                <a href="#">#Rock'n'Rolla</a> concert in LA. Was totally
                fantastic! People were really excited about this one!
              </p>
            </div>
            <div className="post-image">
              <a
                data-fancybox="post1"
                data-lightbox-type="comments"
                data-thumb="../src/assets/img/demo/unsplash/1.jpg"
                href="../via.placeholder.com/1600x900.png"
                data-demo-href="../src/assets/img/demo/unsplash/1.jpg"
              >
                <img src="../src/assets/img/demo/unsplash/1.jpg" alt="kk" />
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

              {/* Bouton pour afficher ou masquer les commentaires */}
              <div className="fab-wrapper is-comment">
                <a
                  href="javascript:void(0);"
                  className="small-fab"
                  onClick={() => setShowComments(!showComments)}
                >
                  <i data-feather="message-circle"></i>
                </a>
              </div>

              {/* Section des commentaires */}
              <CommentsSection
                showComments={showComments}
                setShowComments={setShowComments}
                commentaires={commentaires}
              />
            </div>
          </div>

          <div className="card-footer">
            <div className="likers-text">
              <div className="right">
                <a className="btn button is-solid accent-button raised">
                  <h3 className="p"> </h3>
                  <i className=" foot mdi mdi-cart-plus"></i>
                </a>
              </div>
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
          =
          <div className="comments-body has-slimscroll">
            <div className="media is-comment">
              <div className="media-left">
                <div className="image">
                  <img
                    src="../via.placeholder.com/300x300.png"
                    data-demo-src="../src/assets/img/avatars/dan.jpg"
                    data-user-popover="1"
                    alt=""
                  />
                </div>
              </div>
              <div className="media-content">
                <a href="#">Dan Walker</a>
                <span className="time">28 minutes ago</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempo incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris consequat.
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
                        data-demo-src="../src/assets/img/avatars/david.jpg"
                        data-user-popover="4"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="media-content">
                    <a href="#">David Kim</a>
                    <span className="time">15 minutes ago</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempo incididunt ut labore et dolore magna
                      aliqua.
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
                    data-demo-src="../src/assets/img/avatars/rolf.jpg"
                    data-user-popover="13"
                    alt=""
                  />
                </div>
              </div>
              <div className="media-content">
                <a href="#">Rolf Krupp</a>
                <span className="time">9 hours ago</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempo incididunt ut labore et dolore magna aliqua.
                  Exercitation ullamco laboris consequat.
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
                        data-demo-src="../src/assets/img/avatars/elise.jpg"
                        data-user-popover="6"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="media-content">
                    <a href="#">Elise Walker</a>
                    <span className="time">8 hours ago</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempo incididunt ut labore et dolore magna
                      aliqua.
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
                        data-demo-src="../src/assets/img/avatars/rolf.jpg"
                        data-user-popover="13"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="media-content">
                    <a href="#">Rolf Krupp</a>
                    <span className="time">7 hours ago</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempo incididunt ut labore et dolore magna
                      aliqua.
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
                        data-demo-src="../src/assets/img/avatars/elise.jpg"
                        data-user-popover="6"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="media-content">
                    <a href="#">Elise Walker</a>
                    <span className="time">6 hours ago</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempo incididunt ut labore et dolore magna
                      aliqua.
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
                    data-demo-src="../src/assets/img/avatars/stella.jpg"
                    data-user-popover="10"
                    alt=""
                  />
                </div>
              </div>
              <div className="media-content">
                <a href="#">Lana Henrikssen</a>
                <span className="time">10 hours ago</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempo incididunt ut labore et dolore magna aliqua.
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
                      data-demo-src="../src/assets/img/avatars/jenna.png"
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
    </>
  );
}

export default PostPage;
