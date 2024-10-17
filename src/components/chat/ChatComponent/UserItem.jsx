import { useEffect, useState } from "react";
import decodedToken from "../../../utils/decryptJWT";

const UserItem = ({ handleUserChat, recentDiscussion }) => {
  const authFromToken = decodedToken();
  const messager = recentDiscussion.messager;
  const messaged = recentDiscussion.messaged;
  const [userChat, setUserChat] = useState(null);

  useEffect(() => {
    if (authFromToken.id == messager.id) {
      console.log(1);

      setUserChat(messaged);
    }
    if (authFromToken.id == messaged.id) {
      console.log(messager);

      setUserChat(messager);
    }
  }, []);

  return (
    userChat && (
      <div
        className="user-item is-active"
        onClick={() => handleUserChat(userChat)}
      >
        <div className="avatar-container">
          <img
            className="user-avatar"
            src={userChat.user.picture}
            alt="User Avatar"
          />
          <div className="user-status is-active"></div>
        </div>
      </div>
    )
  );
};

export default UserItem;
