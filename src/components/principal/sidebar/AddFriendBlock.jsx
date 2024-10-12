function AddFriendBlock({ friendToAdd }) {
  return (
    <>
      <div className="add-friend-block transition-block">
        <img
          src="../via.placeholder.com/300x300.png"
          data-demo-src="assets/img/avatars/nelly.png"
          data-user-popover="9"
          alt=""
        />
        <div className="page-meta">
          <span>Nelly Schwartz</span>
          <span>Melbourne</span>
        </div>
        <div className="add-friend add-transition">
          <i data-feather="user-plus"></i>
        </div>
      </div>
    </>
  );
}

export default AddFriendBlock;
