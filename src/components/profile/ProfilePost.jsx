import React from 'react';
import useProfileData from './useProfileData';

const ProfilePost = ({ post }) => {

    const { profileData, loading, error } = useProfileData();
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!profileData) return null;

    const { user } = profileData;

    console.log(user);

    return (

        <div className="profile-post">
            <div className="time is-hidden-mobile">
                <div className="img-container">
                    <img src={user.picture} alt="Placeholder" />
                </div>
            </div>

            <div className="card is-post">
                <div className="content-wrap">
                    <div className="card-heading">
                        <div className="user-block">
                            <div className="image">
                                <img
                                    src={user.picture || "https://motionbgs.com/i/c/960x540/media/2224/eren-yeager-from-attack-on-titan.jpg"}
                                    alt="User"
                                />
                            </div>
                            <div className="user-info">
                                <a href="#">{`${user.firstname} ${user.lastname}`}</a>
                                <span className="time">{new Date(post.createdAt).toLocaleString()}</span>
                            </div>
                        </div>
                    </div>

                    <div className="card-body">
                        <div className="post-text">
                            <p>{post.content}</p>
                        </div>
                        {post.files && (
                            <div className="post-image">
                                <a href={post.files}>
                                    <img src={post.files} alt="Post" />
                                </a>
                                <div className="like-wrapper">
                                    <button className="like-button">
                                        <i className="mdi mdi-heart not-liked bouncy"></i>
                                        <i className="mdi mdi-heart is-liked bouncy"></i>
                                        <span className="like-overlay"></span>
                                    </button>
                                </div>

                                <div className="fab-wrapper is-share">
                                    <button className="small-fab share-fab modal-trigger">
                                        <i data-feather="link-2"></i>
                                    </button>
                                </div>

                                <div className="fab-wrapper is-comment">
                                    <button className="small-fab">
                                        <i data-feather="message-circle"></i>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="card-footer">
                        <div className="right">
                            <button className="btn button is-solid accent-button raised">
                                <i className="foot mdi mdi-cart-plus" style={{ fontSize: '24px' }}></i>
                            </button>
                        </div>

                        <div className="social-count">
                            <div className="likes-count">
                                <i data-feather="heart"></i>
                                <span>{post.count}</span>
                            </div>
                            <div className="shares-count">
                                <i data-feather="link-2"></i>
                                <span>{post.shareNb}</span>
                            </div>
                            <div className="comments-count">
                                <i data-feather="message-circle"></i>
                                <span>{post.viewNb}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePost;
