const ChatSearch = () => {
    return (
        <div className="chat-search">
            <div className="control has-icon">
                <input type="text" className="input" placeholder="Search messages" />
                <div className="form-icon">
                    <i data-feather="search"></i>
                </div>
            </div>
        </div>
    );
};

export default ChatSearch;
