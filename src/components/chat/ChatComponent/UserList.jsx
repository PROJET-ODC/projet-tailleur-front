import UserItem from "./UserItem";

const UserList = ({ handleUserChat, recentDiscussions }) => {
  return (
    <div className="conversations-list has-slimscroll-xs">
      {recentDiscussions && recentDiscussions.map(user => (
        <UserItem
          key={user.id}
          recentDiscussion={user}
          handleUserChat={handleUserChat}
        />
      ))}
    </div>
  );
};

export default UserList;
