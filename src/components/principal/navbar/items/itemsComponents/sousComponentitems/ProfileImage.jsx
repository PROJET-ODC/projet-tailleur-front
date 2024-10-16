const ProfileImage = ({ tokenObject }) => {
  return (
    <div className="user-image">
      <img src={tokenObject?.picture || "https://placehold.co/50"} alt="" />
      <span className="indicator"></span>
    </div>
  );
};

export default ProfileImage;
