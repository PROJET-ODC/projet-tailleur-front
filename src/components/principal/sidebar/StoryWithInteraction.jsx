import { useState, useEffect } from "react";
import Stories from "react-insta-stories";
import { FaHeart } from "react-icons/fa";
import {
  getAllLikesStatus,
  sendMessages,
  updateLikeStatus,
} from "../../../api/clients";
import { toast } from "react-toastify";
import decodedToken from "../../../utils/decryptJWT";

const StoryWithInteraction = ({ story, resetStories }) => {
  const authFromToken = decodedToken();
  //   console.log(story);

  const [liked, setLiked] = useState(false);
  const [saveLikes, setSaveLikes] = useState();

  const [comment, setComment] = useState("");

  useEffect(() => {
    const abortCont = new AbortController();
    async function allStatus() {
      try {
        const result = await getAllLikesStatus(story.status_id);
        console.log(result);

        if (result.status === "OK") {
          if (result.statusLikes.length) {
            setLiked(true);
          }
        }
      } catch (error) {
        console.error("Error fetching like status:", error);
      }
    }
    allStatus();

    return () => abortCont.abort();
  }, [story.status_id]);

  const handleLike = async () => {
    setLiked(!liked);
    // console.log("state", liked);

    const result = await updateLikeStatus({
      compte_id: authFromToken.id,
      status_id: story.status_id,
    });

    if (result.status == "KO") {
      toast.error("Erreur lors de la mise à jour du status de like");
      return;
    }

    story.compte_id = story.compte_id;
    toast.success(result.message);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    // console.log("Comment submitted:", comment);
    const newMessage = {
      texte: story.url + " [ Reponse en commentaire ] : " + comment,
      messaged_id: story.compte_id,
    };

    const result = await sendMessages(newMessage);

    if (result.status == "KO") {
      toast.error("Erreur lors de l'envoi du message");
      return;
    }
    toast.success("commentaire envoyer avec succès");
    setComment(""); // Clear the comment input
  };

  return (
    <div className="absolute h-full w-full">
      {/* Display the story content (image/video/etc.) */}
      <img
        src={story.url}
        alt="Story"
        className="h-full w-full object-contain"
        style={{ maxHeight: "800px", maxWidth: "600px" }}
      />

      {/* Display the current time */}
      <div className="absolute top-4 left-4 text-white text-lg font-bold !z-[1001]">
        {story.delay}
      </div>

      {/* Comment input */}
      <div className="absolute bottom-4 left-4 right-4 !z-[1001]">
        {authFromToken.id != story.compte_id && (
          <form
            onSubmit={handleCommentSubmit}
            className="flex gap-5 items-center"
          >
            <input
              type="text"
              value={comment}
              onChange={handleCommentChange}
              placeholder="Add a comment..."
              className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 !z-[1001]"
            />
            <FaHeart
              size={30}
              color={liked ? "red" : "white"}
              onClick={handleLike}
              className="cursor-pointer !z-[1001]"
            />
          </form>
        )}
      </div>
    </div>
  );
};

const StoryComponent = ({ stories }) => {
  const storyItems = stories.map((story) => ({
    content: () => <StoryWithInteraction story={story} />,
  }));

  return (
    <Stories
      stories={storyItems}
      defaultInterval={1500}
      width={600}
      height={800}
    />
  );
};

export default StoryComponent;
