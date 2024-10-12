import AddFriendBlock from "./AddFriendBlock";

function FriendCard() {
  return (
    <>
      <div className="card">
        <div className="card-heading is-bordered">
          <h4>Suggestion d'amis</h4>
        </div>
        <div className="card-body no-padding">
          <AddFriendBlock friendToAdd="" />
        </div>
      </div>
    </>
  );
}

export default FriendCard;
