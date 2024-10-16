
import UserItem from './UserItem';

const users = [
   { id: 1, name: 'jjj', status: 'Online', imgSrc: 'assets/img/avatars/dan.jpg', chatUser: 'dan' },
   { id: 2, name: 'kkk', status: 'Busy', imgSrc: 'assets/img/avatars/stella.jpg', chatUser: 'stella' },
   { id: 3, name: 'kkk', status: 'Away', imgSrc: 'assets/img/avatars/daniel.jpg', chatUser: 'daniel' },
   { id: 4, name: 'kkk', status: 'Busy', imgSrc: 'assets/img/avatars/david.jpg', chatUser: 'david' },
   { id: 5, name: 'kkk', status: 'Online', imgSrc: 'assets/img/avatars/edward.jpeg', chatUser: 'edward' },
   { id: 6, name: 'kkk', status: 'Away', imgSrc: 'assets/img/avatars/elise.jpg', chatUser: 'elise' },
   { id: 7, name: 'kkk', status: 'Busy', imgSrc: 'assets/img/avatars/nelly.png', chatUser: 'nelly' },
   { id: 8, name: 'kkk', status: 'Busy', imgSrc: 'assets/img/avatars/milly.jpg', chatUser: 'milly' },
];

const UserList = ({handleUserChat}) => {
  return (
    <div className="conversations-list has-slimscroll-xs">
      {users.map(user => (
        <UserItem
          key={user.id}
          chatUser={user.chatUser}
          name={user.name}
          status={user.status}
          imgSrc={user.imgSrc}
          handleUserChat={() => handleUserChat(user.id)}
        />
      ))}
    </div>
  );
};

export default UserList;
