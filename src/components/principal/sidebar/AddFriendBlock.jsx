import { toast } from "react-toastify";
import { followApi } from "../../../api/clients";
import decodedToken from "../../../utils/decryptJWT";
import { Link } from "react-router-dom";

function AddFriendBlock({ suggestion, handleUpdateFriendState }) {
  const handleFollow = async (followed_id) => {
    const result = await followApi(followed_id);

    if (result.status == "OK") {
      toast.success(
        "Vous avez suivi " +
          suggestion.user.firstname +
          " " +
          suggestion.user.lastname
      );
    } else {
      toast.error("Erreur lors de la procédure de suivi");
    }
  };

  return (
    <Link to={`/profile/${suggestion.identifiant}`}>
      <div className="add-friend-block transition-block">
        <img src={suggestion.user.picture} data-user-popover="9" alt="" />
        <div className="page-meta">
          <span>
            {suggestion.user.firstname + "" + suggestion.user.lastname}
          </span>
          <span>{suggestion.identifiant}</span>
        </div>
        <div
          className="add-friend add-transition"
          onClick={() =>
            handleFollow(suggestion.id).then(() => handleUpdateFriendState())
          }
        >
          <i data-feather="user-plus"></i>
        </div>
      </div>
    </Link>
  );
}

export default AddFriendBlock;
