import Avatar from "./Avatar";
import Username from "./Username";

const RecipientBlock = ({ name, status, avatarSrc }) => {
  return (
    <div className="recipient-block">
      <Avatar src={avatarSrc} alt={name} />
      <Username name={name} status={status} />
    </div>
  );
};

export default RecipientBlock;
