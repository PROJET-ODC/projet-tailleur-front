import NotificationItem from './NotificationItem';

const NotificationList = ({notifications}) => {
  

  return (
    <div className="nav-drop-body is-notifications">
      {notifications && notifications.map((notification, index) => (
        <NotificationItem
          key={index}
          notification={notification} 
        />
      ))}
    </div>
  );
};

export default NotificationList;
