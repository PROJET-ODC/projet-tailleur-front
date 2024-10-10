import React from 'react';

const NotificationItem = ({ imgSrc, userName, action, time, icon }) => {
  return (
    <div className="media">
      <figure className="media-left">
        <p className="image">
          <img src={imgSrc} alt={userName} />
        </p>
      </figure>
      <div className="media-content">
        <span>
          <a href="#">{userName}</a> {action}
        </span>
        <span className="time">{time}</span>
      </div>
      <div className="media-right">
        <div className="added-icon">
          <i data-feather={icon}></i>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
