import { useParams } from "react-router-dom"; // Importez useParams
import ProfileHeader from "./ProfileHeader";
import ProfileMenu from "./ProfileMenu";
import ProfileTimeline from "./ProfileTimeline";
import Friends from "./Friends";
import Photos from "./Photos";
import useProfileData from "./useProfileData";
import useScriptLoader from "../../hooks/useScriptLoader";
import scriptUrls from "../../utils/scriptsUrl";

const ProfilePageIdentifiant = () => {
  useScriptLoader(scriptUrls);
  // Récupérez l'ID du profil depuis les paramètres de l'URL
  const { id } = useParams();

  const { profileData, loading, error } = useProfileData(id); // Utilisez l'ID récupéré

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!profileData) return null;

  const { compte, posts } = profileData;

  return (
    <div className="view-wrapper">
      <div className="container is-custom">
        <div id="profile-main" className="view-wrap is-headless">
          <div className="columns is-multiline no-margin">
            <div className="column is-paddingless">
              <ProfileHeader avatar={compte.user.picture} />
              <ProfileMenu />
              <div className="profile-subheader">
                <div className="subheader-start is-hidden-mobile">
                  <span>{profileData.nbrAbonnee}</span>
                  <span>Abonnés</span>
                </div>
                <div className="subheader-middle">
                  <h2>{`${compte.user.firstname} ${compte.user.lastname}`}</h2>
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
            <div
              id="profile-timeline-widgets"
              className="column is-4"
            >
              {compte && <Friends />}
              {compte && <Photos />}
            </div>
            <div className="column is-8">
              {compte && <ProfileTimeline posts={posts} user={compte.user} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageIdentifiant;
