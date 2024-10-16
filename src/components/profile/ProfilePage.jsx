import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileMenu from './ProfileMenu';
import ProfileTimeline from './ProfileTimeline';
import Friends from './Friends';
import Photos from './Photos';
import useProfileData from './useProfileData'; 

const ProfilePage = () => {
  // Use the hook to fetch the data
  const { profileData, loading, error } = useProfileData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!profileData) return null;

  const { user, compte, tailleur, posts } = profileData;

  return (
    <div className="view-wrapper">
      <div className="container is-custom">
        <div id="profile-main" className="view-wrap is-headless">
          <div className="columns is-multiline no-margin">
            <div className="column is-paddingless">
              <ProfileHeader avatar={user.picture} />
              {/* Pass the user's role to ProfileMenu */}
              <ProfileMenu role={compte.role} />
              <div className="profile-subheader">
                <div className="subheader-start is-hidden-mobile">
                  <span>{profileData.nbrAbonnee}</span>
                  <span>Abonnés</span>
                </div>
                <div className="subheader-middle">
                  <h2>{`${user.firstname} ${user.lastname}`}</h2>
                  <span>{compte.bio}</span>
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
            <div id="profile-timeline-widgets" className="column is-4">
              {tailleur && <Friends />}
              {tailleur && <Photos />}
            </div>
            <div className="column is-8">
              {tailleur && <ProfileTimeline posts={posts} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
