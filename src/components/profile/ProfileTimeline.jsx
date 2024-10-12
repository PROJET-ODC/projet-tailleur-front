import ProfilePost from './ProfilePost';

const ProfileTimeline = () => {
  return (
    <div className="profile-timeline">
      <div id="profile-timeline-posts" className="box-heading">
        <h4>Mes Posts</h4>
        <div className="button-wrap">
          <button type="button" className="button is-active">Recent</button>
          <button type="button" className="button">Popular</button>
        </div>
      </div>

      <ProfilePost />
      {/* Ajoutez d'autres <ProfilePost /> ici si nécessaire */}
    </div>
  );
};

export default ProfileTimeline;
