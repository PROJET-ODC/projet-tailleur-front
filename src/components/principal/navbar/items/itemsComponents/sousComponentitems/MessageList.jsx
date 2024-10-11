import MessageItem from './MessageItem';

const MessageList = () => {
  const messages = [
    {
      imgSrc: 'assets/img/avatars/nelly.png',
      userName: 'Nelly Schwartz',
      message: 'I think we should meet near the Starbucks so we can get...',
      time: 'Yesterday',
    },
    {
      imgSrc: 'assets/img/avatars/edward.jpeg',
      userName: 'Edward Mayers',
      message: 'That was a real pleasure seeing you last time we really should...',
      time: 'Last week',
    },
    {
      imgSrc: 'assets/img/avatars/dan.jpg',
      userName: 'Dan Walker',
      message: 'Hey there, would it be possible to borrow your bicycle, I really need...',
      time: 'Jun 03 2018',
    },
  ];

  return (
    <div className="nav-drop-body is-friend-requests">
      {messages.map((message, index) => (
        <MessageItem
          key={index}
          imgSrc={message.imgSrc}
          userName={message.userName}
          message={message.message}
          time={message.time}
        />
      ))}
    </div>
  );
};

export default MessageList;
