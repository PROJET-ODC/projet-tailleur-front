

const Message = ({ time, text, isReceived, avatarSrc }) => {
    return (
        <div className={`chat-message ${isReceived ? 'is-received' : 'is-sent'}`}>
            <img src={avatarSrc} alt="Avatar" />
            <div className="message-block">
                <span>{time}</span>
                <div className="message-text">{text}</div>
            </div>
        </div>
    );
};

export default Message;
