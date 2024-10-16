import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom
import apiBase from '../../api/apiBase'; // Adjusted import path to apiBase

const Friends = () => {
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
        <div className="friend-cards-list">
            {followers.map((follower) => (
                <div className="card is-friend-card" key={follower.id}>
                    <div className="friend-item">
                        {/* Wrapping the image with a Link */}
                        <Link to={`/profile/${follower.follower.id}`}> {/* Link to the profile page */}
                            <img
                                src={`${follower.follower.user.picture}`}
                                alt={`${follower.follower.user.firstname}'s profile`}
                                data-user-popover={follower.follower.id}
                            />
                        </Link>

                        <div className="text-content">
                            <Link to={`/profile/${follower.follower.id}`}> {/* Link for the user's name */}
                                {`${follower.follower.user.firstname} ${follower.follower.user.lastname}`}
                            </Link>
                            <span>0 mutual friend(s)</span> {/* Placeholder for mutual friends logic */}
                        </div>
                        <div className="star-friend">
                            <i data-feather="star"></i> {/* Star icon for favorites or highlighting */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Friends;
