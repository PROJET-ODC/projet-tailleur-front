import decodedToken from "../../../../../../utils/decryptJWT";

const NotificationItem = ({ notification }) => {
  const authFromToken = decodedToken();

  if (authFromToken.identifiant != notification.notifier.identifiant) {
    return (
      <div className="media">
        <figure className="media-left">
          <p className="image">
            <img src={notification.notifier.user.picture} />
          </p>
        </figure>
        <div className="media-content">
          <span>
            <a href="#">
              {notification.notifier.user.firstname +
                " " +
                notification.notifier.user.lastname}
            </a>{" "}
            {notification.content}
          </span>
          <span className="time">{notification.createdAt}</span>
        </div>
        <div className="media-right">
          <div className="added-icon">{/* <i data-feather={icon}></i> */}</div>
        </div>
      </div>
    );
  }
  return null;
};

export default NotificationItem;
