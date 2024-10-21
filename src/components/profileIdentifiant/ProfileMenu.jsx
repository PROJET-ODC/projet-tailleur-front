import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { followApi, unfollowApi } from "../../api/clients"; // Assurez-vous d'importer unfollowApi
import { toast } from "react-toastify";

const ProfileMenu = ({ isFollowing: initialIsFollowing, profileId, onFollowStatusChange }) => {
  // État local pour le suivi
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const handleFollowClick = async () => {
    try {
      // Mise à jour immédiate de l'état
      setIsFollowing(!isFollowing);

      let result;
      if (isFollowing) {
        result = await unfollowApi(profileId); // Appel de la méthode unfollow
        if (result.status !== "OK") {
          toast.error(result.message || "Erreur lors de la procédure de désabonnement");
          return; // Revenir à l'état précédent si l'opération a échoué
        } else {
          toast.success("Vous ne suivez plus ce profil");
        }
      } else {
        result = await followApi(profileId); // Appel de la méthode follow
        if (result.status !== "OK") {
          toast.error(result.message || "Erreur lors de la procédure de suivi");
          return; // Revenir à l'état précédent si l'opération a échoué
        } else {
          toast.success("Vous suivez maintenant ce profil");
        }
      }
      // Appel de la fonction de changement d'état passée en props
      onFollowStatusChange(!isFollowing);
    } catch (error) {
      console.error("Erreur lors de la modification du statut de suivi", error);
      toast.error("Une erreur est survenue lors de l'opération");
      // Revenir à l'état précédent en cas d'erreur
      setIsFollowing(isFollowing);
    }
  };

  return (
    <div className="profile-menu is-hidden-mobile">
      <div className="menu-start">
        <a href="profile-about.html" className="button has-min-width">
          About
        </a>
      </div>
      <div className="menu-end !flex !flex-row !gap-4">
        <Link
          id="profile-friends-link"
          to=""
          className="button has-min-width"
        >
          Friends
        </Link>
        <button
          onClick={handleFollowClick}
          className={`
              button has-min-width
              px-4 py-2 font-semibold
              transition duration-300 ease-in-out
              transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg
              rounded-lg
         ${isFollowing
              ? 'bg-red-600 hover:bg-red-700 text-white'
              : 'bg-blue-600 hover:bg-blue-700 text-white'}
          focus:outline-none focus:ring-2 focus:ring-offset-2
          ${isFollowing ? 'focus:ring-red-500' : 'focus:ring-blue-500'}
        `}
        >
          {isFollowing ? 'Ne plus suivre' : 'Suivre'}
        </button>

      </div>
    </div>
  );
};

export default ProfileMenu;
