const Aavatar = ({ avatarSrc, status, altText }) => {
    return (
      <div className="avatar-container">
        <img className="user-avatar" src={avatarSrc} alt={altText} />
        <div className={`user-status is-${status.toLowerCase()}`}></div>
      </div>
    );
  };
  
  export default Aavatar;