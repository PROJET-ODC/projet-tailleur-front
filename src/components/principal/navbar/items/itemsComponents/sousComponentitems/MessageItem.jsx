const MessageItem = ({ imgSrc, userName, message, time }) => {
  return (
    <div className="media">
      <figure className="media-left">
        <p className="image">
          <img src={imgSrc} alt={userName} />
        </p>
      </figure>
      <div className="media-content">
        <a href="#">{userName}</a>
        <span>{message}</span>
        <span className="time">{time}</span>
      </div>
      <div className="media-right is-centered">
        <div className="added-icon">
          <i data-feather="message-square"></i>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
