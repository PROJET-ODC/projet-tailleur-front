import React from 'react';
import ProfilePost from './ProfilePost';

const ProfileTimeline = ({ posts, user }) => {
  if (!posts || !user) return null;

  return (
    <div className="profile-timeline">
      <div id="profile-timeline-posts" className="box-heading">
        <h4>Mes Posts</h4>
        <div className="button-wrap">
          <button type="button" className="button is-active">Recent</button>
          <button type="button" className="button">Popular</button>
        </div>
      </div>
      <div className="timeline-posts">
        {posts.map(post => (
          <ProfilePost key={post.id} post={post} user={user} />
        ))}
      </div>
    </div>
  );
};

export default ProfileTimeline;
