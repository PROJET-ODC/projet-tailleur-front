import ProfileHeader from './ProfileHeader';
import ProfileMenu from './ProfileMenu';
import ProfileTimeline from './ProfileTimeline';
import { tailorData } from './data/data'; // Importation des données

const ProfilePage = () => {
  const { tailor, posts } = tailorData; // Destructuration des données

  return (
    <div className="view-wrapper">
      <div className="container is-custom">
        <div id="profile-main" className="view-wrap is-headless">
          <div className="columns is-multiline no-margin">
            <div className="column is-paddingless">
              <ProfileHeader avatar={tailor.avatar} />
              <ProfileMenu />
              <div className="profile-subheader">
                <div className="subheader-start is-hidden-mobile">
                  <span>{tailor.friendsCount}</span>
                  <span>Friends</span>
                </div>
                <div className="subheader-middle">
                  <h2>{tailor.name}</h2>
                  <span>{tailor.profession}</span>
                </div>
                <div className="subheader-end is-hidden-mobile">
                  <a className="button has-icon is-bold">
                    <i data-feather="clock"></i>
                    History
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="columns">
            <div className="column is-12">
              <ProfileTimeline posts={posts} /> {/* Passer les posts ici */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
