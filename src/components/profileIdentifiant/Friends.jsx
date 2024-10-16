import React, { useEffect, useState } from 'react';
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
                        <img
                            src={`${follower.follower.user.picture}`}
                            data-user-popover={follower.follower.id}
                        />

                        <div className="text-content">
                            <a>{`${follower.follower.user.firstname} ${follower.follower.user.lastname}`}</a> {/* Access firstname and lastname correctly */}
                            <span>0 mutual friend(s)</span> {/* You can adjust this if you have mutual friend logic */}
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
