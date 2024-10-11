const FriendRequestItem = ({ imageSrc, name, mutualFriends, isAdded, onAdd, onRemove }) => {
  return (
    <div className="media">
      <figure className="media-left">
        <p className="image">
          <img src={imageSrc} alt={name} />
        </p>
      </figure>
      <div className="media-content">
        <a href="#">{name}</a>
        <span>{mutualFriends}</span>
      </div>
      <div className="media-right">
        {!isAdded ? (
          <>
            <button className="button icon-button is-solid grey-button raised" onClick={onAdd}>
              <i data-feather="user-plus"></i>
            </button>
            <button className="button icon-button is-solid grey-button raised" onClick={onRemove}>
              <i data-feather="user-minus"></i>
            </button>
          </>
        ) : (
          <div className="added-icon">
            <i data-feather="tag"></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendRequestItem;
