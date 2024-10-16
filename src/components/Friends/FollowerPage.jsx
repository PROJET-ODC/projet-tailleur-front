import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom
import apiBase from '../../api/apiBase';
// Adjusted import path to apiBase
const FollowerPage = () => {
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        const fetchFollowers = async () => {
            try {
                const response = await apiBase.get('/client/followers'); // API endpoint to fetch followers
                if (response.data.status === 'OK') {
                    setFollowers(response.data.followers); // Set the fetched followers to state
                }
            } catch (error) {
                console.error('Error fetching followers:', error); // Error handling
            }
        };

        fetchFollowers(); // Call the fetch function
    }, []);

    console.log(followers);

    return (
        <div class="columns">
            <div class="column">
                <div class="box-heading">
                    <div class="dropdown friends-dropdown is-spaced is-neutral dropdown-trigger">
                        <div>
                            <div class="button">
                                <span>All Follower</span>
                                <i data-feather="chevron-down"></i>
                            </div>
                        </div>
                        <div class="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                                <a href="#" class="dropdown-item">
                                    <div class="media">
                                        <i data-feather="heart"></i>
                                        <div class="media-content">
                                            <h3>Close Friends</h3>
                                            <small>Your closest friends list.</small>
                                        </div>
                                    </div>
                                </a>
                                <a class="dropdown-item">
                                    <div class="media">
                                        <i data-feather="bell"></i>
                                        <div class="media-content">
                                            <h3>Followed</h3>
                                            <small>Friends you are following.</small>
                                        </div>
                                    </div>
                                </a>
                                <a class="dropdown-item">
                                    <div class="media">
                                        <i data-feather="coffee"></i>
                                        <div class="media-content">
                                            <h3>Work relations</h3>
                                            <small>Your work relations.</small>
                                        </div>
                                    </div>
                                </a>
                                <hr class="dropdown-divider" />
                                <a class="dropdown-item modal-trigger" data-modal="albums-modal">
                                    <div class="media">
                                        <i data-feather="mail"></i>
                                        <div class="media-content">
                                            <h3>Friend Requests</h3>
                                            <small>Your pending friend requests.</small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="control heading-search">
                        <input type="text" class="input is-rounded" placeholder="Search Friends..." />
                        <div class="search-icon">
                            <i data-feather="search"></i>
                        </div>
                    </div>
                </div>


                <div class="friends-grid">

                    <div class="columns is-multiline">
                        {followers.map((follower) => (

                            <div class="column is-3" key={follower.id}>
                                <Link to={`/profile/${follower.follower.id}`}>
                                    <a class="friend-item has-text-centered">
                                        <div class="avatar-wrap">
                                            <div class="circle"></div>
                                            <div class="chat-button">
                                                <i data-feather="message-circle"></i>
                                            </div>
                                            <img src={`${follower.follower.user.picture}`} data-demo-src="assets/img/avatars/milly.jpg" data-user-popover="7" alt="" />
                                        </div>
                                        <h3>{`${follower.follower.user.firstname} ${follower.follower.user.lastname}`}</h3>
                                        <p>{`${follower.follower.bio}`}</p>
                                    </a>
                                </Link>
                            </div>

                        ))}

                    </div>

                </div>


                <div class="load-more-wrap has-text-centered">
                    <a href="#" class="load-more-button">Load More</a>
                </div>
            </div>
        </div >

    )
};

export default FollowerPage;
