import ProfilePost from './ProfilePost';


const ProfileTimeline = ({ posts }) => {
  return (
    <div className="profile-timeline">
      <div id="profile-timeline-posts" class="box-heading">
        <h4>Mes Posts</h4>
        <div class="button-wrap">
          <button type="button" class="button is-active">Recent</button>
          <button type="button" class="button">Popular</button>
        </div>
      </div>
      <div className="timeline-posts">
        {posts.map(post => (
          <ProfilePost key={post.id} post={post} />
          
        ))}
        
      </div>
    </div>
  );
};
export default ProfileTimeline;
