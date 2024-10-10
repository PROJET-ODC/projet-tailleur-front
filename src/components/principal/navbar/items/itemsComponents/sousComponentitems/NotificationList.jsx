import React from 'react';
import NotificationItem from './NotificationItem';

const NotificationList = () => {
  const notifications = [
    {
      imgSrc: 'assets/img/avatars/david.jpg',
      userName: 'David Kim',
      action: 'commented on your post',
      time: '30 minutes ago',
      icon: 'message-square',
    },
    {
      imgSrc: 'assets/img/avatars/daniel.jpg',
      userName: 'Daniel Wellington',
      action: 'liked your profile',
      time: '43 minutes ago',
      icon: 'heart',
    },
    {
      imgSrc: 'assets/img/avatars/stella.jpg',
      userName: 'Stella Bergmann',
      action: 'shared a New video on your wall',
      time: 'Yesterday',
      icon: 'youtube',
    },
    {
      imgSrc: 'assets/img/avatars/elise.jpg',
      userName: 'Elise Walker',
      action: 'shared an Image with you and 2 other people',
      time: '2 days ago',
      icon: 'image',
    },
  ];

  return (
    <div className="nav-drop-body is-notifications">
      {notifications.map((notification, index) => (
        <NotificationItem
          key={index}
          imgSrc={notification.imgSrc}
          userName={notification.userName}
          action={notification.action}
          time={notification.time}
          icon={notification.icon}
        />
      ))}
    </div>
  );
};

export default NotificationList;
