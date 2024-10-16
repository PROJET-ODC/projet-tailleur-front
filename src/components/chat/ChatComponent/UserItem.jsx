
const UserItem = ({ chatUser, name, status, imgSrc, handleUserChat }) => {
  return (
    <div className={`user-item ${status === 'Online' ? 'is-active' : ''}`} onClick={handleUserChat} data-chat-user={chatUser} data-full-name={name} data-status={status}>
      <div className="avatar-container">
        <img className="user-avatar" src={imgSrc} alt={`${name}'s Avatar`} />
        <div className={`user-status is-${status.toLowerCase()}`}></div>
      </div>
    </div>
  );
};

export default UserItem;
